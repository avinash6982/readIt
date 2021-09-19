import { Container } from "react-bootstrap";

function ZeroPaddingWrapper(props) {

    return (
        <Container style={{ padding: 0, ...props.styles }} fluid>
            {props.children}
        </Container>
    );
}

export default ZeroPaddingWrapper