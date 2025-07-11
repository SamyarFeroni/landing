import { configureStore } from '@reduxjs/toolkit';
import pageComponentsReducer from '@/store/pageComponents/slice';

export const store = configureStore({
  reducer: {
    pageComponents: pageComponentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
