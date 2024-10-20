
export default function Proyect({ image, name }) {
    return (
        <>
            <div className="col-lg-6">
                <div className="position-relative mb-5">
                    <img className="img-fluid rounded-3 mb-3" src={ image } alt="..." />
                    <a className="h3 fw-bolder text-decoration-none link-dark stretched-link" href="#!">
                        { name }
                    </a>
                </div>
            </div>
        </>
    );
}