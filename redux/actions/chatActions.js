import axios from 'axios';

export const CHAT_LIST_REQUEST   = 'CHAT_LIST_REQUEST';
export const CHAT_LIST_SUCCESS   = 'CHAT_LIST_SUCCESS';
export const CHAT_LIST_FAIL      = 'CHAT_LIST_FAIL';

export const CHAT_DETAILS_REQUEST = 'CHAT_DETAILS_REQUEST';
export const CHAT_DETAILS_SUCCESS = 'CHAT_DETAILS_SUCCESS';
export const CHAT_DETAILS_FAIL    = 'CHAT_DETAILS_FAIL';

export const CHAT_SEND_MESSAGE_REQUEST = 'CHAT_SEND_MESSAGE_REQUEST';
export const CHAT_SEND_MESSAGE_SUCCESS = 'CHAT_SEND_MESSAGE_SUCCESS';
export const CHAT_SEND_MESSAGE_FAIL    = 'CHAT_SEND_MESSAGE_FAIL';

export const CHAT_MARK_READ_REQUEST = 'CHAT_MARK_READ_REQUEST';
export const CHAT_MARK_READ_SUCCESS = 'CHAT_MARK_READ_SUCCESS';
export const CHAT_MARK_READ_FAIL    = 'CHAT_MARK_READ_FAIL';

const BASE = '/api';

const authConfig = (userInfo) => ({
  headers: { Authorization: `Bearer ${userInfo.token}` },
});

// ─── Admin: get all chats ────────────────────────────────────────────────────
export const fetchAllChats = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CHAT_LIST_REQUEST });
    const { userLogin: { userInfo } } = getState();
    const { data } = await axios.get(`${BASE}/chats`, authConfig(userInfo));
    dispatch({ type: CHAT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CHAT_LIST_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ─── User: get own chat thread ───────────────────────────────────────────────
export const fetchUserChat = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CHAT_DETAILS_REQUEST });
    const { userLogin: { userInfo } } = getState();
    const { data } = await axios.get(`${BASE}/chats/my`, authConfig(userInfo));
    dispatch({ type: CHAT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CHAT_DETAILS_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ─── Admin: get chat by ID ───────────────────────────────────────────────────
export const fetchChatById = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CHAT_DETAILS_REQUEST });
    const { userLogin: { userInfo } } = getState();
    const { data } = await axios.get(`${BASE}/chats/${id}`, authConfig(userInfo));
    dispatch({ type: CHAT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CHAT_DETAILS_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ─── Send message (user or admin) ────────────────────────────────────────────
export const sendChatMessage = (chatId, message) => async (dispatch, getState) => {
  try {
    dispatch({ type: CHAT_SEND_MESSAGE_REQUEST });
    const { userLogin: { userInfo } } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(`${BASE}/chats/${chatId}/messages`, { message }, config);
    dispatch({ type: CHAT_SEND_MESSAGE_SUCCESS, payload: data });
    dispatch({ type: CHAT_DETAILS_SUCCESS,      payload: data });
  } catch (error) {
    dispatch({
      type: CHAT_SEND_MESSAGE_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// ─── Mark all messages as read ───────────────────────────────────────────────
export const markChatAsRead = (chatId) => async (dispatch, getState) => {
  try {
    dispatch({ type: CHAT_MARK_READ_REQUEST });
    const { userLogin: { userInfo } } = getState();
    await axios.put(`${BASE}/chats/${chatId}/read`, {}, authConfig(userInfo));
    dispatch({ type: CHAT_MARK_READ_SUCCESS });
  } catch (error) {
    dispatch({
      type: CHAT_MARK_READ_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};
