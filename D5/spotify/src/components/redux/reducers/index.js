import { GET_ARTIST } from "../actions";

const initialState = {
    artists: []
}

const artistsReducer = (state = initialState, action) => {

    switch (action.type) {
      case GET_ARTIST:
        return {
          ...state,
          artists: action.payload,
        }
      default:
        return state
    }
}
  
export default artistsReducer