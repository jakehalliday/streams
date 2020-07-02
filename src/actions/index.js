import { SIGN_IN, SIGN_OUT, CREATE_STREAM, GET_STREAM, GET_STREAMS, DELETE_STREAM, UPDATE_STREAM } from './types';
import streams from '../apis/streams';
import history from '../history';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId,
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const res = await streams.post('/streams', {...formValues, userId, key: Math.floor(9999999999*Math.random())});
    dispatch({type:CREATE_STREAM, payload:res.data});
    history.push('/');
};

export const getStream = ({ id }) => async dispatch => {
    const res = await streams.get(`/streams/${id}`);
    dispatch({type:GET_STREAM, payload: res.data});
};

export const getStreams = () => async dispatch => {
    const res = await streams.get('/streams');
    dispatch({type: GET_STREAMS, payload: res.data})
};

export const updateStream = (formValues, id) => async (dispatch,getState) => {
    const {userId} = getState().auth;
    const res = await streams.put(`streams/${id}`, {...formValues, userId});
    dispatch({type:UPDATE_STREAM, payload: res.data});
    history.push('/')
};

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`streams/${id}`).then(dispatch({
        type:DELETE_STREAM,
        payload: id
    }))
        history.push('/')
};