
import Grid from '@material-ui/core/Grid'
import React from 'react'
import SensorCard from './card'
import type { Sensor } from '../sensors-list-reducer'

type Props = {
  sensors: Sensor[]
}

const SensorsList = ({ sensors = [] }: Props) => {
  return (
    <Grid
    container
    direction="row"
    justifyContent="space-around"
    alignItems="stretch"
    spacing={2}
    >
      {sensors.map(sensor =>
        <Grid item xs={12} sm={6} key={sensor.id}>
          <SensorCard name={sensor.name} description={sensor.description} id={sensor.id} />
        </Grid>
      )}
    </Grid>
  )
}

export default SensorsList
