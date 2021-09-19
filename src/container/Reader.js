import { Component } from "react";

import ReaderComponent from "../components/reader";

class Reader extends Component {

    constructor() {

        super()
        this.state = {
            URL: "https://gfgc.kar.nic.in/sirmv-science/GenericDocHandler/138-a2973dc6-c024-4d81-be6d-5c3344f232ce.pdf"
        }
    }

    render() {

        console.log(this.props.content)

        return(
            this.props.content && <ReaderComponent fileURL={this.state.URL} />
        );
    }
}

export default Reader