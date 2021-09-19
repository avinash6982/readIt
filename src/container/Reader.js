import { Component } from "react";

import ReaderComponent from "../components/reader";

class Reader extends Component {

    render() {

        return (
            <ReaderComponent content={this.props.content} />
        );
    }
}

export default Reader