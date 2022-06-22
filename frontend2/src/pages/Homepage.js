import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { CategoriesList } from "../components/Category/CategoriesList";
import { BlockHeading } from "../components/BlockHeading";
import { HOMEPAGE } from "./../utils/queries";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Homepage() {
  const { loading, error, data } = useQuery(HOMEPAGE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  const homepage = data.homepage.data.attributes;

  return (
    <Container fluid>
      <Carousel>
        { homepage.carousel.banner.map(ban => (
            <Carousel.Item key={ban.id}>
                <a href={ban.link} target="_blank" rel="noopener noreferrer">
                    <img
                    className="d-block w-100"
                    src={`http://localhost:1337${ ban.photo.data.attributes.url }`}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{ ban.info }</h3>
                    </Carousel.Caption>
                </a>
            </Carousel.Item>
        )) 
        }  
      </Carousel>

      <Row xs={1} sm={1} md={2} lg={2}>
        <Col>
          <BlockHeading title="Předměty" />
          <CategoriesList />
        </Col>
        <Col>
          <BlockHeading title="Co je informatika" />
          <ReactMarkdown>{homepage.about}</ReactMarkdown>
        </Col>
      </Row>
    </Container>
  );
}
