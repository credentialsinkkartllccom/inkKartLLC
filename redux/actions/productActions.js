import axios from 'axios';
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_UPDATE_REVIEW_REQUEST,
    PRODUCT_UPDATE_REVIEW_SUCCESS,
    PRODUCT_UPDATE_REVIEW_FAIL,
    PRODUCT_DELETE_REVIEW_REQUEST,
    PRODUCT_DELETE_REVIEW_SUCCESS,
    PRODUCT_DELETE_REVIEW_FAIL,
} from '../constants/productConstants';

const BASE = '/api';

const authHeader  = (userInfo) => ({ headers: { Authorization: `Bearer ${userInfo.token}` } });
const jsonHeader  = (userInfo) => ({ headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${userInfo.token}` } });

// ─── List products ────────────────────────────────────────────────────────────
export const listProducts = (search = '', category = '', pageNumber = 1, brand = '', limit = 20) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });

        const searchParam   = encodeURIComponent(search);
        const categoryParam = encodeURIComponent(category);
        const brandParam    = encodeURIComponent(brand);

        let url = `${BASE}/products?search=${searchParam}&category=${categoryParam}&page=${pageNumber}&limit=${limit}`;
        if (brand && brand !== 'all') url += `&brand=${brandParam}`;

        const { data } = await axios.get(url);
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.response?.data?.message || error.message });
    }
};

// ─── Product details ──────────────────────────────────────────────────────────
export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`${BASE}/products/${id}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.response?.data?.message || error.message });
    }
};

// ─── Delete product ───────────────────────────────────────────────────────────
export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_DELETE_REQUEST });
        const { userLogin: { userInfo } } = getState();
        await axios.delete(`${BASE}/products/${id}`, authHeader(userInfo));
        dispatch({ type: PRODUCT_DELETE_SUCCESS });
    } catch (error) {
        dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.response?.data?.message || error.message });
    }
};

// ─── Create product ───────────────────────────────────────────────────────────
export const createProduct = (productData) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_CREATE_REQUEST });
        const { userLogin: { userInfo } } = getState();
        const { data } = await axios.post(`${BASE}/products`, productData, authHeader(userInfo));
        dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_CREATE_FAIL, payload: error.response?.data?.message || error.message });
    }
};

// ─── Update product ───────────────────────────────────────────────────────────
export const updateProduct = (id, productData) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_UPDATE_REQUEST });
        const { userLogin: { userInfo } } = getState();
        const { data } = await axios.put(`${BASE}/products/${id}`, productData, authHeader(userInfo));
        dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_UPDATE_FAIL, payload: error.response?.data?.message || error.message });
    }
};

// ─── Create review ────────────────────────────────────────────────────────────
export const createProductReview = (productId, review) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST });
        const { userLogin: { userInfo } } = getState();
        await axios.post(`${BASE}/products/${productId}/reviews`, review, jsonHeader(userInfo));
        dispatch({ type: PRODUCT_CREATE_REVIEW_SUCCESS });
    } catch (error) {
        dispatch({ type: PRODUCT_CREATE_REVIEW_FAIL, payload: error.response?.data?.message || error.message });
    }
};

// ─── Update review ────────────────────────────────────────────────────────────
export const updateProductReview = (productId, review) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_UPDATE_REVIEW_REQUEST });
        const { userLogin: { userInfo } } = getState();
        await axios.put(`${BASE}/products/${productId}/reviews`, review, jsonHeader(userInfo));
        dispatch({ type: PRODUCT_UPDATE_REVIEW_SUCCESS });
    } catch (error) {
        dispatch({ type: PRODUCT_UPDATE_REVIEW_FAIL, payload: error.response?.data?.message || error.message });
    }
};

// ─── Delete review ────────────────────────────────────────────────────────────
export const deleteProductReview = (productId) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_DELETE_REVIEW_REQUEST });
        const { userLogin: { userInfo } } = getState();
        await axios.delete(`${BASE}/products/${productId}/reviews`, authHeader(userInfo));
        dispatch({ type: PRODUCT_DELETE_REVIEW_SUCCESS });
    } catch (error) {
        dispatch({ type: PRODUCT_DELETE_REVIEW_FAIL, payload: error.response?.data?.message || error.message });
    }
};
