import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Form, FormControl, InputGroup, Button, Table } from 'react-bootstrap';

function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const hundleSubmit = e => {
    e.preventDefault();
    addTodo(value);
  }

  const addTodo = text => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">ToDoリスト</h1>
        <Form onSubmit={hundleSubmit}>
          <InputGroup className="mb-3">
            <FormControl
              type="text"
              value={value}
              onChange={e => setValue(e.target.value)} />
            <InputGroup.Append>
              <Button type="submit" variant="secondary">追加</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Container>
      <Container>
        <Table>
          <tbody>
            {
              todos && todos.map((todo, index) => (
                <tr key={index}>
                  <th className="text-left">
                    {todo}
                  </th>
                  <td className="text-right">
                    <Button
                      variant="danger"
                      onClick={() => removeTodo(index)}>削除</Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
