import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState: {
        items : []        
    },
    reducers : {
        addItem : (state, action) => {

            // In older redux state shouldn't be mutated 
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            // Mutating the state (Uses Immer internally)
            state.items.push(action.payload);
        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart : (state) =>{
            state.items.length = 0;
        },
    },
});

export const {addItem , removeItem ,clearCart} = cartSlice.actions;

export default cartSlice.reducer;
 