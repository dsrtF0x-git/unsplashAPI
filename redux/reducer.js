import { LOAD_INITIAL_LIST, LOAD_MORE_PHOTOS } from "../constants/reduxConstants";

const initialState = {
  listOfPhotos: undefined
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_INITIAL_LIST:
      return {
        ...state,
        listOfPhotos: action.payload
      }
    case LOAD_MORE_PHOTOS:
      return {
        ...state,
        listOfPhotos: [...state.listOfPhotos, ...action.payload]
      }
    default:
      return state;
  }
}