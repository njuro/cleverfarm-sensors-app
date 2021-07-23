import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sensorsReducer from 'components/sensors-list-reducer'
import rootSaga from './root-saga'

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const saga = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// TODO - better types
export const store = createStore<any, any, any, any>(sensorsReducer, composeEnhancers(applyMiddleware(saga)))
saga.run(rootSaga)
