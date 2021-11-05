import Button from "./Button"
import styles from "./App.module.css";
import {useState, useEffect} from "react";


function App() {
    const [count, setCount] = useState(0);
    const onClick = () => setCount((c) => c + 1)
    console.log("1")
    const iRun = () => {
        console.log("0");
    }
    useEffect(iRun, [])
    return (
        <div>

            <h1 className={styles.title}>{count}</h1>
            <button onClick={onClick}>Click me!</button>

        </div>
    );
}

export default App;
