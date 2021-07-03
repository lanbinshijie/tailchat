// api
export { buildStorage } from './api/buildStorage';
export { createSocket } from './api/socket';
export type { AppSocket } from './api/socket';

// components
export { FastForm } from './components/FastForm/index';
export { CustomField } from './components/FastForm/CustomField';
export type {
  FastFormFieldComponent,
  FastFormFieldProps,
  FastFormFieldMeta,
} from './components/FastForm/field';
export { regField } from './components/FastForm/field';
export { regFormContainer } from './components/FastForm/container';
export type { FastFormContainerComponent } from './components/FastForm/container';

// hooks
export { useAsync } from './hooks/useAsync';
export { useAsyncFn } from './hooks/useAsyncFn';
export { useMountedState } from './hooks/useMountedState';

// manager
export { getStorage, setStorage, useStorage } from './manager/storage';
export { setTokenGetter } from './manager/request';

// model
export { loginWithEmail, registerWithEmail } from './model/user';

// redux
export { userActions } from './redux/slices';
export { setupRedux } from './redux/setup';
export { createStore } from './redux/store';
export type { AppStore, AppDispatch } from './redux/store';

// utils
export { getTextColorHex } from './utils/string-helper';