import { Container } from "react-bootstrap"

export default function Title({ children }) {
    return (       
        <Container className="px-lg-5">
            <div className="p-4 p-lg-5 bg-light rounded-3 text-center my-5">
                <div className="m-4 m-lg-5">
                    { children }
                </div>
            </div>
        </Container>        
    );
}