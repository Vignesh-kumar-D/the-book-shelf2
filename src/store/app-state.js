import { configureStore, createSlice } from "@reduxjs/toolkit";

const appState = createSlice({
  name: "LoginState",
  initialState: {
    loggedIn: false,
    userId: null,
    tokenId: null,
    myList: [],
    favorites: [],
  },
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.userId = action.payload.localId;
      state.tokenId = action.payload.idToken;
      localStorage.setItem(
        "userDetail",
        JSON.stringify({
          userId: action.payload.localId,
          tokenId: action.payload.idToken,
        })
      );
    },
    logout: (state) => {
      state.loggedIn = false;
      state.tokenId = null;
      state.userId = null;
      state.favorites = [];
      state.myList = [];
      localStorage.removeItem("userDetail");
    },
    addFavorite: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    addMyList: (state, action) => {
      state.myList = [...state.myList, action.payload];
    },
    getFavorite: (state, action) => {
      state.favorites = [...state.favorites, ...action.payload];
    },
    getLists: (state, action) => {
      state.myList = [...state.myList, ...action.payload];
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload[0].id
      );
    },
    updateMyList: (state, action) => {
      const index = state.myList.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(index);
      state.myList[index] = action.payload;
    },
  },
});

const store = configureStore({
  reducer: appState.reducer,
});

export default store;
export const stateAction = appState.actions;
