import { Form, Button } from "react-bootstrap";
import ZeroPaddingWrapper from "../../common/wrapper/ZeroPaddingWrapper";

function SigninComponent(props) {

    return (
        <ZeroPaddingWrapper styles={{ display: "grid", placeItems: "center", height: "calc(100vh - 3em)" }}>
            <Form
                style={{
                    backgroundColor: "#DBDBDB",
                    padding: "3em",
                    borderRadius: "10px",
                    display: "grid",
                    placeItems: "center"
                }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={e => props.onValueChange("username", e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={e => props.onValueChange("password", e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" onClick={() => props.onSignin()}>
                    Submit
                </Button>
            </Form>
        </ZeroPaddingWrapper>
    );
}

export default SigninComponent