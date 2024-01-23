import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../features/authSlice'
const store = configureStore({
    reducer: {
     auth: authSlice,
    // TODO: add more slices for posts
    }
});

export default store;