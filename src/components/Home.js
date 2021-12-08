import React,{useState, useEffect} from "react"
import { useNavigate } from "react-router"
import Theme from './Theme/Theme'
import './stylesHome.css'
import {login,listSelector, addUser} from '../store/reducers/usuarios'
import {UseAppDispatch,UseAppSelector} from '../store/index'

const Home = () => {
    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [passwordInput,setPasswordInput] =useState('')

    const dispatch = UseAppDispatch()
    const list = UseAppSelector(listSelector)

   const handleLogin = () => {
       let contador = 0
       list.usuarios.map((item) => {
        
           if(item.nome === name && item.senha === passwordInput){
            dispatch(login({nome:name,senha:passwordInput,logado:true}))
            navigate('/page2')
            contador = 1
           }
       })
       if(contador === 0){
           alert(Error("Usuario ou senha invalido"))
       }    
    }
   

   const handleCadastro = () => {
       
       navigate('/page3')
   }
  
    return(
       <Theme>
            <div className="telaLogin">
                
                <label>
                    Nome:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                    ></input>
                </label>
                <label>
                    Senha:
                    <input 
                        type="password" 
                        value={passwordInput}
                        onChange={e => setPasswordInput(e.target.value)}
                    ></input>
                </label>
                
            </div>
            <div className="buttons">
            <button onClick={handleCadastro}>cadastre-se</button>
            <button onClick={handleLogin}>Login</button>
            </div>
            
       </Theme>
    )
}

export default Home
