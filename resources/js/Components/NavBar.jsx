import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const navItems = [
    { name: 'Inicio', route: 'index' },
    { name: 'Portafolio', route: 'portfolio' },
    { name: 'Blog', route: 'blog' },
    { name: 'Contactanos', route: 'contact-us' },
    { name: 'Acerca de Mi', route: 'about-us' },
    { name: 'CV', route: 'curriculum' }
];

const itemsBar = navItems.map(item => {
  return <Nav.Link key={ item.name }  href={ route(item.route) } active={ route().current(item.route) }>
            { item.name }
        </Nav.Link>
});
       
export default function NavBar({ auth }) {
    return(
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="justify-content-end" sticky="top">
            <Container>
                <Navbar.Brand> React-Bootstrap </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        { itemsBar }
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    );
}

