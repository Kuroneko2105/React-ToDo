import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function Task() 
{
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

    function toggleTask(id)
    {
        const updatedTasks = tasks.map(task => {
            if(task.id === id)
            {
                return {
                    ...task,
                    completed: !task.completed
                };
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    function addTask(event)
    {
        event.preventDefault();
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
        <div className="d-flex justify-content-center">
            <Form onSubmit={addTask}>
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