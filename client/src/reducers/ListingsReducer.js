import { FETCH_LISTINGS, SET_QUERY, SET_LISTINGS } from '../actions/ListingActions';

export default (state = {}, action) =>{
  switch (action.type) {
  case FETCH_LISTINGS: return {
    listings: action.payload.data,
    query: state.query
  };
  case SET_QUERY: return {
    query: action.payload,
    listings: state.listings
  };
  case SET_LISTINGS: return {
    listings: action.payload,
    query: state.query
  };
  }
  return state;
};
