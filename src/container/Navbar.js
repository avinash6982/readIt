import { Component } from "react";
import NavbarComponent from "../components/navbar";

class Navbar extends Component {

    render() {

        return <NavbarComponent {...this.props} />
    }
}

export default Navbar