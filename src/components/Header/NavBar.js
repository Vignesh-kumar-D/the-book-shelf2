import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { stateAction } from "../../store/app-state";
import { LinkContainer } from "react-router-bootstrap";
const NavbarHeader = (props) => {
  const loggedIn = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();
  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(stateAction.logout());
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">The Book Shelf</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {loggedIn && (
              <LinkContainer to="/search">
                <Nav.Link>Search</Nav.Link>
              </LinkContainer>
            )}
            {loggedIn && (
              <LinkContainer to="/mylist">
                <Nav.Link>MyList</Nav.Link>
              </LinkContainer>
            )}
            {loggedIn && (
              <LinkContainer to="/favorites">
                <Nav.Link>Favorite </Nav.Link>
              </LinkContainer>
            )}
            <Nav.Link onClick={logoutHandler}>
              {loggedIn ? "Logout" : "Login"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHeader;
