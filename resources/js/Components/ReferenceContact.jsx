export default function ReferenceContact({ title, text, children }) {
    return(
        <>
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                { children }
            </div>
            <h1 className="h5">
                { title }
            </h1>
            <p className="lead fw-normal text-muted mb-0">
                { text }
            </p>
        </>
    );
}