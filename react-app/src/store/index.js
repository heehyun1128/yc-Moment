import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import postReducer from './post'
import userReducer from './user'
import postImageReducer from './postImage';
import commentReducer from './comment';
import commentImageReducer from './commentImage';

const rootReducer = combineReducers({
  session,
  posts:postReducer,
  users:userReducer,
  postImages: postImageReducer,
  comments:commentReducer,
  commentImages: commentImageReducer,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
