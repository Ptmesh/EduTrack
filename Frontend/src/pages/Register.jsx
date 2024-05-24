import React from "react";
import styled from "styled-components";
import RegisterForm from "../components/Common/Register/RegisterForm";

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const RegisterPage = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Register = () => {
  return (
    <RegisterContainer>
      <RegisterPage>
        <RegisterForm />
      </RegisterPage>
    </RegisterContainer>
  );
};

export default Register;
