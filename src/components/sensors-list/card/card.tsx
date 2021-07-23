import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { Link } from 'react-router-dom'
import css from './card.module.scss'

type Props = {
    name: string,
    description: string
    id: string,
}

export default function SensorCard ({ name, description, id }: Props) {
  return (
    <Card className={css.root} variant="outlined">
      <CardContent>
        <Typography className={css.title} color="textSecondary" variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/${id}`}>
          <Button color="secondary" size="small">Details</Button>
        </Link>
      </CardActions>
    </Card>
  )
}
