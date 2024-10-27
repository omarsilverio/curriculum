import CommentUser from "./CommentUser";

export default function Replies() {
    return (
        <>
           <div className="d-flex mt-4">
                <CommentUser imageProfile={'https://dummyimage.com/50x50/ced4da/6c757d.jpg'} nameCommenter={ 'Commenter Name' } comment={' If youre going to lead a space frontier, it has to be government; it ll never be private enterprise. Because the space frontier is dangerous, and its expensive, and it has unquantified risks.'}/>
            </div>
            
            <div className="d-flex mt-4">
                <CommentUser imageProfile={'https://dummyimage.com/50x50/ced4da/6c757d.jpg'} nameCommenter={ 'Commenter Name' } comment={' If youre going to lead a space frontier, it has to be government; it ll never be private enterprise. Because the space frontier is dangerous, and its expensive, and it has unquantified risks.'}/>
            </div>
        </>
    );
}