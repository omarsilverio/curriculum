import { Card, Col } from "react-bootstrap";

export default function Services({ icon, title, text }) {
    return (
        <>
            <Col className="col-lg-6 col-xxl-4 mb-5">
                <Card className="card bg-light border-0 h-100">
                    <Card.Body className="text-center p-4 p-lg-5 pt-0 pt-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-4">
                            <i className={ icon }></i>
                        </div>
                        <h2 className="fs-4 fw-bold">
                            { title }
                        </h2>
                        <p className="mb-0">
                            { text }
                        </p>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}