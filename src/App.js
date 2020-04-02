import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Form, FormControl, InputGroup, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">ToDoリスト</h1>
        <Form>
          <InputGroup className="mb-3">
            <FormControl
              type="text"
              value=""
            />
            <InputGroup.Append addonType="append">
              <Button type="submit" variant="secondary">追加</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Container>
    </div>
  );
}

export default App;
