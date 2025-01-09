import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
        {
        img: "https://cdn.pixabay.com/photo/2022/02/11/13/16/technology-7007329_960_720.jpg",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2023/05/08/13/24/laptop-7978588_960_720.jpg",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://pixabay.com/images/download/public-speaking-3926344_640.jpg",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2017/03/28/12/15/chairs-2181977_960_720.jpg",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: "https://pixabay.com/images/download/signpost-235079_640.jpg",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if(item){
            item.quantity++;
        }
      
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if(item){
            item.quantity--;
        }
      
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
