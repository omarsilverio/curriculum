import Proyect from '@/Components/Proyect';
import PageLayout from '@/Layouts/PageLayout';
import { Container } from 'react-bootstrap';

const proyects = [
    { image: 'https://dummyimage.com/600x400/343a40/6c757d', name: 'Project name'},
    { image: 'https://dummyimage.com/600x400/343a40/6c757d', name: 'Project name'},
    { image: 'https://dummyimage.com/600x400/343a40/6c757d', name: 'Project name'},
    { image: 'https://dummyimage.com/600x400/343a40/6c757d', name: 'Project name'}
];

const proyectsComponents = proyects.map((item, index) => {
    return <Proyect key={ index }  image={ item.image } name={ item.name } />
});

export default function Portfolio({ auth }) {
    return (
        <>
            <PageLayout title_page="Portfolio">
                <PageLayout.Title>
                    <h1 className="fw-bolder">Our Work</h1>
                    <p className="lead fw-normal text-muted mb-0">Company portfolio</p>
                </PageLayout.Title>
                <PageLayout.Content>
                    { proyectsComponents }
                    <section className="py-5 bg-light">
                        <Container className="px-5 my-5">
                            <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
                            <a className="btn btn-lg btn-primary" href="#!">Contact us</a>
                        </Container>
                    </section>
                </PageLayout.Content>                 
            </PageLayout>
        </>
    );
}