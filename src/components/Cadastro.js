/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { addUser, listSelector, login } from "../store/reducers/usuarios";
import { Link } from "react-router-dom";
import { UseAppSelector, UseAppDispatch } from "../store/index";

const Cadastro = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordVerificaInput, setPasswordVerificaInput] = useState("");

  const dispatch = UseAppDispatch();
  const list = UseAppSelector(listSelector);

  const handleCadastro = () => {
    if (
      name !== "" &&
      emailInput !== "" &&
      passwordInput !== "" &&
      passwordInput === passwordVerificaInput
    ) {
      dispatch(
        addUser({
          nome: name,
          email: emailInput,
          password: passwordInput,
          islogged: false,
        })
      );

      navigate("/login");
      alert("Cadastrado com sucesso");
    }
  };

  return (
    <>
      <div className="telaLogin">
        <label>
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <label>
          Email:
          <input
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          ></input>
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          ></input>
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={passwordVerificaInput}
            placeholder="Digite novamente"
            onChange={(e) => setPasswordVerificaInput(e.target.value)}
          ></input>
        </label>
      </div>
      <div className="buttons">
        <Link to="/login">voltar</Link>
        <button onClick={handleCadastro}>cadastre-se</button>
      </div>
    </>
  );
};
export default Cadastro;
