import { takeEvery, put, call } from '@redux-saga/core/effects'
import { ACTIONS, startLoadingSensors, stopLoadingSensors, saveSensors } from './sensors-list-reducer'
import type { Sensor } from './sensors-list-reducer'

const fetchSensors = async () => {
  try {
    const response = await fetch('http://localhost:3070/sensors')
    const data = await response.json()
    return [true, data]
  } catch (error) {
    console.error('error')
    return [false, error]
  }
}

const fetchSensorsSaga = function * () {
  yield put(startLoadingSensors())
  const [isSuccess, data]: [boolean, Sensor[]] = yield call(fetchSensors)
  if (isSuccess) {
    yield put(saveSensors(data))
    yield put(stopLoadingSensors())
  }
}

const sensorsSaga = function * () {
  yield takeEvery(ACTIONS.FETCH_SENSORS, fetchSensorsSaga)
}

export default sensorsSaga
