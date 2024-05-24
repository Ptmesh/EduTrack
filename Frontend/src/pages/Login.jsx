import React from "react";
import styled from "styled-components";
import LoginForm from "../components/Common/Login/LoginForm";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const LoginPage = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Login = () => {
  return (
    <LoginContainer>
      <LoginPage>
        <LoginForm />
      </LoginPage>
    </LoginContainer>
  );
};

export default Login;
