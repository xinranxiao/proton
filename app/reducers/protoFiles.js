import {
  ADD_PROTO_FILE,
  REMOVE_PROTO_FILE,
  LOAD_SAVED_PROTO_FILES
} from '../actions/protoFiles';

console.log(localStorage);
export default function protoFiles(state = {}, action) {
  switch (action.type) {
    case ADD_PROTO_FILE:
      localStorage[action.filename] = action.proto;
      return Object.assign({}, state, {
        [action.filename] : action.proto
      });
    case REMOVE_PROTO_FILE:
      delete localStorage[action.filename];
      const newState = Object.assign({}, state);
      delete newState[action.filename];
      return newState;
    case LOAD_SAVED_PROTO_FILES:
      return Object.assign({}, localStorage);
    default:
      return state;
  }
}
