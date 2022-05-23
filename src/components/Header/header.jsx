
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#">Challenges</Nav.Link>
            <Nav.Link href="#">Quiz</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
