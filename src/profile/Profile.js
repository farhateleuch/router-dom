import React, { Children } from 'react'
import {Card,Button} from 'react-bootstrap';

function Profile(props){


 
return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.children} />
  <Card.Body>
    <Card.Title>{props.fullName}</Card.Title>
    <Card.Text>
      {props.bio}
    </Card.Text>
    <div>{props.profession}</div>
     
    <Button onClick={()=>{alert(`User Name : ${props.fullName}`)}} variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            
        </div>
    )
}

export default Profile

Profile.propTypes = {
    fullName: Profile.string,
    bio: Profile.string ,
    profession: Profile.string
  }

Profile.defaultProps={
    fullName :'EMPTY',bio:'EMPTY',profession:'EMPTY',children:'https://i.vimeocdn.com/portrait/1274237_300x300.jpg'
}



