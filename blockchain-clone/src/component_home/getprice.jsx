import { useState, useEffect } from "react";

export default function Price(props){

    const acttionHighlight = parseFloat(props.action) < 0 ;

    return (
      <>
  
        <div className="price-div">
          <div className="img-buttons">
            <img src={props.img} className="price-img"></img>
            
            <div>
                <button>Buy</button>
                <button>Trade</button>
            </div>
          </div>
  
          <div>
            <p>{props.crypto }<span>{props.abrv.toUpperCase()}</span></p>

            <p >${props.price}<span className={acttionHighlight ? 'negative' : 'positive'}>{props.action}</span></p>
          </div>
  
        </div>
  
      </>
    );
  };