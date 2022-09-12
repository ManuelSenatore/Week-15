import { ADD_TO_FAV, REMOVE_TO_FAV } from "../actions";

const initialState = {
        content: []
}

const FavReducer = ( state = initialState, action) => {

    switch (action.type) {

        case ADD_TO_FAV:
            return{
                ...state,
                    content: [...state.content, action.payload]

            }
            case REMOVE_TO_FAV:
                return{
                    ...state,
                        content: state.content.filter((job,i) => i !== action.payload)
                }
        default: return state;
    }
}
export default FavReducer