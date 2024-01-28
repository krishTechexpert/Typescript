import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./CartSlice";
export const store=configureStore({
  reducer:{
    cart:cartSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>;

// similar 
//let name='krish';
//type N = typeof name;

export type AppDispatch = typeof store.dispatch;

//And here this will simply give us a type that has more information regarding which kind of actions can be dispatched here

