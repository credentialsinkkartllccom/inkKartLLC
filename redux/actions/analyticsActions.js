import axios from 'axios';

export const ANALYTICS_REQUEST = 'ANALYTICS_REQUEST';
export const ANALYTICS_SUCCESS = 'ANALYTICS_SUCCESS';
export const ANALYTICS_FAIL    = 'ANALYTICS_FAIL';

const BASE = '/api';

export const fetchAnalytics = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ANALYTICS_REQUEST });

        const { userLogin: { userInfo } } = getState();
        const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };

        const { data } = await axios.get(`${BASE}/dashboard/analytics`, config);

        dispatch({ type: ANALYTICS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: ANALYTICS_FAIL,
            payload: error.response?.data?.message || error.message,
        });
    }
};
