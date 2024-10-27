import { Card, CardBody } from "react-bootstrap";
import Comment from "./Comment";
import FormComment from "@/Forms/FormComment";

export default function Comments() {
    return (
        <>
             <Card className="bg-light">
                <CardBody> 
                    <FormComment/>                   
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </CardBody>
            </Card>
        </>
    );
}