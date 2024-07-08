import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import dashboardSlice from './dashboardSlice';
import coursesSlice from './coursesSlice';

const store =  configureStore({
    reducer: {
       auth: authSlice.reducer,
       dashboard: dashboardSlice.reducer,
       courses: coursesSlice.reducer,
    }
})
export const authSliceActions = authSlice.actions;
export const dashboardSliceActions = dashboardSlice.actions;
export const courseSliceActions = coursesSlice.actions

export default store;