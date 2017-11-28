import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducer';

const middlewares = [

].filter(Boolean);

const createStoreWithMiddleware = applyMiddleware(
  ...middlewares
)(createStore);

const configureStore = initialState => {
  const store = createStoreWithMiddleware(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());
  if (module.hot) {
    module.hot.accept('../reducer', () => {
      const nextRootReducer = rootReducer.default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

export default configureStore;
