export type Sensor = {[key: string]: any}
export interface State {
    loading: boolean,
    sensors: Sensor[],
}

export type Action = {
    type: string,
    sensors?: Sensor[],
}

const initialState: State = {
  loading: true,
  sensors: []
}

export const ACTIONS = {
  LOADING_START: 'sensorsList/loadingStart',
  LOADING_END: 'sensorsList/loadingEnd',
  FETCH_SENSORS: 'sensorsList/fetchSensors',
  SAVE_SENSORS: 'sensorsList/saveSensors'
}

export const startLoadingSensors = () => ({
  type: ACTIONS.LOADING_START
})

export const stopLoadingSensors = () => ({
  type: ACTIONS.LOADING_END
})

export const fetchSensors = () => ({
  type: ACTIONS.FETCH_SENSORS
})

export const saveSensors = (sensors: Sensor[]) => ({
  type: ACTIONS.SAVE_SENSORS,
  sensors
})

const sensorsListReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ACTIONS.LOADING_START:
      return {
        ...state,
        loading: true
      }
    case ACTIONS.LOADING_END:
      return {
        ...state,
        loading: false
      }

    case ACTIONS.SAVE_SENSORS:
      return {
        ...state,
        sensors: action.sensors
      }

    case ACTIONS.FETCH_SENSORS:
    default:
      return state
  }
}

export default sensorsListReducer
