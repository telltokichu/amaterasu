import { configureStore } from "@reduxjs/toolkit";

import userInfo from "./services/userInfo";
import productInfo from "./services/productinfo";

const store = configureStore({
	reducer: {
		userInfo,
		productInfo,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
