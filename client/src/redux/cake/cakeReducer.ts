import {BUY_CAKE} from "./cakeTypes";

const initialState = {
    numberOfCakes : 10
}


const cakeReducer = (state= initialState, action:{type:string}) =>{
    switch (action.type) {
        case BUY_CAKE : return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }

        default: return state
    }
}

export default cakeReducer;