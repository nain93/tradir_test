import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import beerLogo from "../img/beer-icon.png";

const Home = () => {
  return (
    <Container>
      <section>
        <TitleWrap>
          <img src={beerLogo} alt="beer-logo" style={{ width: 200 }} />
          <Title>
            Beer <br /> Factory
          </Title>
        </TitleWrap>

        <LinkWrap>
          <NavLink to="/beerlist">맥주 목록</NavLink>
          <NavLink to="/beercart">맥주 카트</NavLink>
        </LinkWrap>
      </section>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleWrap = styled.article`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 60px;
  margin: 0 10px;
`;

const LinkWrap = styled.article`
  text-align: center;
`;

const NavLink = styled(Link)`
  margin: 0 20px;
  color: white;
  font-weight: 700;
  background-color: black;
  padding: 20px 30px;
  border-radius: 10px;
`;

export default Home;
