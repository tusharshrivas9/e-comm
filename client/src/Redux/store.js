

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state.cart);
        localStorage.setItem("cart", serializedState);
    } catch (e) {
        console.warn("Could not save state to localStorage:", e);
    }
};

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store;

