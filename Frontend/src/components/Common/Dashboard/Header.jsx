import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../../context/AuthContext";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center vertically */
  background-color: #0a1128;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const SearchBar = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  background-color: #1a2342;
  color: #fff;
  margin-right: 1rem;

  &::placeholder {
    color: #7a89b3;
  }
`;

const NotificationIcon = styled.div`
  background-color: #3f51b5;
  color: #fff;
  padding: 0.5rem;
  border-radius: 50%;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 1rem;

  &:hover {
    background-color: #5c6bc0;
  }
`;

const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  background-color: #f44336;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e53935;
  }
`;

const WelcomeMessage = styled.div`
  color: #fff;
  margin-right: 1rem;
  font-size: 1rem;
`;

const Nav = () => {
  const navigate = useNavigate();
  const { logout, isAuthenticated, username } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Container>
      <RightContainer>
        <SearchBar placeholder="Search..." />
        <NotificationIcon>Icon</NotificationIcon>
        {isAuthenticated && (
          <WelcomeMessage>Welcome, {username}!</WelcomeMessage>
        )}
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </RightContainer>
    </Container>
  );
};

export default Nav;
