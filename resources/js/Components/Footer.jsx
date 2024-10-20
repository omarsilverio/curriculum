export default function Footer({ auth }) {
    return (
        <>
            <footer className="py-5 text-muted text-center text-small bg-dark">
                <p className="mb-1 text-white">© 2017-2018 Company Name</p>
                <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Privacy</a></li>
                <li className="list-inline-item"><a href="#">Terms</a></li>
                <li className="list-inline-item"><a href="#">Support</a></li>
                </ul>
            </footer>
        </>
    );
}