import { connect, ConnectedProps } from 'react-redux'
import Component from './sensors'
import { fetchSensors } from './sensors-list-reducer'
import type { State } from './sensors-list-reducer'
import { isLoading, getSensors } from './sensors-list-selectors'

const mapStateToProps = (state: State) => ({
  isLoading: isLoading(state),
  sensors: getSensors(state)
})

const mapDispatchToProps = {
  fetchSensors
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Component)
