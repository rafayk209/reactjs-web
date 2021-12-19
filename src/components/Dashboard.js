import React, { useState,useRef } from "react"
import PostData from './food_bank.json'
import {
  Card, Button, Alert, Navbar, Container, Nav, Modal,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
  Row, Col, Carousel

} from "react-bootstrap"

import c1 from "./image/image1.jpg"
import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import logo from './image/logo.png';



// import Carousel from "./carousal";

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="Logo" height="60px" /></Navbar.Brand>
          {/* <Nav.Link >Need Food</Nav.Link> */}
          
          &nbsp;&nbsp;

          
          {/* <Nav.Link href="#home">Food Bank</Nav.Link> */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <strong>Email:</strong> {currentUser.email}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button onClick={handleLogout}>Log Out</Button>
              {/* <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button> */}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>


<br/>

<br/>
<br/>
<br/>
      <div className="card" style={{width: '18rem'}}>
        <img src={c1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Do You Need Food?</h5>
          <p className="card-text">here is the form fill it then we will serve you.</p>
          <Example /> &nbsp;&nbsp;&nbsp; <Bank />
        </div>
      </div>
    

      
    </>
  )
}





function Example() {
  const [show, setShow] = useState(false);
  const [value, onChange] = useState(new Date());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Need Food
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          Fill this form to get food!
          <InputGroup className="mb-3">
            <InputGroup.Text>Your Name</InputGroup.Text>
            <FormControl aria-label="Name" />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Your Father Name</InputGroup.Text>
            <FormControl aria-label="Father Name" />

          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Your CNIC Number</InputGroup.Text>
            <FormControl aria-label="CNIC" />

          </InputGroup>


          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Your Family Members</InputGroup.Text>
            <FormControl aria-label="No of Family Members" />

          </InputGroup>


          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Choose Help Category</InputGroup.Text>
            <DropdownButton id="dropdown-basic-button" title="Select Type">
              <Dropdown.Item href="#/action-1">Monthly</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Yearly</Dropdown.Item>

            </DropdownButton>

          </InputGroup>


          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Times You Need</InputGroup.Text>
            <DropdownButton id="dropdown-basic-button" title="Select Type">
              <Dropdown.Item href="#/action-1">Daily 1 time</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Daily 2 times</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Daily 3 times</Dropdown.Item>


            </DropdownButton>

          </InputGroup>



          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Upload Your Image</InputGroup.Text>
            <input type="file" name="file" />
          </InputGroup>


          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Upload Your CNIC front and Back Image</InputGroup.Text>
            <input type="file" name="file" />
          </InputGroup>


          <InputGroup className="mb-3">
            <InputGroup.Text>Your Monthly Income</InputGroup.Text>
            <FormControl aria-label="income" />
          </InputGroup>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}




function Bank() {
  const [show, setShow] = useState(false);
  const [value, onChange] = useState(new Date());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Food Bank
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Food center</Modal.Title>
        </Modal.Header>
        <Modal.Body>

         <center> All Food Banks Available</center>

          <div>
        {PostData.map((postDetail, index) => {
          return <h6>
           <b> {postDetail.branch_name}</b>
           <p>Latitude: {postDetail.latitude} <br/>
           Longitude: {postDetail.longitude}</p>

           
           

           


          </h6> 
          
          
        })}
      </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}