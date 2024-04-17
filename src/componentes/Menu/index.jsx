import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import MenuLink from "./MenuLink";

const NavEstilizada = styled.header`
  height: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;
  @media (max-width: 744px) {
    height: 72px;
  }
`;

function Menu() {
  return (
    <header>
      <NavEstilizada>
        <MenuLink to="/">Inicio</MenuLink>
        <MenuLink to="/sobremim">Sobre mim</MenuLink>
      </NavEstilizada>
    </header>
  );
}

export default Menu;
