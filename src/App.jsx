import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Task from './components/Task.jsx';
import './App.css';

function App() {
  return (
    <Container className="min-vh-100 d-flex justify-content-center align-items-center">
      <Row className="text-center m-2 gy-3">
        <Col className="bg-light border rounded p-2 shadow" xs={12}>
          <h1>Prosta aplikacja todo</h1>
        </Col>
        <Col className="bg-light border rounded p-2 shadow" xs={12}>
          <h3>Moje zadania</h3>
          <Task />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
