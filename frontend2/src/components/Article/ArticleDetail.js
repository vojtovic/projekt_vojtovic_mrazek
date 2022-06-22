import React from 'react'
import { Container, Row, Col, Image, Tab, Tabs, ListGroup, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { ARTICLE } from '../../utils/queries';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

export default function ArticleDetail() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(ARTICLE, { 
        variables: { id: id }
    });
    if (loading) return <p>Loading...</p>
    if (error) return <p>{ JSON.stringify(error) }</p>

    return (
        <Container className='mb-3'>
            <Row>
                <Col>
                    <h2 className="text-center bg-light p-2 mt-3 text-danger text-uppercase">{ data.article.data.attributes.title }</h2>
                </Col>
            </Row>
            <Tabs defaultActiveKey="text" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="text" title="Text">
                    <div><ReactMarkdown children={data.article.data.attributes.content} remarkPlugins={[remarkGfm]} /></div>
                </Tab>
                <Tab eventKey="image" title="Obrázek">
                    <figure>
                        <Image src={`http://localhost:1337${data.article.data.attributes.image.data.attributes.url}`} className="img-fluid" />
                        <figcaption>Obrázek: { data.article.data.attributes.title }</figcaption>
                    </figure>
                </Tab>
                <Tab eventKey="details" title="Podrobnosti">
                    <Row>
                        <Col>
                            <h3>Předměty</h3>
                            <ListGroup defaultActiveKey="#link0">
                            { data.article.data.attributes.categories.data.map(category => (
                                    <ListGroup.Item key={category.id} action href={`/categories/${category.id}`}>
                                        {category.attributes.name}
                                    </ListGroup.Item>
                                )
                            )}
                            </ListGroup>
                        </Col>
                        <Col>
                            <h3>Metadata</h3>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td>Autor článku</td>
                                        <td>{ data.article.data.attributes.users_permissions_user.data.attributes.email }</td>
                                    </tr>
                                    <tr>
                                        <td>Vydáno</td>
                                        <td>{ data.article.data.attributes.releasedAt }</td>
                                    </tr>
                                    <tr>
                                        <td>Článek se líbil</td>
                                        <td>{ data.article.data.attributes.likes }</td>
                                    </tr>
                                    <tr>
                                        <td>Článek se nelíbil</td>
                                        <td>{ data.article.data.attributes.dislikes }</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                  </Row>
                </Tab>
            </Tabs>
        </Container>
    );
}