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


    </>
  )
}




