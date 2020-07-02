import _ from 'lodash'
import {
  CREATE_STREAM,
  GET_STREAM,
  GET_STREAMS,
  UPDATE_STREAM,
  DELETE_STREAM,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case DELETE_STREAM:
        return _.omit(state, action.payload)
    case UPDATE_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case GET_STREAMS:
      return ({...state, ..._.mapKeys(action.payload, 'id') });

    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case GET_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
