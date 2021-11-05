import Button from "./Button"
import styles from "./App.module.css";
import {useState, useEffect} from "react";


function App() {
    const [count, setCount] = useState(0);
    const [keyWord, setKeyWord] = useState("");
    const onClick = () => setCount((c) => c + 1)
    console.log("i run all the time")
    const iRun = () => {
        console.log("CALL THE API...");
    }
    const onChange = (event) => {
        setKeyWord(event.target.value);
    }
    useEffect(iRun, [])
    useEffect(()=>{
        if(keyWord !== "" && keyWord.length > 5) {
            console.log("SEARCH FOR", keyWord);
        }
    }, [keyWord] )
    return (
        <div>
            <input value={keyWord} onChange={onChange} type={"text"} placeholder={"Search for ..."}/>
            <h1 className={styles.title}>{count}</h1>
            <button onClick={onClick}>Click me!</button>

        </div>
    );
}

export default App;
