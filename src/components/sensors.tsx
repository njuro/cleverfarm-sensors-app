import LinearProgress from '@material-ui/core/LinearProgress'
import React, { useEffect } from 'react'
import './app.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import SensorsDetail from 'components/sensor-detail'
import SensorsList from 'components/sensors-list'
import { PropsFromRedux } from './'

const Sensors = ({ isLoading, fetchSensors, sensors }: PropsFromRedux) => {
  useEffect(() => {
    fetchSensors()
  }, [])

  if (isLoading) {
    return <LinearProgress/>
  }
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <SensorsList sensors={sensors}/>
          </Route>
          <Route path="/:id">
            <SensorsDetail/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Sensors
