import { Navbar, Container } from "react-bootstrap";
import { Link } from 'react-router-dom'

const MyNavBar = () => {
  return (
    <Navbar className="Navbar mb-4" bg="dark">
      <Container>
        <Link to="/">
        <Navbar.Brand className="text-light text-decoration-none">SpaceLight</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
