import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavbarComponent({ auth, setAuth }) {

    return (
        <Navbar style={{ height: "3em" }} bg="dark" variant="dark">
            <Container style={{ maxWidth: "100vw" }}>
                <Navbar.Brand href="/">readIt</Navbar.Brand>
                {
                    auth &&
                    <Nav>
                        <Nav.Link href="">
                            <i onClick={() => setAuth(false, null)} style={{ fontSize: 25 }} className="fa fa-sign-out" title="signout" aria-hidden="true"></i>
                        </Nav.Link>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
}