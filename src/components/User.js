/* eslint-disable array-callback-return */
import React from "react"
import Theme from './Theme/Theme'

import Card from "./Card"
import {listSelector,logoutUser} from '../store/reducers/usuarios'
import { UseAppDispatch,UseAppSelector } from "../store"
import './styleUser.css'
import { useNavigate } from "react-router"
const User = () => {
    const dispatch = UseAppDispatch()
    const navigate = useNavigate()
    const list = UseAppSelector(listSelector)
    const nameLogin = list.usuarios.filter((item) => item.islogged=== true)
    let teste = 0
    nameLogin.map((item,index)=> {
      if(item.islogged){
          teste = index
      }
    })


  const logout = () => {
      dispatch(logoutUser(false))
      navigate('/')
  }
   

   
    return(
       <Theme>
            <div className="telaDados">
               <Card title="Dados do usuário">
                <span>Nome: {nameLogin[teste]?.nome}</span>
               </Card>
               <Card title="Dados do usuário">
                
               </Card>
                
            </div>
            <button onClick={logout}>Sair</button>
       </Theme>
    )
}

export default User