
import {createSlice} from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:[],   
    },
    reducers:{
        addItem: (state,action) => {
            //logic to add item to cart
            state.items.push(action.payload);
        },
        removeItem: (state)=>{
            state.items.pop();        
        },
        clearCart:(state)=>{
            // state.items.length =0;
            state.items =[];
        },
    }
})

export const {addItem,removeItem
    ,clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
