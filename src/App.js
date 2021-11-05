import Button from "./Button"
import styles from "./App.module.css";
import {useState, useEffect} from "react";


function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([])
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then(r => r.json())
            .then((j) => {
                setCoins(j);
                setLoading(false);
            });
    }, [])
    return (<div>
        <h1>The Coins! {loading ? "" : `${coins.length}`}</h1>
        {loading ? <strong>Loading...</strong> :
            <lu>

                {coins.map((coin, idx) => (
                    <li key={idx}>
                        {coin.name} - {coin.symbol}: ${coin.quotes.USD.price}
                    </li>))}

            </lu>
        }

    </div>)
}

export default App;
