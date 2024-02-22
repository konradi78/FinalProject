import { createSlice } from "@reduxjs/toolkit";

export const productsBasketSlice = createSlice({
  name: "productsBasket",
  initialState: {
    productsBasket: JSON.parse(localStorage.getItem("productsInCart")) || [],
    quantity: 1,
  },
  reducers: {
    changeQuantity: (state, action) => {
      const quantity = action.payload;
      state.quantity = quantity;
    },
    addToCart: (state, action) => {
      const product = action.payload;
      let quantity = state.quantity;
      if (state.productsBasket.map((prod) => prod.id !== product.id)) {
        state.productsBasket.push({ ...product, quantity: quantity || 1 });
      }
      const uniqProds = Array.from(new Set(state.productsBasket.map((el) => el.id))).map((id) => {
        return {
          id: id,
          title: state.productsBasket.find((product) => product.id === id).title,
          price: state.productsBasket.find((product) => product.id === id).price,
          discont_price: state.productsBasket.find((product) => product.id === id).discont_price,
          quantity: state.productsBasket.find((product) => product.id === id).quantity,
          description: state.productsBasket.find((product) => product.id === id).description,
          image: state.productsBasket.find((product) => product.id === id).image,
        };
      });
      state.productsBasket = uniqProds;
      localStorage.setItem("productsInCart", JSON.stringify(uniqProds));
      state.quantity = 1;
    },
    plusCount: (state, action) => {
      const { id } = action.payload;
      state.productsBasket.map((product) => product.id === id ? (product.quantity += 1) : null);
      localStorage.setItem("productsInCart", JSON.stringify(state.productsBasket));
    },
    minusCount: (state, action) => {
      const { id } = action.payload;
      state.productsBasket.map((product) => product.id === id ? (product.quantity -= 1) : null);
      localStorage.setItem("productsInCart", JSON.stringify(state.productsBasket));
    },
    deleteFromCart: (state, action) => {
      const { id } = action.payload;
      state.productsBasket = state.productsBasket.filter((productBasket) => productBasket.id !== id);
      localStorage.setItem("productsInCart", JSON.stringify(state.productsBasket));
    },
    eraser: (state) => {
      state.productsBasket = [];
      localStorage.removeItem("productsInCart", JSON.stringify(state.productsBasket));
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  plusCount,
  minusCount,
  changeQuantity,
  eraser,
} = productsBasketSlice.actions;

export default productsBasketSlice.reducer;
