import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {logger} from 'redux-logger';

import Songs from './reducers/Songs';
import Categories from './reducers/Categories';
import Albums from './reducers/Albums';

const rootReducer = combineReducers({
  songs: Songs,
  categories: Categories,
  albums: Albums,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({serializableCheck: false});
    // .concat(logger);
  },
});

export default store;
export const persistor = persistStore(store);
// persistor.purge();
