import Services from '@/Components/Services';
import TitlePage from '@/Components/TitlePage';
import PageLayout from '@/Layouts/PageLayout';
import { useEffect, useRef, useState } from 'react';
import { InputGroup, Row } from 'react-bootstrap';

/**
 * @const {Array} 
 * services avaible
 */
const services = [
    { icon: 'bi bi-collection', title: 'Desarrollo de páginas web',text:'Una página web es una herramienta de marketing online diseñada con software mediante lenguajes de programación PHP, JavaScript/AngularJS, Ruby entre otros y son maquetadas mediante lenguajes de marcado como lo son HTML y CSS3.' },
    { icon: 'bi bi-cloud-download', title: 'Desarrollo de software',text:'Transformamos desafíos en oportunidades con soluciones de software personalizadas para tu organización.' },
    { icon: 'bi bi-card-heading', title: 'E-Commerce',text:'Optimiza tu presencia online y maximiza tus ventas a través de tu E-commerce. Desarrollamos soluciones a medida guiándote en la selección de la plataforma indicada para tu e-commerce y desarrollando tu tienda online para detonar las conversiones de venta.' },
    { icon: 'bi bi-card-heading', title: 'Participación en proyectos de software',text:'Me integro a nuevos equipos de trabajo por proyectos temporales' },
    { icon: 'bi bi-card-heading', title: 'Implementación de funciones',text:'Implemento nuevas funcionalidades a tu sitio web' }
];

/**
 * @const {Array<JSX.Element>} 
 * Components Servicies avaible
 */
const servicesComponent = services.map((service, index) => {
  return <Services key={ index }  icon={ service.icon } title={ service.title } text={ service.text }/>
});

/**
 * page home
 * @return {JSX.Element}
 */
export default function Index() {
    /*<a className="btn btn-primary btn-lg" href={ route('contact-us') }>Contactame</a>*/
    
    return (
        <>
            <PageLayout title_page="Bienvenido">
                <PageLayout.Title>
                    <TitlePage title = {'¡Bienvenido!'} description = { 'Desarrollo de software profesional a la medida de tu organización o empresa' }/>
                    <a className="btn btn-primary" href={ route('contact-us') }>Contactame</a>                                     
                </PageLayout.Title>
                <PageLayout.Content>
                    { servicesComponent }
                </PageLayout.Content>
            </PageLayout>
        </>
    );
}
  
