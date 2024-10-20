import { Container, Row } from "react-bootstrap";

export default function Habilities({ className='', image, title, text }) {
    return (
        <>
           <section className="py-5">
                <Container className="px-5 my-5">
                    <Row className="gx-5 align-items-center">
                        <div className={'col-lg-6 ' + className }>
                            <img className="img-fluid rounded mb-5 mb-lg-0" src={ image } alt="..." />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">
                                { title }
                            </h2>
                            <p className="lead fw-normal text-muted mb-0">
                                { text }
                            </p>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
}