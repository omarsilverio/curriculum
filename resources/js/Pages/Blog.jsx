import Article from '@/Components/Article';
import SearchArticles from '@/Components/SearchArticles';
import TitlePage from '@/Components/TitlePage';
import PageLayout from '@/Layouts/PageLayout';
import { Col,Row,Pagination } from "react-bootstrap";


export default function Blog({ auth }) {
    return (
        <>
            <PageLayout title_page="Blog">
                
                <PageLayout.Title>
                    <TitlePage title = {'Blog'} description = { 'Below is an example form built entirely with Bootstraps form controls.' }/>
                </PageLayout.Title>

                <PageLayout.Content>
                    <Col className="col-lg-8">
                        <Article image = 'https://dummyimage.com/850x350/dee2e6/6c757d.jpg' date='January 1, 2023' title='Featured Post Title' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!' />
                        
                        <Row>
                            <Col className="col-lg-6">
                                <Article image = 'https://dummyimage.com/850x350/dee2e6/6c757d.jpg' date='January 1, 2023' title='Featured Post Title' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!' />
                                <Article image = 'https://dummyimage.com/850x350/dee2e6/6c757d.jpg' date='January 1, 2023' title='Featured Post Title' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!' />
                            </Col>
                            <Col className="col-lg-6">
                                <Article image = 'https://dummyimage.com/850x350/dee2e6/6c757d.jpg' date='January 1, 2023' title='Featured Post Title' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!' />
                                <Article image = 'https://dummyimage.com/850x350/dee2e6/6c757d.jpg' date='January 1, 2023' title='Featured Post Title' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!' />
                            </Col>                            
                        </Row>
                        
                        <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item active>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Item >{4}</Pagination.Item>
                            <Pagination.Item>{5}</Pagination.Item>
                            <Pagination.Item disabled>{6}</Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                    </Col>

                    <SearchArticles/> 
                                      
                </PageLayout.Content>                
            </PageLayout>
        </>
    );
}