import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Coder from "../../../assets/coding.svg";
import Item from "./Item";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: #0a1128;
  height: 100vh;
  color: white;
  width: 20%;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    transform: ${({ show }) => (show ? "translateX(0)" : "translateX(-100%)")};
    width: 250px;
    z-index: 1000;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: white;
  background-color: #0077b6;
  height: 50px;
  border-radius: 0.25rem;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;

const MenuItems = styled.div`
  width: 100%;
  height: 60%;
  overflow-y: auto;
`;

const SVGContainer = styled.img`
  height: 120px;
  width: 100%;
`;
const ItemContainer = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const SideBar = () => {
  return (
    <Container>
      <LogoContainer>HappyPerformer</LogoContainer>
      <ItemContainer>
        <MenuItems>
          <Item name="Manage Users" icon="👥" />
          <Item name="Manage Courses" icon="📚" />
          <Item name="Manage Tests" icon="📝" />
          <Item name="Manage Grades" icon="🎓" />
          <Item name="Analytics" icon="📊" />
          <Item name="Settings" icon="⚙️" />
          <Item name="View Courses" icon="👀" />
          <Item name="Manage Assignments" icon="📝" />
          <Item name="Gradebook" icon="📊" />
          <Item name="Communication" icon="📧" />
          <Item name="Class Materials" icon="📎" />
          <Item name="My Courses" icon="📚" />
          <Item name="Assignments" icon="📝" />
          <Item name="Grades" icon="📊" />
          <Item name="Study Materials" icon="📖" />
          <Item name="Communication" icon="📧" />
          <Item name="Profile" icon="👤" />
        </MenuItems>
      </ItemContainer>
      <SVGContainer src={Coder} />
    </Container>
  );
};

export default SideBar;
