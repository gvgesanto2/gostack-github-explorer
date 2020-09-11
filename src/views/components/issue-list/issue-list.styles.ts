import styled from 'styled-components';

export const Container = styled.ul`
  width: 100%;

  & > *:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;
