import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 86.5vh;
  background-color: #f2f2f2;
`;

const NavBar = styled.nav`
  width: 100%;
  background-color: #0077b6;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavButton = styled(Link)`
  background-color: #ffbf00;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin-right: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6ac00;
  }
`;

const Footer = styled.footer`
  width: 100%;
  background-color: #0077b6;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
`;

const LandingContent = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const LandingPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <NavBar>
        <h1>EduTrack</h1>
        <div>
          <NavButton to="/login">Login</NavButton>
          <NavButton to="/register">Register</NavButton>
        </div>
      </NavBar>
      <LandingContainer>
        <LandingContent>
          <h2>Welcome to EduTrack!</h2>
          <p>Your ultimate platform for managing student data.</p>
          {/* Add more content as needed */}
        </LandingContent>
      </LandingContainer>
      <Footer>
        <p>Created by Prathmesh Takalkar @ {currentYear}</p>
        <div>
          {/* Add social media icons or links here */}
          {/* Example: <FontAwesomeIcon icon={faTwitter} /> */}
        </div>
      </Footer>
    </>
  );
};

export default LandingPage;
