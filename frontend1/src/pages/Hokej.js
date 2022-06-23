/* Import základní knihovny Reactu */ 
import React from "react";
import { Container,Row,Col,Figure,Card,Button,Placeholder } from "react-bootstrap";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
/* Export funkce Homepage(), která představuje komponentu základní stránky aplikace */ 
export default function Homepage() {
const HOMEPAGE = gql`
query Articles{
    articles(filters:
    {
    category:{zkratka: {eq:"LH"}}  
    })
    {
        data{
          id
          attributes{
            title
            description
            fotka{
              data{
                attributes{
                  url
                }
              }
            }
            hlavni_text
            nadpis_videa
            video{
              data{
                attributes{
                  url
                }
              }
            }
            den_pridani
            category{
              data{
                id
                attributes{
                  name
                }
              }
            }
          }
        }
      }
  }
`


const { data, loading, error } = useQuery(HOMEPAGE)
  if (loading) return <p>Probíhá načítání stránky...</p>;
  if (error) return <p>Došlo k chybě: {JSON.stringify(error)}</p>;
  else if (data) {
    return (
      <Container fluid>
        <Col>
          <title>ZAPASY</title>
        </Col>
        <Row xs={1} sm={2} md={3} lg={5}>
          {data.articles.data.map((item, index) => {
            return (
              <div className="card text-center" style={{backgroundColor:'black' }}>
                
                <div style={{backgroundColor:'black' }} className="d-flex justify-content-around" >
  <Card style={{ width: '200px', height:'300px',backgroundColor:'black' }}>
    <Card.Img style={{ width: '198px', height:'185px' }} variant="top" src={"http://localhost:1337"+item.attributes.fotka.data.attributes.url} />
    <Card.Body>
      <Card.Title style = {{fontSize:'20px',color:'red'}}>{item.attributes.title}</Card.Title>
      <Link to={"/articles/" + item.id}><h2 className="bg-danger text-white p-3"><Button style = {{fontSize:'20px'}} variant="danger">Na článek</Button></h2></Link>
    </Card.Body>
  </Card>
</div>
              </div>
            )
          })}
          </Row>
      </Container>
    );
  }
  
}