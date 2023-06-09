import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-top: 20px;
`;

export const Container = styled.div`
  display: flex;
  gap: 30px;
`;

export const PageLink = styled(Link)`
  width: 100px;
  text-align: center;
  color: black;
  padding: 4px 8px;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #2b96c8;
  }
`;
export const infoImage = styled.img`
  width: 400px;
`;
export const InfoContainer = styled.div`
  position: relative;
`;
