import { createAction, on } from "@ngrx/store"
import { findProductByCategorySuccess } from "./product.action"

const initialState={
    products:[],
    loading:false,
    error:null,
    product:null
}

export const productReducer=createAction(
    initialState,
    on(findProductByCategorySuccess, (state, {payload})=>({
        ...state,
        products:payload.content,
        loading:false
    }))
)