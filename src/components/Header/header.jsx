
import  logo  from "../../assets/img/logo.png";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
export const Header = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#"><img src={logo} style={{width:"100px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className="navMenu">Home</Nav.Link>
            <Nav.Link href="#" className="navMenu">Challenges</Nav.Link>
            <Nav.Link href="#" className="navMenu">Quiz</Nav.Link>
            <Nav.Link href="#" className="navMenu">About Us</Nav.Link>           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
