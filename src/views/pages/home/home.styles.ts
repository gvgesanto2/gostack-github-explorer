import styled from 'styled-components';

export const Title = styled.h1`
  max-width: 45rem;
  font-size: 4.8rem;
  color: ${({ theme }) => theme.dark_color};
  line-height: 5.6rem;
`;

export const Error = styled.div`
  color: ${({ theme }) => theme.error_color};
`;
