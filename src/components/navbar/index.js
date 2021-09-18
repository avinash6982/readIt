import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";

import Icon from "./fontAwesomIcon";

import classes from './styles.module.css'

export default function NavigationBar() {

    return (
        <Navbar style={{ backgroundColor: "#4d4d4d" }} variant="dark">
            <Container style={{ maxWidth: "100vw" }}>
                <Navbar.Brand href="/">TuteNext</Navbar.Brand>
                <Nav>
                    <Nav.Item href="">
                        <Dropdown>
                            <Dropdown.Toggle
                                bsPrefix="navbarDropdown"
                                style={{backgroundColor: "transparent", border: "none", boxShadow: "none"}}>
                                <Icon iconName="fa fa-bell" title="Notifications" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{right: 0, left: "auto"}}>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Anotherasdadadsadas action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav.Item>
                    <Nav.Link href="/profile">
                        <Icon iconName="fa fa-user" title="profile" />
                    </Nav.Link>
                    <Nav.Link href="">
                        <Icon iconName="fa fa-sign-out" title="signout" />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}