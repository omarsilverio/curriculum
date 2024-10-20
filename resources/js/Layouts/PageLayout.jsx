import Title from "@/Components/Title";
import { Head } from "@inertiajs/react";
import { Container, Row } from "react-bootstrap";
import AppLayout from "./AppLayout";


export default function PageLayout({ title_page, children }) {
    const title = children.find(child => child.type === PageLayout.Title);
    const content = children.find(child => child.type === PageLayout.Content);
    
    return (
        <>
            <Head title={ title_page } />
            <AppLayout>
                { title && <Title> { title.props.children } </Title> }                
                
                <Container className="px-lg-5">
                    <Row className="gx-lg-5">
                        { content && content.props.children }
                    </Row>
                </Container>             
            </AppLayout>
        </>
    );    
}

PageLayout.Title = ({ children }) => <>{children}</>;
PageLayout.Content = ({ children }) => <>{children}</>;