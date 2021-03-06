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
    setValue('');
  }

  const addTodo = text => {
    const newTodos = [...todos, {text, complete: false}];
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
    console.log(newTodos);
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
                    {todo.text}
                  </th>
                  <td className="text-right">
                    <Button
                      className="mr-2"
                      variant={ todo.complete ? "light" : "warning" }
                      onClick={() => completeTodo(index)}>
                        { todo.complete ? '完了' : '未完了' }
                    </Button>
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
