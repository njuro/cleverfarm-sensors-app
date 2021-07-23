import { Button, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core'
import DescriptionIcon from '@material-ui/icons/Description'
import MapIcon from '@material-ui/icons/Map'
import TurnedInIcon from '@material-ui/icons/TurnedIn'
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import SensorMap from './map'
import type { PropsFromRedux } from './'

const SensorDetail = ({ sensors }: PropsFromRedux) => {
  const { id }: {id: string} = useParams()
  const activeSensor = sensors[parseInt(id) - 1]
  return (
    <div>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <TurnedInIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={activeSensor.name} secondary="name" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DescriptionIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={activeSensor.description} secondary="description" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <MapIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`${activeSensor.coordinates[0]} - ${activeSensor.coordinates[1]}`} secondary="coordinates" />
        </ListItem>
      </List>
      <Link to="/">
        <Button color="secondary" size="small">Go Back</Button>
      </Link>
      <SensorMap coordinates={activeSensor.coordinates}/>
    </div>
  )
}

export default SensorDetail
