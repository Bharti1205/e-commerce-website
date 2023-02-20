// ACTION FOR set, selected products,and for removed products
import { useState } from "react";

import fakeStoreApi from "../../../apis/fakeStoreApi";
import ProductListing from "../../ProductListing";
import {ActionTypes} from "../constants/action-types";
export const fetchProducts = () => async (dispatch) =>
    {
        const response = await fakeStoreApi.get("/products");
        // initialState.products.push(response.data);
        // console.log("hi",initialState.products)

        dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data});
    
      };

      export const fetchProduct = (id) => async (dispatch) =>
    {
        const response = await fakeStoreApi.get(`/products/${id}`);

        dispatch({type:ActionTypes.SELECTED_PRODUCT,payload:response.data});
    
      };
      //category wise
    
  
      

export const setProducts =(products) =>
{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    };
};
export const selectedProduct =(product) =>
{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product,
    };
};


export const removeSelectedProduct =() =>
{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
        
    };
};


// cart actions
// for adding items to cart

export const addCart = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}


// for deleting items from cart

export const delCart = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}

