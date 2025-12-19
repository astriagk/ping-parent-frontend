import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { UserState, UserProfile } from './types';

const initialState: UserState = {
  profile: null,
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<UserProfile | null>) {
      state.profile = action.payload;
      state.loading = false;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | undefined>) {
      state.error = action.payload;
      state.loading = false;
    },
    clearProfile(state) {
      state.profile = null;
      state.error = undefined;
    },
  },
});
