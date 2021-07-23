import { AppBar, Toolbar, Typography, LinearProgress, Container } from '@material-ui/core'
import React, { useEffect } from 'react'
import './app.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import SensorsDetail from 'components/sensor-detail'
import SensorsList from 'components/sensors-list'
import css from './sensors.module.scss'
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
      <AppBar position="static" className={css.mainBar}>
        <Toolbar>
          <Link to="/">
            <Typography variant="h6">
              Sensors Simple App
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <Switch>
          <Route exact path="/">
            <SensorsList sensors={sensors}/>
          </Route>
          <Route path="/:id">
            <SensorsDetail/>
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default Sensors
