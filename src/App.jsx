import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Task from './components/Task.jsx';
import Calendar from './components/Calendar.jsx';
import { useState } from "react";
import './App.css';

function App() {
  const [newTask, setNewTask] = useState("");

  const [tasks, setTasks] = useState
    ([
      {
        id: 1,
        name: "Nauczyć się Reacta",
        completed: true
      },
      {
        id: 2,
        name: "Nauczyć się useState",
        completed: false
      },
      {
        id: 3,
        name: "Zrobić projekt",
        completed: true
      }
    ]);

  function toggleTask(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function addTask() {
    setTasks([
      ...tasks,
      {
        id: Math.max(...tasks.map(task => task.id)) + 1,
        name: newTask,
        completed: false
      }
    ]);
  }

  return (
    <Container className="min-vh-100 d-flex justify-content-center align-items-center">
      <Row className="text-center m-2 gy-3">
        <Col className="bg-light border rounded p-2 shadow" xs={12}>
          <h1>Prosta aplikacja todo</h1>
        </Col>
        <Col className="bg-light border rounded p-2 shadow" xs={12}>
          <h3>Moje zadania</h3>
          <Task
            tasks={tasks}
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
            toggleTask={toggleTask}
          />
        </Col>
        <Calendar />
      </Row>
    </Container>
  );
}

export default App;
