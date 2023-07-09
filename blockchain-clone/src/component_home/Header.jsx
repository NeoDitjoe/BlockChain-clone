import { useState } from 'react'
import logoShop from "../assets/logo.png"
import searchIcon from "../assets/searchIcon.png"
import Top from './Top.jsx'
import './home.css'


export default function Navbar(){

    const [show, any] = useState(true)
    return (
        <div className="header">
             {
                show?<Top/>:null
             }
                <nav>
                    
                        
                    
                        <a href="https://www.blockchain.com/" target="_blank" className='logo-and-name'  onClick={(e) => {e.preventDefault(), any(true) } }>

                            <img src={logoShop} className="logo" alt="Vite logo"/>

                            <h2 className='web-name'>Blockchain<span className='com'>.com</span> </h2>

                        </a>
                    

                    <div>
                        <ul className='nav-list'> 
                            <li onClick={() => any(false)}>App</li>
                            <li>Exchange</li>
                            <li>Explorer</li>
                            <li>Pay</li>
                            <li>Institutional</li>
                            <li>...</li>
                        </ul>
                    </div>

                    <div className='log-sign-search'>
                        <img src={searchIcon} alt='search' className='searchIcon'></img>
                        <button>Log In</button>
                        <button>Sign Up</button>
                    </div>
                </nav>
        </div>
    )
}

function HandleClick(props){
   
}



