// import { createSlice } from "@reduxjs/toolkit";

// // Load the initial state from localStorage
// const loadFromLocalStorage = () => {
//     try {
//         const serializedState = localStorage.getItem("cart");
//         if (serializedState === null) return [];
//         return JSON.parse(serializedState);
//     } catch (e) {
//         console.warn("Could not load state from localStorage:", e);
//         return [];
//     }
// };

// const cartSlice = createSlice({
//     name: "Cart",
//     initialState: loadFromLocalStorage(),
//     reducers: {
//         add(state, action) {
//             state.push(action.payload);
//         },
//         remove(state, action) {
//             return state.filter(item => item.id !== action.payload);
//         }
//     }
// });

// export const { add, remove } = cartSlice.actions;

// export default cartSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit";




// const initialState =  {
//     cart:[],
    
// }

// const storage = localStorage.setItem("allcart",JSON.stringify(state.cart))

// const cartSlice = createSlice({
//     name:"cart",
//     initialState ,
//     reducers:{
//         add(state,action){
//             const ItemIndex = state.cart.findIndex((item)=>item.id === action.payload.id)
//             if (ItemIndex >= 0) {
//                 state.cart[ItemIndex].qty +=1
//             }else{
//                 const temp = {...action.payload ,qty:1}
//                 state.cart = [...state.cart,temp]
//             }
         
//         },
//         remove(state,action){
//             const data = state.cart.filter((item) => item.id !== action.payload)

//             state.cart = data
//         }
//     }
// })

// export const {add,remove}  = cartSlice.actions;

// export default cartSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

// Function to save the state to localStorage
const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state.cart);
        localStorage.setItem("allcart", serializedState);
    } catch (e) {
        console.warn("Could not save state to localStorage:", e);
    }
};

// Function to load the state from localStorage
const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("allcart");
        if (serializedState === null) return [];
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn("Could not load state from localStorage:", e);
        return [];
    }
};

const initialState = {
    cart: loadFromLocalStorage(),
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action) {
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cart[itemIndex].qty += 1;
            } else {
                const temp = { ...action.payload, qty: 1 };
                state.cart.push(temp);
            }
            saveToLocalStorage(state);
        },
        remove(state, action) {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
            saveToLocalStorage(state);
        },
        // decrement
        decrement(state,action){
            const item_dec = state.cart.findIndex((item) => item.id === action.payload.id);
            if (state.cart[item_dec].qty >= 1) {
                state.cart[item_dec].qty -= 1;
            }
        }
    }
});

export const { add, remove,decrement } = cartSlice.actions;

export default cartSlice.reducer;
