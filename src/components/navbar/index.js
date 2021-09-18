import { Navbar, Container, Nav } from "react-bootstrap";

import Icon from "./fontAwesomIcon";

export default function NavbarComponent() {

    return (
        <Navbar bg="dark" variant="dark">
            <Container style={{ maxWidth: "100vw" }}>
                <Navbar.Brand href="/">readIt</Navbar.Brand>
                <Nav>
                    <Nav.Link href="">
                        <Icon iconName="fa fa-sign-out" title="signout" />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}