import { Component } from "react";

import SigninComponent from "../components/signin";

class Signin extends Component {

    constructor() {

        super()
        this.state = {
            users: [
                {
                    id: 1,
                    name: "avinash",
                    username: "avinash@gmail.com",
                    password: "12345avi"
                },
                {
                    id: 2,
                    name: "admin",
                    username: "admin@readit.com",
                    password: "admin"
                }
            ],
            username: "",
            password: ""
        }
    }

    onSignin() {

        let username = this.state.username
        let password = this.state.password

        Object.values(this.state.users)
            .map(item =>
                item.username === username && item.password === password ?
                    this.props.setAuth(true, item.name) :
                    false
            )
    }

    onValueChange(label, value) {

        this.setState(previousState => ({
            ...previousState,
            [label]: value
        }))
    }

    render() {

        return (
            <SigninComponent onSignin={this.onSignin.bind(this)} onValueChange={this.onValueChange.bind(this)} />
        );
    }
}

export default Signin