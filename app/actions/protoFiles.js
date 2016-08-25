export const ADD_PROTO_FILE = 'ADD_PROTO_FILE';
export const REMOVE_PROTO_FILE = 'REMOVE_PROTO_FILE';
export const LOAD_SAVED_PROTO_FILES = 'LOAD_SAVED_PROTO_FILES';

export function addProtoFile(filename, proto) {
  return {
    type: ADD_PROTO_FILE,
    filename,
    proto
  };
}

export function removeProtoFile(filename) {
  return {
    type: REMOVE_PROTO_FILE,
    filename
  };
}

export function loadSavedProtoFiles() {
  return {
    type: LOAD_SAVED_PROTO_FILES
  };
}
