import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useFetch } from '../../hooks/useFetch';


function MainPage() {

    const { data: items, loading, error, postTodo, updateTodo, deleteTodo } = useFetch();
    const [description, setDescription] = useState("");
    const [editedItem, setEditedItem] = useState(null);

    const addTodo = async () => {
        const todo = {
            description
        }
        postTodo(todo);
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        if (editedItem === null) {
            await addTodo();
        } else {
            await editTodo(editedItem);
        }

        setDescription("");
        setEditedItem(null);
    }

    const removeTodoHandler = async (id) => {
        deleteTodo(id);
    }

    const editTodoHandler = (item) => {
        setEditedItem(item);
        setDescription(item.description);
    }

    const editTodo = async (item) => {

        const todo = {
            id: item.id,
            description
        }
        updateTodo(item.id, todo);
    }

    return (
        <div className="App">
            <h1>To do list:</h1>
            {loading && <p>Loading data...</p>}
            {error && <p>{error}</p>}
            <div className='div-add-todo'>
                <form onSubmit={submitHandler}>
                    <label>Todo:<input type="text" onChange={(e) => setDescription(e.target.value)} value={description}></input></label>
                    {loading ? <p>Aguarde!</p> : <input type="submit" value="Create" />}
                </form>
            </div>
            <div class="card" style={{ width: "18rem" }}>
                <ul class="list-group list-group-flush">
                    {items && items.map((item) => (
                        <li class="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                            {item.description}
                            <Button variant="warning" size="sm" onClick={() => editTodoHandler(item)}>Edit</Button>
                            <Button variant="danger" size="sm" onClick={() => removeTodoHandler(item.id)}>Delete</Button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MainPage;
