import Habilities from '@/Components/Habilities';
import ParticipantTeam from '@/Components/ParticipantTeam';
import TitlePage from '@/Components/TitlePage';
import PageLayout from '@/Layouts/PageLayout';
import { Col, Container, Row } from 'react-bootstrap';

/**
 * 
 */
const habilities = [
    {
        title: 'Desarrollo de Sistemas y Aplicaciones',
        text: 'Tengo un sólido conocimiento en el desarrollo de aplicaciones web y de escritorio, así como en la creación de sitios web que cumplen con las necesidades específicas de mis clientes.',
        image: 'https://dummyimage.com/600x400/343a40/6c757d'
    },
    {
        title: 'Implementación de Funcionalidades',
        text: 'Me especializo en implementar nuevas funcionalidades tanto en sistemas web como en aplicaciones de escritorio, asegurando que cada elemento funcione a la perfección y mejore la experiencia del usuario.',
        image: 'https://dummyimage.com/600x400/343a40/6c757d'
    },
    {
        title: 'Colaboración en Proyectos',
        text: 'Disfruto trabajar en equipo y colaborar en proyectos de desarrollo de software. Mi enfoque es siempre aportar ideas y soluciones que impulsen el avance del equipo y el éxito del proyecto.',
        image: 'https://dummyimage.com/600x400/343a40/6c757d'
    },
    {
        title: 'Corrección de Errores',
        text: 'Soy meticuloso en la identificación y corrección de errores en sistemas y aplicaciones, lo que me permite garantizar que los productos sean confiables y de alta calidad.',
        image: 'https://dummyimage.com/600x400/343a40/6c757d'
    },
    {
        title: 'Administración de Sitios Web',
        text: 'También tengo experiencia en la administración y mantenimiento de sitios web, asegurando que estén actualizados y funcionando de manera óptima.',
        image: 'https://dummyimage.com/600x400/343a40/6c757d'
    },
    {
        title: 'Pruebas Unitarias',
        text: 'Realizo pruebas unitarias exhaustivas para asegurar que cada componente de software cumpla con los estándares de calidad necesarios, minimizando errores y mejorando la robustez del sistema.',
        image: 'https://dummyimage.com/600x400/343a40/6c757d'
    }
];

/**
 * 
 */
const items = habilities.map(function(item,index) {
    return <Habilities key={index} className={((index % 2) == 0) ? "order-first" : "order-lg-last"} image={item.image} title={item.title} text={item.text}/>;
  });

  /**
   * 
   */
const team = [
    {name:'Ibbie Eckart', jobPositicion:'Founder & CEO', image: 'https://dummyimage.com/150x150/ced4da/6c757d'},
    {name:'Arden Vasek', jobPositicion:'CEO', image: 'https://dummyimage.com/150x150/ced4da/6c757d'},
    {name:'Toribio Nerthus', jobPositicion:'Operations Manager', image: 'https://dummyimage.com/150x150/ced4da/6c757d'},
    {name:'Malvina Cilla', jobPositicion:'CTO', image: 'https://dummyimage.com/150x150/ced4da/6c757d'}
];

/**
 * 
 */
const componentsTeam = team.map( item => {
    return  <Col className="mb-5" key = { item.name } >
                <ParticipantTeam name={ item.name } jobPositicion={ item.jobPositicion} image={ item.image }/>
            </Col>
} );

/*
* 
* @param
* @returns 
*/
export default function AboutUs({ auth }) {
    return (
        <>
            <PageLayout title_page="About Us">
                <PageLayout.Title>
                    <TitlePage title={'About Me'} description={ ' Soy un desarrollador de software con un enfoque por crear soluciones eficientes y  funcionales . Mi experiencia abarca una amplia gama de actividades  que me permiten contribuir de manera integral en proyectos de desarrollo de software. Mis principales habilidades incluyen:' }/>
                </PageLayout.Title>
                
                <PageLayout.Content>
                    { items }
                    <section className="py-5">
                        <Container className=" px-5 my-5">
                            <div className="text-center">
                                <h2 className="fw-bolder">Our team</h2>
                                <p className="lead fw-normal text-muted mb-5">Dedicated to quality and your success</p>
                            </div>
                            <Row className="gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                               { componentsTeam }
                            </Row>
                        </Container>
                    </section>
                </PageLayout.Content>
            </PageLayout>
        </>
    );
}