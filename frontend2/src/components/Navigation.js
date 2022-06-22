import React from 'react';
import { Nav, Container, NavDropdown, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { CATEGORIES } from '../utils/queries';


export const Navigation = () => {
    const { loading, error, data } = useQuery(CATEGORIES)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">InfoWeb</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#features">Historie</Nav.Link>
                <Nav.Link href="/people">Osobnosti</Nav.Link>
                <Nav.Link href="/articles">Články</Nav.Link>
                <NavDropdown title="Předměty" id="collasible-nav-dropdown">
                    { data.categories.data.map(category => (
                        <NavDropdown.Item key={category.id} href={`/categories/${category.id}`}>{category.attributes.name}</NavDropdown.Item>
                    ))}
                </NavDropdown>
                </Nav>
                <Form action="/articles" className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Hledej"
                        className="me-2"
                        aria-label="Search"
                        name="search"
                    />
                    <Button type="submit" variant="outline-danger"
                        onSubmit={(e) => { console.log('pokus') } }
                    >
                        Hledej
                    </Button>
                </Form>                
                <Nav>
                <Nav.Link href="#deets">Přihlášení</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>        
    );
}