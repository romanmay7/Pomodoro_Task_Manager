//import {createStore} from 'redux';
//import {Reducer,initialState} from './reducer';//depricated
import {createStore, combineReducers,applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import {InitialFeedback} from './forms';
import {Feedbacks} from './feedbacks';


export const ConfigureStore = () => {
   const store = createStore(
    combineReducers(
      {
       curr_task:"No Task Executing at Moment",
       task_counter:0,
       task_list:[]
      }),
    applyMiddleware(thunk, logger)
     //, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

 

  return store;
  }