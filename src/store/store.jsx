import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import dashboardSlice from './dashboardSlice';

const store =  configureStore({
    reducer: {
       auth: authSlice.reducer,
       dashboard: dashboardSlice.reducer,
    }
})
export const authSliceActions = authSlice.actions;
export const dashboardSliceActions = dashboardSlice.actions;
export default store;