import React, { useState } from 'react';
// import Getprice from './getprice.jsx'
import '../App.css'

import shoppingCart from "../assets/shoppingCart.png"
import bitcoinIcon from "../assets/bitcoinIcon.png"
import ethereumIcon from "../assets/ethereum.png"
import solanIcon from "../assets/solanaIcon.png"
import stellarIcon from "../assets/stellarIcon.png"
import PriceLog from './priceLog.jsx';


export default function Hero(){

  const [buyCryptobutton, setButton] = useState(bitcoinIcon);

  useState(() => {
    const toggleInterval = setInterval(() => {
      setButton(buttonImg => {
        if (buttonImg === bitcoinIcon) {
          return ethereumIcon;
        } else if (buttonImg === ethereumIcon) {
          return shoppingCart;
        } else {
          return bitcoinIcon;
        }
      });
    }, 2000);

    () => clearInterval(toggleInterval);
  }, []);
        

  return (
    <>

      <hero className="hero">

        <h1>Be early to the future of finance</h1>
        <p>Buy Bitcoin, Ethereum, and other leading cryptocurrencies on a platform trusted by millions.</p>
      
        <form>

          <input type="text" id="email" placeholder="Your email address" required></input>
          <button id="signup" onClick={(e) => 
            {
              e.preventDefault()
            }}>Sign Up
          </button>

        </form>

      </hero>

      <button className="buy-cryto-button"><img src = {buyCryptobutton} className='buy-cryto-button-img'></img></button>
      

      <PriceLog />
      
      {/* <div className='get-price'> */}
        
        {/* <Getprice 
         img = {bitcoinIcon}
          crypto = 'Bitcoin'
          price = '30 298.34'
          abrv = ' BTC'
          action = ' +0.08%'
        />

        <Getprice 
          img = {ethereumIcon}
          crypto = 'Ethereum'
          price = '1, 861.59'
          abrv = ' ETH'
          action = ' -0.34%'
        />

        <Getprice 
          img = {stellarIcon}
          crypto = 'Stellar'
          price = '0.10'
          abrv = ' XLM'
          action = ' -0.20%'
        />

        <Getprice 
          img = {solanIcon}
          crypto = 'Solana'
          price = '21.58'
          abrv = ' SOL '
          action = ' -1.69%'
        /> */}

      {/* </div> */}

    </>
  )
}

// function Price() {
//   const [bitcoinData, setBitcoinData] = useState(null);
//   const [solanaData, setSolanaData] = useState(null);

//   useEffect(() => {
//     fetchCryptoData();
//   }, []);

//   const fetchCryptoData = () => {
//     fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
//       .then(response => response.json())
//       .then(data => {
//         const bitcoin = data.find(coin => coin.id === 'bitcoin');
//         const solana = data.find(coin => coin.id === 'solana');

//         if (bitcoin) {
//           setBitcoinData(bitcoin);
//         } else {
//           console.log('Bitcoin data not found in the response');
//         }

//         if (solana) {
//           setSolanaData(solana);
//         } else {
//           console.log('Solana data not found in the response');
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       {bitcoinData && (
//         <GetPrice
//           img={bitcoinData.image}
//           crypto={bitcoinData.name}
//           price={bitcoinData.current_price}
//           abrv={bitcoinData.symbol}
//           action="Buy"
//         />
//       )}

//       {solanaData && (
//         <GetPrice
//           img={solanaData.image}
//           crypto={solanaData.name}
//           price={solanaData.current_price}
//           abrv={solanaData.symbol}
//           action="Trade"
//         />
//       )}
//     </div>
//   );
// }

// export default Price;





