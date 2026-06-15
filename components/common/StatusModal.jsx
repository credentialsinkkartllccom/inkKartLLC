"use client";

import React from 'react';
import { CheckCircle2, AlertCircle, X, Terminal, ChevronRight } from 'lucide-react';

const StatusModal = ({ isOpen, onClose, type = 'success', title, message, actionLabel, onAction }) => {
    if (!isOpen) return null;

    const isSuccess = type === 'success';

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
            <div className={`bg-[var(--bg)] border-b-8 ${isSuccess ? 'border-[var(--accent)]' : 'border-red-600'} shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500`}>
                
                {/* Header Decoration */}
                <div className="h-2 w-full bg-[var(--primary)] flex">
                    <div className={`h-full ${isSuccess ? 'bg-[var(--accent)]' : 'bg-red-600'} transition-all duration-1000`} style={{ width: '100%' }}></div>
                </div>

                <div className="p-10 md:p-14 text-center">
                    {/* Status Icon */}
                    <div className="flex justify-center mb-10">
                        <div className={`w-24 h-24 rounded-none flex items-center justify-center border-2 ${isSuccess ? 'border-[var(--accent)] bg-[var(--accent)]/5' : 'border-red-600 bg-red-50'}`}>
                            {isSuccess ? (
                                <CheckCircle2 size={48} className="text-[var(--accent)]" strokeWidth={1} />
                            ) : (
                                <AlertCircle size={48} className="text-red-600" strokeWidth={1} />
                            )}
                        </div>
                    </div>

                    {/* Badge */}
                    <div className="flex justify-center mb-6">
                        <span className={`inline-flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-[3px] border ${isSuccess ? 'border-[var(--accent)]/20 text-[var(--accent)]' : 'border-red-200 text-red-600'}`}>
                            <Terminal size={12} />
                            {isSuccess ? 'Transaction Verified' : 'System Alert'}
                        </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl md:text-3xl font-['DM Sans'] font-black text-[var(--primary)] uppercase tracking-tighter mb-6 leading-tight">
                        {title || (isSuccess ? 'Authorized Successfully' : 'Authentication Failed')}
                    </h3>
                    
                    <p className="text-slate-500 font-['Inter'] text-sm md:text-base leading-relaxed mb-10 max-w-sm mx-auto">
                        {message || (isSuccess 
                            ? 'Your asset acquisition has been processed. Deployment details are being calculated.' 
                            : 'An error occurred during the liquidation process. Please verify your credentials and retry.')}
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col gap-4">
                        {onAction && (
                            <button
                                onClick={onAction}
                                className={`w-full py-5 px-8 flex items-center justify-center gap-3 font-['DM Sans'] font-black text-[11px] uppercase tracking-[4px] transition-all duration-300 ${isSuccess ? 'bg-[var(--primary)] text-white hover:bg-[var(--accent)]' : 'bg-red-600 text-white hover:bg-red-700'}`}
                            >
                                {actionLabel || (isSuccess ? 'Proceed to Registry' : 'Attempt Reset')}
                                <ChevronRight size={16} />
                            </button>
                        )}
                        
                        <button
                            onClick={onClose}
                            className="w-full py-4 text-slate-400 font-['DM Sans'] font-black text-[9px] uppercase tracking-[3px] hover:text-[var(--primary)] transition-colors"
                        >
                            Close Terminal
                        </button>
                    </div>
                </div>
                
                {/* Footer Code */}
                <div className="bg-[#fbfbfb] px-10 py-4 border-t border-[#f0f0f0] flex justify-between items-center">
                    <p className="text-[10px] font-mono text-slate-300 uppercase tracking-widest leading-none">ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
                    <div className="flex gap-2">
                        <div className="w-1.5 h-1.5 bg-[var(--accent)]"></div>
                        <div className="w-1.5 h-1.5 bg-[var(--primary)]"></div>
                        <div className="w-1.5 h-1.5 bg-slate-200"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusModal;
