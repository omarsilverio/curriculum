import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

export default function FormComment() {
    return (
        <>
            <Form>
                <Row className="mb-3">
                    <div className="text-center">
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}/>
                        </FloatingLabel>
                    </div>                            
                </Row>                           

                <Row className="mb-3">
                    <div className="text-end">
                        <button className="btn btn-primary disabled" id="submitButton" type="submit"> Send </button>
                    </div>
                </Row>
            </Form>
        </>
    );
}