import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'




export default function MovieCard({title,description,poster,rate}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={poster} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Rating allowHover={false} initialValue={rate} />
   
    <Card.Text>
      {description}
    </Card.Text>
    <Button variant="primary">see detalis</Button>
  </Card.Body>
</Card>
        </div>
    )
}
