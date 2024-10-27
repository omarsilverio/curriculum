import ReferenceContact from '@/Components/ReferenceContact';
import TitlePage from '@/Components/TitlePage';
import FormContactUs from '@/Forms/FormContactUs';
import PageLayout from '@/Layouts/PageLayout';
import { Col, Row } from 'react-bootstrap';

/**
 * 
 */
const referencesContact = [
    { title: 'Chat with us', text: 'Chat live with one of our support specialists.', icon: 'bi bi-chat-dots' },
    { title: 'Ask the community', text: 'Explore our community forums and communicate with other users.', icon: 'bi bi-people' },
    { title: 'Support center', text: 'Browse FAQs and support articles to find solutions.', icon: 'bi bi-question-circle' },
    { title: 'Call us', text: 'Call us during normal business hours at (555) 892-9403.', icon: 'bi bi-telephone' }
];

/**
 * 
 */
const componentReferencesContac = referencesContact.map(item => {
    return <Col>
                <ReferenceContact title={item.title} text= { item.text }>
                    <i className={ item.icon }></i>
                </ReferenceContact>
            </Col>
});


/**
 * 
 *  
 * @returns 
 */
export default function Index({ auth }) {
    return (
        <>
            <PageLayout title_page="Contact Us">
                <PageLayout.Title>
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                        <i className="bi bi-envelope"></i>
                    </div>
                    <TitlePage title = {'Get in touch'} description = { 'We d love to hear from you' }/>
                </PageLayout.Title>

                <PageLayout.Content>                    
                    <Row className="gx-5 justify-content-center">
                        <div className="col-lg-8 col-xl-6">
                            <FormContactUs/>
                        </div>
                    </Row>
                    
                    <Row className="gx-5 py-5 text-center">
                       { componentReferencesContac }
                    </Row>
                </PageLayout.Content>                 
            </PageLayout>
        </>
    );
}