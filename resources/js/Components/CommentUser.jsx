export default function CommentUser({ nameCommenter,imageProfile,comment, children }) {
    return (
        <>            
            <section>
                <div className="flex-shrink-0">
                    <img className="rounded-circle" src={ imageProfile } alt="..." />
                </div>
            </section>
            <section>
                <div className="ms-3">                
                    <div className="fw-bold">
                        { nameCommenter }
                    </div>   
                                        
                    <p>
                       { comment }
                    </p>

                    { children }
                </div>
            </section>           
        </>
    );
}