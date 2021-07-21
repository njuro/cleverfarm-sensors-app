import { connect, ConnectedProps } from 'react-redux'
import Component from './sensor-detail'
import type { State } from '../sensors-list-reducer'
import { getSensors } from '../sensors-list-selectors'

const mapStateToProps = (state: State) => ({
  sensors: getSensors(state)
})

const connector = connect(mapStateToProps)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Component)
