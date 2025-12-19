import type { RootState } from '../store';

// User selectors
export const selectUser = (state: RootState) => state.user;
export const selectUserProfile = (state: RootState) => state.user?.profile;
export const selectUserLoading = (state: RootState) => state.user?.loading;
export const selectUserError = (state: RootState) => state.user?.error;
