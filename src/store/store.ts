import { configureStore } from '@reduxjs/toolkit'
import teamReducer from '../features/teamSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, teamReducer)
export const store = configureStore({
  reducer: {
    team: persistedReducer
  },
})
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch