import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1280px;
  padding: 0 40px;
  margin: 0 auto;
`;

export const Header = styled.header`
  border-bottom: 1px solid #204f9b;
  box-shadow: 2px 3px 4px #5a839e;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: white;
`;

export const HeaderContainer = styled.div`
  max-width: 1280px;
  padding: 0 40px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  margin-left: 60px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  padding: 30px 0;
  font-size: 16px;
  color: black;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #8fc0bc;
  }

  &.active {
    color: #5a839e;
  }
`;
