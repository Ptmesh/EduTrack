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
  color: white;
  width: 20%;
  overflow-y: auto;
  transition: transform 0.3s ease-in-out;
  height: 100vh;
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
  overflow-y: auto;
  height: 60%;
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

  &.active {
    background-color: #0077b6;
  }
`;

const SideBar = () => {
  const { role } = useAuth();

  const getMenuItems = () => {
    if (role === "admin") {
      return (
        <>
          <ItemContainer to="/manage-users">
            <Item name="Manage Users" icon="👥" />
          </ItemContainer>
          <ItemContainer to="/manage-course">
            <Item name="Manage Courses" icon="📚" />
          </ItemContainer>
          <ItemContainer to="/manage-test">
            <Item name="Manage Tests" icon="📝" />
          </ItemContainer>
          <ItemContainer to="/grades">
            <Item name="Manage Grades" icon="🎓" />
          </ItemContainer>
          <ItemContainer to="/analytics">
            <Item name="Analytics" icon="📊" />
          </ItemContainer>
          <ItemContainer to="/settings">
            <Item name="Settings" icon="⚙️" />
          </ItemContainer>
        </>
      );
    } else if (role === "teacher") {
      return (
        <>
          <ItemContainer to="/view-courses">
            <Item name="View Courses" icon="👀" />
          </ItemContainer>
          <ItemContainer to="/manage-assignments">
            <Item name="Manage Assignments" icon="📝" />
          </ItemContainer>
          <ItemContainer to="/gradebook">
            <Item name="Gradebook" icon="📊" />
          </ItemContainer>
          <ItemContainer to="/communication">
            <Item name="Communication" icon="📧" />
          </ItemContainer>
          <ItemContainer to="/class-materials">
            <Item name="Class Materials" icon="📎" />
          </ItemContainer>
        </>
      );
    } else if (role === "student") {
      return (
        <>
          <ItemContainer to="/mycourses">
            <Item name="My Courses" icon="📚" />
          </ItemContainer>
          <ItemContainer to="/assignments">
            <Item name="Assignments" icon="📝" />
          </ItemContainer>
          <ItemContainer to="/grades">
            <Item name="Grades" icon="📊" />
          </ItemContainer>
          <ItemContainer to="/study-materials">
            <Item name="Study Materials" icon="📖" />
          </ItemContainer>
          <ItemContainer to="/profile">
            <Item name="Profile" icon="👤" />
          </ItemContainer>
        </>
      );
    }
  };

  return (
    <Container>
      <LogoContainer>HappyPerformer</LogoContainer>
      <MenuItems>{getMenuItems()}</MenuItems>
      <SVGContainer src={Coder} />
    </Container>
  );
};

export default SideBar;
