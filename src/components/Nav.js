import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Home, ShoppingCart } from "@material-ui/icons";

function Nav() {
  return (
    <Container>
      <NavWrap>
        <Link to="/home">
          <Home fontSize="large" style={{ color: "white" }} />
        </Link>
        <Link to="/beercart">
          <ShoppingCart fontSize="large" style={{ color: "white" }} />
        </Link>
      </NavWrap>
    </Container>
  );
}

const Container = styled.nav`
  position: fixed;
  width: 100%;
  padding: 20px;
  background-color: black;
  top: 0;
  left: 0;
`;

const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Nav;
