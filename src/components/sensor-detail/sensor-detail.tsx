import { Button } from '@material-ui/core'
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import type { PropsFromRedux } from './'

const SensorDetail = ({ sensors }: PropsFromRedux) => {
  const { id }: {id: string} = useParams()
  return (
    <div>
      <Link to="/">
        <Button>Back</Button>
      </Link>
      {`This is sensor no ${id}`}
      {sensors[parseInt(id) - 1].name}
    </div>
  )
}

export default SensorDetail
