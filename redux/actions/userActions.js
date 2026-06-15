import axios from 'axios';
import {
  USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_RESET,
  USER_SEND_OTP_REQUEST, USER_SEND_OTP_SUCCESS, USER_SEND_OTP_FAIL,
  USER_SEND_OTP_RESET, USER_SEND_OTP_CLEAR_ERROR,
  USER_FORGOT_PASSWORD_REQUEST, USER_FORGOT_PASSWORD_SUCCESS, USER_FORGOT_PASSWORD_FAIL,
  USER_RESET_PASSWORD_REQUEST, USER_RESET_PASSWORD_SUCCESS, USER_RESET_PASSWORD_FAIL,
  USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_RESET,
  USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS, USER_UPDATE_PROFILE_FAIL,
} from '../constants/userConstants';

const BASE = '/api';

// ─── Login ────────────────────────────────────────────────────────────────────
export const login = (email, password, isAdminLogin = false) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await axios.post(`${BASE}/auth/login`, {
      email, password, isAdminLogin,
    });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ─── Logout ───────────────────────────────────────────────────────────────────
export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET });
};

// ─── Send OTP (for registration or forgot-password) ───────────────────────────
export const sendOTP = (email, type = 'registration') => async (dispatch) => {
  try {
    dispatch({ type: USER_SEND_OTP_REQUEST });
    const { data } = await axios.post(`${BASE}/auth/send-otp`, { email, type });
    dispatch({ type: USER_SEND_OTP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_SEND_OTP_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ─── Reset sendOTP state ──────────────────────────────────────────────────────
export const resetSendOTP = () => (dispatch) => {
  dispatch({ type: USER_SEND_OTP_RESET });
};

// ─── Clear sendOTP error ──────────────────────────────────────────────────────
export const clearSendOTPError = () => (dispatch) => {
  dispatch({ type: USER_SEND_OTP_CLEAR_ERROR });
};

// ─── Register ─────────────────────────────────────────────────────────────────
export const register = (firstName, lastName, email, password, otp) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const { data } = await axios.post(`${BASE}/auth/register`, {
      firstName, lastName, email, password, otp,
    });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ─── Reset register state ─────────────────────────────────────────────────────
export const resetRegister = () => (dispatch) => {
  dispatch({ type: USER_REGISTER_RESET });
};

// ─── Forgot Password ──────────────────────────────────────────────────────────
export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: USER_FORGOT_PASSWORD_REQUEST });
    const { data } = await axios.post(`${BASE}/auth/forgot-password`, { email });
    dispatch({ type: USER_FORGOT_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_FORGOT_PASSWORD_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ─── Reset Password ───────────────────────────────────────────────────────────
export const resetPassword = (email, otp, newPassword) => async (dispatch) => {
  try {
    dispatch({ type: USER_RESET_PASSWORD_REQUEST });
    const { data } = await axios.post(`${BASE}/auth/reset-password`, {
      email, otp, newPassword,
    });
    dispatch({ type: USER_RESET_PASSWORD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_RESET_PASSWORD_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ─── Get User Details ─────────────────────────────────────────────────────────
export const getUserDetails = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const { userLogin: { userInfo } } = getState();
    const { data } = await axios.get(`${BASE}/auth/profile`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ─── Update User Profile ──────────────────────────────────────────────────────
export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST });
    const { userLogin: { userInfo } } = getState();
    const { data } = await axios.put(`${BASE}/auth/profile`, user, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};
