import { Card } from "react-bootstrap";

export default function Article({ image, date, title, text }) {
    return (
        <>
           <Card className="mb-4">
                <Card.Img variant="top" src={ image }/>
                <Card.Body>
                    <div className="small text-muted">
                        { date }
                    </div>
                    <h2 className="card-title h4">
                        { title }
                    </h2>
                    <p className="card-text">
                        { text }
                    </p>
                    
                    <a className="btn btn-primary" href={ route('article') }>Read more →</a>
                </Card.Body>
            </Card>
        </>
    );
}