/* Import základní knihovny Reactu */ 
import React from "react";
import { Container,Row,Col,Figure } from "react-bootstrap";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
/* Export funkce Homepage(), která představuje komponentu základní stránky aplikace */ 
export default function Homepage() {
const HOMEPAGE = gql`
query Articles{
  articles{
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
        <Row xs={1} sm={1} md={2} lg={5}>
          {data.articles.data.map((item, index) => {
            return (
              <div className="card text-center">
                 
                <Link to={"/articles/" + item.id}><h2 className="bg-dark text-center text-white p-3">{item.attributes.title}</h2></Link>
              </div>
            )
          })}
          </Row>
      </Container>
    );
  }
}