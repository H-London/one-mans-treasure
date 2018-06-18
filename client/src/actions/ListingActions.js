import axios from 'axios';

export const FETCH_LISTINGS = 'FETCH_LISTINGS';
export const FETCH_CLAIMED_LISTINGS = 'FETCH_CLAIMED_LISTINGS';
export const SET_QUERY = 'SET_QUERY';
export const SET_LISTINGS = 'SET_LISTINGS';

export const fetchListings = (query) =>{
  if (query) {
    const url = `/listing?query=${query}`;
    const response = axios.get(url);
    return {
      type: FETCH_LISTINGS,
      payload: response
    };
  } else {
    const url = '/listing';
    const response = axios.get(url);
    return {
      type: FETCH_LISTINGS,
      payload: response
    };
  }
};

export const setQuery = (query) => {
  return {
    type: SET_QUERY,
    payload: query
  };
};

export const setListings = (updatedListings) => {
  return {
    type: SET_LISTINGS,
    payload: updatedListings
  };
};

export const fetchClaimedListings = (listingsId) =>{
  const url = '/listing/claimed';
  const response = axios.post(url, {listingsId});
  return {
    type: FETCH_CLAIMED_LISTINGS,
    payload: response
  };
};
