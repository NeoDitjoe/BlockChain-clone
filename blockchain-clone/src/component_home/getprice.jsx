
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
            <p>{props.crypto }<span>{props.abrv}</span></p>

            <p className={acttionHighlight ? 'negative' : 'positive'}>${props.price}<span >{props.action}</span></p>
          </div>
  
        </div>
  
      </>
    );
  };