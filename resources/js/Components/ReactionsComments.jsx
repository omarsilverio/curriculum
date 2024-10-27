import { Button, Col, Row } from "react-bootstrap";
import ReactionLikeUnlike from "./ReactionLikeUnlikeButton";

export default function ReactionsComments() {
    return (
        <>    
            <Row className="mb-1 justify-content-md-start" xs="auto">
                <Col>
                    <ReactionLikeUnlike isLike = { true } count = { 0 }/>
                </Col>
                <Col>
                    <ReactionLikeUnlike isLike = { false } count = { 2 }/>
                </Col>  
                <Col>
                    <Button variant="link">  reply </Button>
                </Col>                        
            </Row>                   
        </>
    );
}