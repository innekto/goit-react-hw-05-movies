import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 20px;
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 1000ms, transform 500ms;
  position: absolute;
  top: 100px;
  left: 0;
  &.loaded {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const CastItem = styled.li`
  max-width: 180px;
`;
