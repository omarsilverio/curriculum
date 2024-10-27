export default function ParticipantTeam({ name, jobPositicion, image }){
    return (
        <>
            <div className="text-center">
                <img className="img-fluid rounded-circle mb-4 px-4" src={ image } alt="..." />
                <h5 className="fw-bolder">{ name }</h5>
                <div className="fst-italic text-muted"> { jobPositicion } </div>
            </div>
        </>
    );
}