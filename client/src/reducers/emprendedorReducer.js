import { types } from "../types/types";

export const emprendedorReducer = (state={}, action) => {
    switch (action.type) {
        case types.emprendedorLoad:
            return {...state, }
    
        default:
            return state
    }
}