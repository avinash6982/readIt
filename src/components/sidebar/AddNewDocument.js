import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function AddDocument(props) {

    const [state, setState] = useState({
        name: null,
        url: null
    })

    const onValueChange = (label, value) =>
        setState(previousState => ({
            ...previousState,
            [label]: value
        }))

    return (
        <Form
            style={{
                padding: "1em",
                backgroundColor: "#BCBBBB",
                borderRadius: "10px"
            }}>
            <Form.Label>Add a new document</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onChange={e => onValueChange("name", e.target.value)} type="text" placeholder="Enter filename" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onChange={e => onValueChange("url", e.target.value)} type="text" placeholder="Enter url" />
            </Form.Group>
            <Button variant="warning" onClick={() => props.addDocument(state)} >
                add
            </Button>
        </Form>
    )
}

export default AddDocument