export { store } from './store';
export type { RootState, AppDispatch } from './store';

// Re-export slice actions with namespaces to avoid conflicts
import * as authActionsImport from './auth/actions';
import * as userActionsImport from './user/actions';
import * as appActionsImport from './app/actions';

export const authActions = authActionsImport;
export const userActions = userActionsImport;
export const appActions = appActionsImport;

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
