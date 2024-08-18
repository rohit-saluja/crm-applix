import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { emptySplitApi } from "./services/index";
import customerReducer from "./features/customer-slice";
import leadReducer from "./features/lead-slice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [emptySplitApi.reducerPath],
};

const rootReducer = combineReducers({
  customer: customerReducer,
  lead: leadReducer,
  [emptySplitApi.reducerPath]: emptySplitApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([emptySplitApi.middleware]),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
