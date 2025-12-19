import { userSlice } from './slice';

export { userSlice };
export const { setProfile, setLoading, setError, clearProfile } =
  userSlice.actions;
