import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AuthState, SetTokenPayload, SetUserPayload } from './types';

const initialState: AuthState = {
  token: null,
  userId: null,
  status: 'idle',
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<SetTokenPayload>) {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setUser(state, action: PayloadAction<SetUserPayload>) {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.isAuthenticated = true;
      state.status = 'authenticated';
    },
    setStatus(state, action: PayloadAction<AuthState['status']>) {
      state.status = action.payload;
    },
    setError(state, action: PayloadAction<string | undefined>) {
      state.error = action.payload;
      state.status = 'error';
    },
    logout(state) {
      state.token = null;
      state.userId = null;
      state.isAuthenticated = false;
      state.status = 'unauthenticated';
      state.error = undefined;
    },
  },
});
