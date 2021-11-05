import Button from "./Button"
import styles from "./App.module.css";
import {useState, useEffect} from "react";


function App() {
    const [toDo, setTodo] = useState("");
    const [toDos, setTodos] = useState([])
    const onChange = (event) => setTodo(event.target.value)
    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === ""){
            return;
        }
        setTodos((p) => [toDo, ...p])
        setTodo("");
    }
    return <div>
        <h1>My To Dos ({toDos.length})</h1>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value={toDo} type={"text"} placeholder={"Write your to do..."}/>
            <button>Add To Do</button>
        </form>
        <hr/>
        {toDos.map((item, idx)=>(<li key={idx}>{item}</li>))}
    </div>
}

export default App;
