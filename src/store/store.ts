import { Action, ThunkAction, configureStore, combineReducers } from '@reduxjs/toolkit'
import { counterReducer, elementReducer, rightPanelReducer, listProductReducer, isMobileReducer, listHistoryReducer
 } from '.'
 import { persistStore, persistReducer } from 'redux-persist';
 import storage from 'redux-persist/lib/storage';
import { HistoryPanelReducer } from './slices/HistoryPanel';

const rootReducer = combineReducers({
  counter: counterReducer,
  Elements: elementReducer,
  rightPanel: rightPanelReducer,
  listProduct: listProductReducer,
  isMobile: isMobileReducer,
  items: listHistoryReducer,
  history: HistoryPanelReducer
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['rightPanel', 'isMobile', 'Elements', 'listProduct', 'counter','history'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>