
import React from 'react'
import SensorCard from './card'
import type { Sensor } from '../sensors-list-reducer'

type Props = {
  sensors: Sensor[]
}

const SensorsList = ({ sensors = [] }: Props) => {
  return (
    <div>
      {sensors.map(sensor => <SensorCard name={sensor.name} description={sensor.description} key={sensor.id} id={sensor.id}/>)}
    </div>
  )
}

export default SensorsList
