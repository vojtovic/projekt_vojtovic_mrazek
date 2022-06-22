import React, {useState} from "react";
import { Row, Col, Image, Button, Collapse } from "react-bootstrap";
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

export const PersonCard = (props) => {
  const [open, setOpen] = useState(false);
  const { name, birth, death, bio, photo } = props;
  let birthdate = new Date(birth.split('-')).toLocaleDateString();
  let deathdate = death ? new Date(death.split('-')).toLocaleDateString() : 'žije';
  return (
    <Row>
      <Col xs={4} md={1}>
          <figure>
            { photo && (
              <Image
                src={`http://localhost:1337${photo.attributes.url}`}
                className='img-fluid rounded-circle'
                alt={ name }
                width='100'
              />
            )}
            </figure>            
      </Col>
      <Col xs={8} md={11}>
          <h4>
            <b>{ name }</b> ({birth && (<span>{birthdate}</span>)} - <span>{deathdate}</span>)
          </h4>
         <p>
         <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="btn btn-secondary btn-xs"
        >
          Podrobnosti
        </Button>
        </p>
      </Col>
      <Col xs={12} md={12}>
        <Collapse in={open}>
          <ReactMarkdown children={bio} remarkPlugins={[remarkGfm]} />
        </Collapse>
      </Col>      
    </Row>  
  );
};
