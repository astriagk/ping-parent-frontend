import { authSlice } from './slice';

export { authSlice };
export const { setToken, setUser, setStatus, setError, logout } =
  authSlice.actions;
