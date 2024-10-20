import FormContactUs from '@/Forms/FormContactUs';
import PageLayout from '@/Layouts/PageLayout';


export default function Index({ auth }) {
    return (
        <>
            <PageLayout title_page="Contact Us">
                <PageLayout.Title>
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                        <i className="bi bi-envelope"></i>
                    </div>
                    <h1 className="fw-bolder">Get in touch</h1>
                    <p className="lead fw-normal text-muted mb-0">We'd love to hear from you</p>
                </PageLayout.Title>
                <PageLayout.Content>
                    <div className="rounded-3">
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                <FormContactUs/>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5">
                        <div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-chat-dots"></i></div>
                            <div className="h5 mb-2">Chat with us</div>
                            <p className="text-muted mb-0">Chat live with one of our support specialists.</p>
                        </div>
                        <div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-people"></i></div>
                            <div className="h5">Ask the community</div>
                            <p className="text-muted mb-0">Explore our community forums and communicate with other users.</p>
                        </div>
                        <div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-question-circle"></i></div>
                            <div className="h5">Support center</div>
                            <p className="text-muted mb-0">Browse FAQ's and support articles to find solutions.</p>
                        </div>
                        <div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-telephone"></i></div>
                            <div className="h5">Call us</div>
                            <p className="text-muted mb-0">Call us during normal business hours at (555) 892-9403.</p>
                        </div>
                    </div>
                </PageLayout.Content>                 
            </PageLayout>
        </>
    );
}