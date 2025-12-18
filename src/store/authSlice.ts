import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  token: string | null;
  status: 'idle' | 'loading' | 'error' | 'ready';
  error?: string;
};

const initialState: AuthState = { token: null, status: 'idle' };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
    setStatus(state, action: PayloadAction<AuthState['status']>) {
      state.status = action.payload;
    },
    setError(state, action: PayloadAction<string | undefined>) {
      state.error = action.payload;
    },
  },
});

export const { setToken, setStatus, setError } = authSlice.actions;
export default authSlice.reducer;
