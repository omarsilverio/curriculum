import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

export default function FormReply() {
    return (
        <>
            <Form>  
                <Row className="mb-1">                                            
                    <Col  xs={10}>                                                              
                        <FloatingLabel controlId="floatingTextarea" label="Reply" className="mb-3">
                            <Form.Control as="textarea" placeholder="Leave a comment here" />
                        </FloatingLabel>                                                                
                    </Col>
                    
                    <Col xs={2}>
                        <Button variant="primary" id="submitButton" type="submit"> Send </Button>
                    </Col>                                                             
                </Row>
            </Form> 
        </>
    );
}