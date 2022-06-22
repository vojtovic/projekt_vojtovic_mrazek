import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { useQuery } from '@apollo/client'
import { ARTICLES } from '../../utils/queries';
import { ArticleCard } from './ArticleCard';


export const ArticlesGrid = (props) => {
    const { loading, error, data } = useQuery(ARTICLES, { 
        variables: { sort: props.sort, search: props.search, categoryId: props.categoryId, categoryShortname: props.categoryShortname }
    });
    if (loading) return <p>Loading...</p>
    if (error) return <p>{ JSON.stringify(error) }</p>
    if (data.articles.data.length > 0)
        return (
            <Container fluid>
                <Row sm={1} md={2} lg={3}>
                    {           
                        data.articles.data.map(article => ( 
                            <Col key={article.id}>           
                                <ArticleCard 
                                id={article.id}
                                title={article.attributes.title}
                                content={article.attributes.content}
                                likes={article.attributes.likes}
                                dislikes={article.attributes.dislikes}
                                releasedAt={article.attributes.releasedAt}
                                imageURL={article.attributes.image.data.attributes.url}
                                categories={article.attributes.categories.data} />
                            </Col>
                        ))    
                    }
                </Row>
            </Container>         
        );
    else 
        return (
            <Container>
                <Alert variant="warning">
                    Nebyl nalezen žádný článek
                </Alert>
            </Container>         
        );                
}