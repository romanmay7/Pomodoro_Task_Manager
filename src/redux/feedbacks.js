import * as ActionTypes from './ActionTypes';


export const Feedbacks = (state = { errMess: null, feedback:[]}, action) => {
    switch (action.type) {

      case ActionTypes.FEEDBACK_FAILED:
       return {...state, errMess: action.payload};
      case ActionTypes.ADD_FEEDBACK:
        return {...state, errMess: action.payload};
      default:
       return state;
    }
    };