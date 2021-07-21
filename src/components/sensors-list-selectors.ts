import type { State } from './sensors-list-reducer'

export const isLoading = (state: State) => state.loading

export const getSensors = (state: State) => state.sensors
