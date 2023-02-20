// to combine all the reducers here 

import { combineReducers } from 'redux';
import { productReducer,selectedProductReducer } from './productReducer';
import handleCart from './handleCart';

const reducers = combineReducers(
    {
        allProducts:productReducer,
        product : selectedProductReducer,
         handleCart,
     
        
    }
);
export default reducers;