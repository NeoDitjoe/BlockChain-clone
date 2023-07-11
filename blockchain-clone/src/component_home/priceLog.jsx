import { useState, useEffect } from "react";
import GetPrice from './getprice.jsx';

export default function PriceLog() {
  const [bitcoinData, setBitcoinData] = useState(null)
  const [solanaData, setSolanaData] = useState(null)
  const [stellarData, setStellarData] = useState(null)
  const [ethereumData, setEthereumData] = useState(null)

  useEffect(() => {
   
    const interval = setInterval(fetchCrytoData, 10000);

    return () => clearInterval(interval);
  }, []);

  const fetchCrytoData = () => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then(response => response.json())
      .then(data => {
        const bitcoin = data.find(coin => coin.id === 'bitcoin')
        const solana = data.find(coin => coin.id === 'solana')
        const stellar = data.find(coin => coin.id === 'stellar')
        const ethereum = data.find(coin => coin.id === 'ethereum')

        if (bitcoin ){
          setBitcoinData(bitcoin);
        }
        if (solana){
          setSolanaData(solana);
        }
        if (stellar){
          setStellarData(stellar);
        }
        if (ethereum){
          setEthereumData(ethereum);
        }
      })
      .catch(error => {
        console.log(new error)
      })  
  } 
    
    
  return (
    
  <div className='get-price'>

    
    {bitcoinData && (
      <GetPrice
        img={bitcoinData.image}
        crypto={bitcoinData.name}
        price={bitcoinData.current_price}
        abrv={bitcoinData.symbol}
        action= {bitcoinData.price_change_percentage_24h}
      /> 
      
      )}

    {ethereumData && (  
      <GetPrice
        img={ethereumData.image}
        crypto={ethereumData.name}
        price={ethereumData.current_price}
        abrv={ethereumData.symbol}
        action={ethereumData.price_change_percentage_24h}
      /> )}

    {stellarData && (   
      <GetPrice
        img={stellarData.image}
        crypto={stellarData.name}
        price={stellarData.current_price}
        abrv={stellarData.symbol}
        action={stellarData.price_change_percentage_24h}
      /> )}

    {solanaData && (
        <GetPrice
        img={solanaData.image}
        crypto={solanaData.name}
        price={solanaData.current_price}
        abrv={solanaData.symbol}
        action= {solanaData.price_change_percentage_24h}
      /> )}
      
  </div>

    
  )

  }

