import { useState, useEffect } from "react";
import GetPrice from './getprice.jsx';

export default function PriceLog() {
  const [bitcoinData, setBitcoinData] = useState(null)
  const [solanaData, setSolanaData] = useState(null)
  const [stellarData, setStellarData] = useState(null)
  const [ethereumData, setEthereumData] = useState(null)

  useEffect(() => {
    fetchCrytoData();
  }, []);

  const fetchCrytoData = () => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then(response => response.json())
      .then(data => {
        const bitcoin = data.find(coin => coin.id === 'bitcoin')
        const solana = data.find(coin => coin.id === 'solana')
        const stellar = data.find(coin => coin.id === 'stellar')
        const ethereum = data.find(coin => coin.id === 'ethereum')

        if (bitcoin){
          setBitcoinData(bitcoin);
        }
        if (solana){
          setBitcoinData(solana);
        }
        // if (stellar){
        //   setBitcoinData(stellar);
        // }
        // if (ethereum){
        //   setBitcoinData(ethereum);
        // }
      })
      .catch(error => {
        alert(error)
      })  
  } 
    
    
    return (
      
      <div className='get-price'>

        {solanaData && (
            <GetPrice
            img={solanaData.image}
            crypto={solanaData.name}
            price={solanaData.current_price}
            abrv={solanaData.symbol}
            action="-0.43"
          /> )}

        {bitcoinData && (
          <GetPrice
            img={bitcoinData.image}
            crypto={bitcoinData.name}
            price={bitcoinData.current_price}
            abrv={bitcoinData.symbol}
            action="-0.43"
          />

          // <GetPrice
          //   img={solanaData.image}
          //   crypto={solanaData.name}
          //   price={solanaData.current_price}
          //   abrv={solanaData.symbol}
          //   action="-0.43"
          // />

          // <GetPrice
          //   img={ethereumData.image}
          //   crypto={ethereumData.name}
          //   price={ethereumData.current_price}
          //   abrv={ethereumData.symbol}
          //   action="-0.43"
          // />

          // <GetPrice
          //   img={stellarData.image}
          //   crypto={stellarData.name}
          //   price={stellarData.current_price}
          //   abrv={stellarData.symbol}
          //   action="-0.43"
          // />

        )}
      </div>

      
    )

  }