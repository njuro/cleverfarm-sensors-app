import { fork } from '@redux-saga/core/effects'
import sensorsListSaga from 'components/sensors-list-saga'

const rootSaga = function * () {
  yield fork(sensorsListSaga)
}

export default rootSaga
