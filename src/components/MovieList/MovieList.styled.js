import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 20px;
  padding-top: 20px;
`;

export const Item = styled.li`
  text-align: center;
`;

export const NavLink = styled(Link)`
  color: black;
  font-size: 16px;
  font-weight: 500;

  &:hover,
  &:focus {
    color: #2b96c8;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const ProgressBarContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 50px;
`;
