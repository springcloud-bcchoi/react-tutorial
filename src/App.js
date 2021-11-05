import Button from "./Button"
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function Hello() {
    useEffect(()=>{
        console.log("HELLO");
        return () => { console.log("BYE BYE")}
    }, [])
    return (
        <h1>Hello</h1>
    )
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((c) => !c)
    return (
        <div>
            {
                showing ? <Hello/> : null
            }
            <button onClick={onClick}>{showing ? "HIDE" : "SHOW"}</button>
        </div>
    )
}

export default App;
