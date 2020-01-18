import { LOAD_INITIAL_LIST, LOAD_MORE_PHOTOS, PHOTOS_PER_LOAD } from "../constants/reduxConstants";
import { BASIC_URL, CLIENT_ID } from "../constants/unsplashApi";


function setInitialList(photosList) {
  return {
    type: LOAD_INITIAL_LIST,
    payload: photosList
  }
}

export function loadInitialList() {
  return async dispatch => {
    const photos = await fetch(`${BASIC_URL}${PHOTOS_PER_LOAD}${CLIENT_ID}`)
      .then(response => response.json());
    dispatch(setInitialList(photos));
  }
}

function getMorePhotos(additionalList) {
  return {
    type: LOAD_MORE_PHOTOS,
    payload: additionalList
  }
}

export function loadMorePhotos() {
  return async dispatch  => {
    const additionalPhotos = await fetch(`${BASIC_URL}${PHOTOS_PER_LOAD}${CLIENT_ID}`)
      .then(response => response.json());
    dispatch(getMorePhotos(additionalPhotos));
  }
}