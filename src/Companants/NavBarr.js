import React, { useState } from 'react'
 import {Container,Navbar,NavDropdown,Nav,Form,FormControl,Button} from 'react-bootstrap'
 import ReactStars from "react-rating-stars-component";



function NavBarr({filter}) {
const [rating,setRating] = useState(0)

const [title, setTitle] = useState('')


    return (
        <div>
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>

             <ReactStars
              count={5}
             onChange={(x)=>setRating(x)}
             size={24}
             activeColor="#ffd700"
              />

<Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"

          onChange={(e)=>setTitle(e.target.value)}
        />
        </Form>
        <Button onClick={()=>filter(rating,title)} >Search</Button>
      

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavBarr
