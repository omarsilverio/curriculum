
export default function  TitlePage({title, description}){
    return (
            <>
                <h1 className="fw-bolder"> 
                    { title } 
                </h1>
                <p className="lead fw-normal text-muted mb-0"> 
                    { description } 
                </p>
            </>
    );

}