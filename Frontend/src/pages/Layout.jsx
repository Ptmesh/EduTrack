import React from "react";
import styled from "styled-components";
import Footer from "../components/Common/Segments/Footer";
import Nav from "../components/Common/Segments/Nav";
import SideBar from "../components/Common/Segments/Sidebar";

const LayoutContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const NavContainer = styled.div`
  background-color: #0a1128;
`;

const Content = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  background-color: #f2f2f2;
  padding: 2rem;
`;

const FooterContainer = styled.div`
  background-color: #0a1128;
  color: white;
  text-align: center;
  padding: 1rem;
  width: 100%;
  margin-top: auto;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <SideBar />
      <MainContent>
        <NavContainer>
          <Nav />
        </NavContainer>
        <Content>
          {children}
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </Content>
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;
