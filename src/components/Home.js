import React from "react"
import { useNavigate } from "react-router"
import Theme from './Theme/Theme'
const Home = () => {
   const navigate = useNavigate()

   const handleLogin = () => {
       navigate('/page2')
   }
    
    return(
       <Theme>
            <div>
                <label>
                    Nome:
                    <input type="text" value={''}></input>
                </label>
                <label>
                    Senha:
                    <input type="password" value={''}></input>
                </label>
                
            </div>
            <div>
            <button>cadastre-se</button>
            <button onClick={handleLogin}>Login</button>
            </div>
            
       </Theme>
    )
}

export default Home