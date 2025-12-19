export { store } from './store';
export type { RootState, AppDispatch } from './store';

// Re-export slice actions and selectors with namespaces to avoid conflicts
export * as authActions from './auth/actions';
export * as userActions from './user/actions';
export * as appActions from './app/actions';

export * from './auth/selectors';
export * from './user/selectors';
export * from './app/selectors';

export type * from './auth/types';
export type * from './user/types';
export type * from './app/types';

// Also export reducers for convenience
export { authReducer } from './auth';
export { userReducer } from './user';
export { appReducer } from './app';
