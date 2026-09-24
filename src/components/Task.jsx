import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Task({
    tasks,
    newTask,
    setNewTask,
    addTask,
    toggleTask
})
{
    const handleSubmit = (event) => {
        event.preventDefault();
        addTask();
    };

    return (
        <div className="d-flex justify-content-center">
            <Form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-center mb-3">
                    <Form.Control
                        placeholder = "Dodaj nowe zadanie"
                        name = "trescZadania"
                        onChange = {(event) => setNewTask(event.target.value)}
                    />
                    <Button type="submit">Dodaj</Button>
                </div>
                <div className="w-75 mx-auto text-start">
                    {tasks.map(task => (
                        <Form.Check
                            label={task.name}
                            name="group1"
                            type="checkbox"
                            key={task.id}
                            id={`task-${task.id}`}
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                        />
                    ))}
                </div>
            </Form>
        </div>
    )
}

export default Task;