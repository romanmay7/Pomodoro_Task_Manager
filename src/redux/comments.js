//import { COMMENTS } from '../shared/comments';  //fetching from server
import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
     return {...state, errMess: null, comments: action.payload};
    case ActionTypes.COMMENTS_FAILED:
     return {...state, errMess: action.payload};
    case ActionTypes.ADD_COMMENT:
     var comment = action.payload;
      //comment.id = state.comments.length; //comments will be automaticly created by server
      //comment.date = new Date().toISOString(); //already generated in postComment()
      return { ...state, comments: state.comments.concat(comment)};
    default:
     return state;
  }
  };