import { Component } from "react";

import BookmarksComponent from "../components/bookmarks";

class Bookmarks extends Component {

    render() {

        return (
            <BookmarksComponent
                openReader={this.props.openReader.bind(this)}
                username={this.props.username}
                documents={this.props.documents}
            />
        );
    }
}

export default Bookmarks