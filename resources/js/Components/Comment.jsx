import { Button, Col, Row } from "react-bootstrap";
import Replies from "./Replies";
import FormReply from "@/Forms/FormReply";
import CommentUser from "./CommentUser";
import ReactionsComments from "./ReactionsComments";

export default function Comment() {
    return (
        <>
            <div className="d-flex mb-4">
                <CommentUser imageProfile={ 'https://dummyimage.com/50x50/ced4da/6c757d.jpg' } nameCommenter={ 'User Example' } comment={' If youre going to lead a space frontier, it has to be government; it ll never be private enterprise. Because the space frontier is dangerous, and its expensive, and it has unquantified risks.'}>
                    <section>
                        <ReactionsComments/>
                    </section>
                    
                    <section>
                        <FormReply/>
                    </section>                    

                    <section>
                        <Replies/>
                    </section>                    
                </CommentUser>
            </div>
        </>
    );
}