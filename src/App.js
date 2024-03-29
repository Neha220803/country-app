import React, { useState } from 'react';
import './App.css';
import { Button, Container, Form } from 'react-bootstrap';

function App() {
  const [countryName, setCountryName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Country Name submitted:", countryName);
  };

  const handleChange = (event) => {
    setCountryName(event.target.value);
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="countryName">
            <Form.Control
              type="text"
              value={countryName}
              onChange={handleChange}
              placeholder="Enter country name"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;