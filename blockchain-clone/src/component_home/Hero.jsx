import React, { useState } from 'react';
import shoppingCart from "../assets/shoppingCart.png"
import bitcoinIcon from "../assets/bitcoinIcoin.png"
import ethereum from "../assets/ethereum.png"



export default function Hero(){

    const [buyCryptobutton, setButton] = useState(bitcoinIcon);
    useState(() => {
      const toggleInterval = setInterval(() => {
        setButton(buttonImg => {
          if (buttonImg === bitcoinIcon) {
            return ethereum;
          } else if (buttonImg === ethereum) {
            return shoppingCart;
          } else {
            return bitcoinIcon;
          }
        });
      }, 2000);
  
      return () => clearInterval(toggleInterval);
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

        </>
    
    )
}