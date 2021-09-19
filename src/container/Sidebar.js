import { Component } from "react";

import SidebarComponent from "../components/sidebar";

class Sidebar extends Component {

    render() {

        return (
            <SidebarComponent
                openReader={this.props.openReader.bind(this)}
                addDocument={this.props.addDocument.bind(this)}
                removeDocument={this.props.removeDocument.bind(this)}
                username={this.props.username}
                documents={this.props.documents}
            />
        );
    }
}

export default Sidebar