import logo from "../../logos/logo.png";
import './Header.css';
import React, { useContext } from "react";
import { Container, Nav, Navbar,Button, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
  let loggedInUser = useContext(UserContext);
  return (
    <div>
        {/* ----------- Navbar Part ------------*/}

      <Navbar >
        <Container>
          <Link to="/"><img className="logo" src={logo} alt="" /></Link>
          <Nav >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#features">Dontation</Nav.Link>
            <Nav.Link href="#pricing">Event</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>

            {/* <Link to="/login"><Button variant="primary">Register</Button> </Link>  */}

            {

            loggedInUser.user.email ? <p style={{color:"lightcoral", fontWeight: "bold"}} class="nav-link" >
            {loggedInUser.user.name}
            </p> : <Link to="/login"><Button variant="primary">Register</Button> </Link>
            
            }

            <Link to="/admin"><Button variant="dark">Admin</Button></Link>
          </Nav>
          
        </Container>
      </Navbar>

      {

// loggedInUser.email ? <p style={{color:"lightcoral", fontWeight: "bold"}} class="nav-link" >
// {loggedInUser.name}
// </p> : <Link to="/login"><Button variant="primary">Register</Button> </Link> 

}

     {/* ---grow line part--- */}

     



    
    </div>
  );
};

export default Header;
