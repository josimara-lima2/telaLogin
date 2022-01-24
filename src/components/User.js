/* eslint-disable array-callback-return */
import React from "react";

import { listSelector, logoutUser } from "../store/reducers/usuarios";
import { UseAppDispatch, UseAppSelector } from "../store";

import { useNavigate } from "react-router";
const User = () => {
  const dispatch = UseAppDispatch();
  const navigate = useNavigate();
  const list = UseAppSelector(listSelector);
  const nameLogin = list.usuarios.filter((item) => item.islogged === true);
  let teste = 0;
  nameLogin.map((item, index) => {
    if (item.islogged) {
      teste = index;
    }
  });

  const logout = () => {
    dispatch(logoutUser(false));
    navigate("/login");
  };

  return (
    <>
      <div className="telaDados">Tela em construção</div>
      <button onClick={logout}>Sair</button>
    </>
  );
};

export default User;
