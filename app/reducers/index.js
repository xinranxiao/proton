import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import protoFiles from './protoFiles';

const rootReducer = combineReducers({
  protoFiles,
  routing
});

export default rootReducer;
