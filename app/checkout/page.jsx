"use client";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { saveShippingAddress } from '@/redux/actions/cartActions';
import Script from 'next/script';
import axios from 'axios';
import { Loader2, Truck, CreditCard, ChevronRight, Package, ShieldCheck } from 'lucide-react';
import StatusModal from '@/components/common/StatusModal';
import './Checkout.css';

const Checkout = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const cart = useSelector((state) => state.cart);
    const { cartItems, shippingAddress } = cart;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const [address, setAddress] = useState(shippingAddress.address || '');
    const [city, setCity] = useState(shippingAddress.city || '');
    const [province, setProvince] = useState(shippingAddress.state || '');
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '');
    const [country, setCountry] = useState(shippingAddress.country || '');
    const [phone, setPhone] = useState(shippingAddress.phone || '');

    const [shippingRates, setShippingRates] = useState([]);
    const [selectedRate, setSelectedRate] = useState(null);
    const [loadingShipping, setLoadingShipping] = useState(false);
    const [shippingError, setShippingError] = useState(null);

    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [clover, setClover] = useState(null);

    const [mounted, setMounted] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);
    const [modalConfig, setModalConfig] = useState({
        type: 'success',
        title: '',
        message: '',
        actionLabel: '',
        onAction: null,
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (cartItems.length === 0) {
            router.push('/cart');
        } else if (!userInfo) {
            router.push('/signin?redirect=checkout');
        } else if (step === 2 && typeof window !== 'undefined') {
            const initClover = () => {
                if (!window.Clover) {
                    setTimeout(initClover, 500);
                    return;
                }
                const numberEl = document.querySelector('#card-number');
                if (numberEl && !numberEl.hasChildNodes()) {
                    try {
                        const cloverInstance = new window.Clover(process.env.NEXT_PUBLIC_CLOVER_PUBLIC_KEY || 'test_key');
                        const elements = cloverInstance.elements();
                        const styles = {
                            body: {
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '14px',
                                color: '#0f172a',
                                fontWeight: '500',
                            },
                        };
                        elements.create('CARD_NUMBER', { styles }).mount('#card-number');
                        elements.create('CARD_DATE', { styles }).mount('#card-date');
                        elements.create('CARD_CVV', { styles }).mount('#card-cvv');
                        elements.create('CARD_POSTAL_CODE', { styles }).mount('#card-postal-code');
                        setClover(cloverInstance);
                    } catch (err) {
                        console.error('Clover init error:', err);
                    }
                }
            };
            initClover();
        }
    }, [userInfo, cartItems, router, step]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [step]);

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    const taxPrice = Number((0.15 * subtotal).toFixed(2));
    const shippingPrice = selectedRate ? Number(selectedRate.rate) : 0;
    const totalPrice = subtotal + taxPrice + shippingPrice;

    const calculateShipping = async (e) => {
        e.preventDefault();
        setLoadingShipping(true);
        setShippingError(null);
        setShippingRates([]);
        setSelectedRate(null);
        try {
            const { data } = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/shipping/rates`,
                {
                    shippingAddress: { address, city, state: province, postalCode, country, phone },
                    cartItems,
                },
                { headers: { Authorization: `Bearer ${userInfo.token}` } }
            );
            const filteredRates = Array.isArray(data)
                ? data
                : [];
            setShippingRates(filteredRates);
            if (filteredRates.length > 0) {
                setSelectedRate(
                    [...filteredRates].sort((a, b) => parseFloat(a.rate) - parseFloat(b.rate))[0]
                );
            } else {
                setShippingError('No shipping rates available for this address.');
            }
        } catch (error) {
            setShippingError(error.response?.data?.message || 'Failed to get shipping rates.');
        } finally {
            setLoadingShipping(false);
        }
    };

    const submitShippingHandler = () => {
        if (!selectedRate) {
            alert('Please select a shipping method.');
            return;
        }
        dispatch(saveShippingAddress({ address, city, state: province, postalCode, country, phone }));
        setStep(2);
    };

    const initPayment = async () => {
        try {
            setLoading(true);
            if (!clover) {
                alert('Payment gateway is loading. Please try again.');
                setLoading(false);
                return;
            }
            const result = await clover.createToken();
            if (result.errors) {
                setModalConfig({
                    type: 'error',
                    title: 'Payment Error',
                    message: 'Card verification failed: ' + Object.values(result.errors).join(', '),
                    actionLabel: 'Try Again',
                    onAction: () => setModalOpen(false),
                });
                setModalOpen(true);
                setLoading(false);
                return;
            }
            const orderData = {
                orderItems: cartItems,
                shippingAddress: { address, city, state: province, postalCode, country, phone },
                paymentMethod: 'Clover',
                itemsPrice: subtotal,
                taxPrice,
                shippingPrice,
                totalPrice,
            };
            const { data: createdOrder } = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/orders`,
                orderData,
                { headers: { Authorization: `Bearer ${userInfo.token}` } }
            );
            await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/orders/clover/pay`,
                { amount: totalPrice, orderId: createdOrder._id, source: result.token },
                { headers: { Authorization: `Bearer ${userInfo.token}` } }
            );
            setModalConfig({
                type: 'success',
                title: 'Order Placed!',
                message: 'Your order has been confirmed. You will receive a confirmation email shortly.',
                actionLabel: 'View My Orders',
                onAction: () => router.push('/orders'),
            });
            setModalOpen(true);
        } catch (error) {
            setModalConfig({
                type: 'error',
                title: 'Payment Failed',
                message: error.response?.data?.message || 'Something went wrong. Please try again.',
                actionLabel: 'Try Again',
                onAction: () => setModalOpen(false),
            });
            setModalOpen(true);
        } finally {
            setLoading(false);
        }
    };

    const formatLabel = (str) => {
        if (!str) return '';
        return str
            .split('_')
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
            .join(' ');
    };

    if (!mounted) return null;
    if (cartItems.length === 0) return null;

    return (
        <div className="checkout-page">
            <Script 
                src="https://checkout.sandbox.dev.clover.com/sdk.js" 
                strategy="lazyOnload"
            />

            {/* ── Header ── */}
            <header className="checkout-hero-elite">
                <div className="checkout-hero-container">
                    <div className="checkout-hero-text">
                        <p className="checkout-step-label">Step {step} of 2</p>
                        <h1>Checkout</h1>
                        <p className="checkout-secure-label">Secure checkout — your information is encrypted</p>
                    </div>
                    <div className="checkout-steps-elite">
                        <div className={`step-item-elite ${step >= 1 ? 'active' : ''}`}>
                            <div className="step-circle">01</div>
                            <span className="step-name">Shipping</span>
                        </div>
                        <div className="step-divider"></div>
                        <div className={`step-item-elite ${step >= 2 ? 'active' : ''}`}>
                            <div className="step-circle">02</div>
                            <span className="step-name">Payment</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="checkout-main-section">
                <div className="checkout-container-elite">
                    <div className="checkout-grid-elite">

                        {/* ── LEFT: Forms ── */}
                        <div className="form-side">

                            {step === 1 ? (
                                /* SHIPPING FORM */
                                <div className="terminal-card-elite">
                                    <div className="terminal-header">
                                        <div className="terminal-icon-wrap">
                                            <Truck size={22} className="terminal-icon" />
                                        </div>
                                        <div>
                                            <h2>Shipping Address</h2>
                                            <p>Enter the address where you&apos;d like your order delivered</p>
                                        </div>
                                    </div>

                                    <form onSubmit={calculateShipping}>
                                        <div className="form-group-elite">
                                            <label className="form-label-elite">Street Address</label>
                                            <input
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                required
                                                className="form-input-elite"
                                                placeholder="123 Main Street"
                                            />
                                        </div>

                                        <div className="form-row-2">
                                            <div className="form-group-elite">
                                                <label className="form-label-elite">City</label>
                                                <input
                                                    value={city}
                                                    onChange={(e) => setCity(e.target.value)}
                                                    required
                                                    className="form-input-elite"
                                                    placeholder="City"
                                                />
                                            </div>
                                            <div className="form-group-elite">
                                                <label className="form-label-elite">State / Province</label>
                                                <input
                                                    value={province}
                                                    onChange={(e) => setProvince(e.target.value)}
                                                    required
                                                    className="form-input-elite"
                                                    placeholder="State"
                                                />
                                            </div>
                                        </div>

                                        <div className="form-row-2">
                                            <div className="form-group-elite">
                                                <label className="form-label-elite">Postal Code</label>
                                                <input
                                                    value={postalCode}
                                                    onChange={(e) => setPostalCode(e.target.value)}
                                                    required
                                                    className="form-input-elite"
                                                    placeholder="ZIP / Postal Code"
                                                />
                                            </div>
                                            <div className="form-group-elite">
                                                <label className="form-label-elite">Country</label>
                                                <input
                                                    value={country}
                                                    onChange={(e) => setCountry(e.target.value)}
                                                    required
                                                    className="form-input-elite"
                                                    placeholder="Country"
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group-elite">
                                            <label className="form-label-elite">Phone Number</label>
                                            <input
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                required
                                                className="form-input-elite"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>

                                        {shippingRates.length === 0 ? (
                                            <button
                                                type="submit"
                                                disabled={loadingShipping}
                                                className="liquidate-btn-elite"
                                            >
                                                {loadingShipping ? (
                                                    <Loader2 className="animate-spin" size={20} />
                                                ) : (
                                                    'Calculate Shipping'
                                                )}
                                            </button>
                                        ) : (
                                            <div className="shipping-rates-section">
                                                <div className="shipping-rates-header">
                                                    <h3>Select Shipping Method</h3>
                                                    <button
                                                        type="button"
                                                        onClick={() => setShippingRates([])}
                                                        className="protocol-reset-btn"
                                                    >
                                                        Change address
                                                    </button>
                                                </div>
                                                <div className="protocol-list-elite">
                                                    {shippingRates.map((rate) => (
                                                        <div
                                                            key={rate.id}
                                                            onClick={() => setSelectedRate(rate)}
                                                            className={`protocol-card-elite ${selectedRate?.id === rate.id ? 'active' : ''}`}
                                                        >
                                                            <div className="protocol-card-left">
                                                                <div className="protocol-indicator">
                                                                    {selectedRate?.id === rate.id && (
                                                                        <div className="protocol-dot"></div>
                                                                    )}
                                                                </div>
                                                                <div className="protocol-info">
                                                                    <h4>{formatLabel(rate.service)}</h4>
                                                                    <p>
                                                                        {formatLabel(rate.carrier)} &middot;{' '}
                                                                        {rate.est_delivery_days
                                                                            ? `Est. ${rate.est_delivery_days} business days`
                                                                            : 'Standard delivery'}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <span className="protocol-price">
                                                                ${parseFloat(rate.rate).toFixed(2)}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={submitShippingHandler}
                                                    className="liquidate-btn-elite"
                                                >
                                                    Continue to Payment{' '}
                                                    <ChevronRight size={16} style={{ display: 'inline', marginLeft: 4 }} />
                                                </button>
                                            </div>
                                        )}

                                        {shippingError && (
                                            <p className="shipping-error">{shippingError}</p>
                                        )}
                                    </form>
                                </div>
                            ) : (
                                /* PAYMENT FORM */
                                <div className="terminal-card-elite">
                                    <div className="terminal-header" style={{ justifyContent: 'space-between' }}>
                                        <div className="terminal-header-left">
                                            <div className="terminal-icon-wrap">
                                                <CreditCard size={22} className="terminal-icon" />
                                            </div>
                                            <div>
                                                <h2>Payment</h2>
                                                <p>Enter your card details to complete your order</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setStep(1)}
                                            className="back-btn"
                                        >
                                            &larr; Back to shipping
                                        </button>
                                    </div>

                                    {/* Amount banner */}
                                    <div className="amount-banner">
                                        <div>
                                            <p className="amount-label">Total Amount</p>
                                            <p className="amount-value">${totalPrice.toFixed(2)}</p>
                                        </div>
                                        <div className="ssl-badge">
                                            <span className="ssl-dot"></span>
                                            <span className="ssl-text">SSL Secured</span>
                                        </div>
                                    </div>

                                    <div className="payment-fields">
                                        <div className="form-group-elite">
                                            <label className="form-label-elite">Card Number</label>
                                            <div className="clover-field-wrap">
                                                <div id="card-number" style={{ height: 22 }}></div>
                                            </div>
                                        </div>

                                        <div className="form-row-2">
                                            <div className="form-group-elite">
                                                <label className="form-label-elite">Expiry Date (MM/YY)</label>
                                                <div className="clover-field-wrap">
                                                    <div id="card-date" style={{ height: 22 }}></div>
                                                </div>
                                            </div>
                                            <div className="form-group-elite">
                                                <label className="form-label-elite">CVV</label>
                                                <div className="clover-field-wrap">
                                                    <div id="card-cvv" style={{ height: 22 }}></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group-elite">
                                            <label className="form-label-elite">Billing Postal Code</label>
                                            <div className="clover-field-wrap">
                                                <div id="card-postal-code" style={{ height: 22 }}></div>
                                            </div>
                                        </div>

                                        <div className="secure-notice">
                                            <ShieldCheck size={18} className="secure-icon" />
                                            <span>Your payment is protected with 256-bit SSL encryption.</span>
                                        </div>

                                        <button
                                            onClick={initPayment}
                                            disabled={loading}
                                            className="liquidate-btn-elite"
                                        >
                                            {loading ? (
                                                <Loader2 className="animate-spin" size={20} />
                                            ) : (
                                                `Pay $${totalPrice.toFixed(2)}`
                                            )}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* ── RIGHT: Order Summary ── */}
                        <div className="summary-side">
                            <div className="summary-panel-checkout">
                                <h3>Order Summary</h3>

                                <div className="acquisition-scroller custom-scrollbar">
                                    {cartItems.map((item, i) => (
                                        <div key={i} className="acquisition-item-elite">
                                            <div className="acquisition-img">
                                                <img
                                                    src={
                                                        item.image?.startsWith('http')
                                                            ? item.image
                                                            : item.image
                                                            ? `${process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || ''}${item.image}`
                                                            : 'https://placehold.co/60'
                                                    }
                                                    alt={item.title}
                                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                                    onError={(e) => { e.target.src = 'https://placehold.co/60'; }}
                                                />
                                            </div>
                                            <div className="acquisition-details">
                                                <h4>{item.title}</h4>
                                                <p className="acquisition-qty">Qty: {item.qty}</p>
                                            </div>
                                            <p className="acquisition-price">
                                                ${(item.price * item.qty).toFixed(2)}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="order-totals">
                                    <div className="order-total-row">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="order-total-row">
                                        <span>Shipping</span>
                                        <span>
                                            {shippingPrice === 0 ? 'Calculated above' : `$${shippingPrice.toFixed(2)}`}
                                        </span>
                                    </div>
                                    <div className="order-total-row">
                                        <span>Tax (15%)</span>
                                        <span>${taxPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="order-total-final">
                                        <span>Total</span>
                                        <span>${totalPrice.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="shipping-note">
                                    <Package size={15} className="shipping-note-icon" />
                                    <p>Tracking number sent via email after your order ships.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <StatusModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                type={modalConfig.type}
                title={modalConfig.title}
                message={modalConfig.message}
                actionLabel={modalConfig.actionLabel}
                onAction={modalConfig.onAction}
            />
        </div>
    );
};

export default Checkout;
