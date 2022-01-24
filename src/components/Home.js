import React, { useState } from "react";
import { useNavigate } from "react-router";

import { login, listSelector } from "../store/reducers/usuarios";
import { UseAppDispatch, UseAppSelector } from "../store/index";
import Header from "./TelaLogin";

import { Box, Typography } from "@mui/material";
import dorama2 from "../assets/images/dorama2.jpg";
import { Button, TextField, useTheme } from "@mui/material";
import { Link } from "@mui/material";
import { useLocation } from "react-router-dom";
import Cadastro from "./Cadastro";
import { addUser } from "../store/reducers/usuarios";
const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const theme = useTheme();
  const dispatch = UseAppDispatch();
  const list = UseAppSelector(listSelector);
  const location = useLocation();

  const [emailInput, setEmailInput] = useState("");
  const [passwordVerificaInput, setPasswordVerificaInput] = useState("");

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

  const handleLogin = () => {
    let contador = 0;

    // eslint-disable-next-line array-callback-return
    list.usuarios.map((item) => {
      if (item.nome === name && item.senha === passwordInput) {
        dispatch(login({ nome: name, senha: passwordInput, logado: true }));
        navigate("/home");
        contador = 1;
      }
    });
    if (contador === 0) {
      alert(Error("Usuario ou senha invalido"));
    }
  };

  console.log(list);
  const handleCadastroLink = () => {
    navigate("/cadastro");
  };
  const handleLoginLink = () => {
    navigate("/login");
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          top: "0px",
          left: "0px",
          backgroundColor: "#a05832cc",
          [theme.breakpoints.down("md")]: {
            position: "absolute",
          },
        }}
      >
        <Box
          sx={{
            opacity: 1,
            [theme.breakpoints.down("md")]: {
              opacity: 0,
            },
          }}
        >
          <img
            style={{
              height: "100vh",
              width: "100vw",
            }}
            src={dorama2}
            alt="dorama"
          />
        </Box>
        {location.pathname !== "/cadastro" && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fafafacc",
              width: "400px",
              height: "500px",
              borderRadius: "25px",
              zIndex: 1,
              position: "absolute",
              top: "30%",
              left: "38%",

              [theme.breakpoints.down("md")]: {
                width: "400px",
                top: "35%",
                left: "30%",
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontFamily: "Spectral, serif", color: "#a05832" }}
            >
              Login
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ marginLeft: "15px", color: "#a05832", marginTop: "15px" }}
            >
              O apaixonante mundo dos doramas
            </Typography>
            <TextField
              label="nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                height: "40px",
                width: "75%",
                margin: "25px 0",
                border: "1px solid #fafafa",
              }}
            />
            <TextField
              label="password"
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              sx={{
                height: "40px",
                width: "75%",
                margin: "25px 0",
              }}
            />

            <Button
              sx={{
                color: "#fafafa",
                backgroundColor: "#a05832",
                width: "75%",
                marginBottom: "10px",
                marginTop: "20px",
                "&.MuiButton-root:hover": {
                  backgroundColor: "#a05832cc",
                },
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Link
              sx={{ color: "#a05832", cursor: "pointer" }}
              onClick={handleCadastroLink}
            >
              cadastre-se
            </Link>
          </Box>
        )}
        {location.pathname === "/cadastro" && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fafafacc",
              width: "400px",
              height: "500px",
              borderRadius: "25px",
              zIndex: 1,
              position: "absolute",
              top: "30%",
              left: "38%",

              [theme.breakpoints.down("md")]: {
                width: "400px",
                top: "35%",
                left: "30%",
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontFamily: "Spectral, serif", color: "#a05832" }}
            >
              Cadastre-se
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ marginLeft: "15px", color: "#a05832", marginTop: "15px" }}
            >
              O apaixonante mundo dos doramas
            </Typography>
            <TextField
              label="nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                height: "40px",
                width: "75%",
                margin: "15px 0",
                border: "1px solid #fafafa",
              }}
            />

            <TextField
              label="email"
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              sx={{
                height: "40px",
                width: "75%",
                margin: "15px 0",
                border: "1px solid #fafafa",
              }}
            />
            <TextField
              label="password"
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              sx={{
                height: "40px",
                width: "75%",
                margin: "15px 0",
                border: "1px solid #fafafa",
              }}
            />
            <TextField
              label="Digite novamente"
              type="password"
              value={passwordVerificaInput}
              onChange={(e) => setPasswordVerificaInput(e.target.value)}
              sx={{
                height: "40px",
                width: "75%",
                margin: "15px 0",
                border: "1px solid #fafafa",
              }}
            />
            <Button
              onClick={handleCadastro}
              sx={{
                color: "#fafafa",
                backgroundColor: "#a05832",
                width: "75%",
                marginBottom: "10px",
                marginTop: "20px",
                "&.MuiButton-root:hover": {
                  backgroundColor: "#a05832cc",
                },
              }}
            >
              cadastre-se
            </Button>
            <Link
              style={{ color: "#a05832cc", cursor: "pointer" }}
              onClick={handleLoginLink}
            >
              voltar
            </Link>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Home;
