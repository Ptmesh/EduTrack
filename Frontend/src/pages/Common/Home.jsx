import React from "react";
import styled from "styled-components";
import Layout from "../Layout";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(
    100vh - 120px
  ); /* Adjust based on your header and footer height */
  background-color: #f2f2f2;
  padding: 2rem;
`;

const Content = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const Home = () => {
  return (
    <Layout>
      <HomeContainer>
        <h1>Welcome to EduTrack!</h1>
        <Content>
          {/* Add your content here */}
          <p>This is the homepage content.</p>
        </Content>
      </HomeContainer>
    </Layout>
  );
};

export default Home;
