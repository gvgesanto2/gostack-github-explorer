import styled from 'styled-components';

export const AppLayout = styled.div`
  /* width: 100%; */
  /* max-width: 144rem; */
  /* max-width: 102.4rem */
  /* padding: 0 3rem 4rem; */
  /* margin: 0 auto; */
  margin-left: ${({ theme }) => theme.sidebar_width}rem;
  margin-top: calc(8rem + ${({ theme }) => theme.header_height}rem);
  /* margin: 0 calc(12rem + 31.65rem); */

  @media only screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0;
  }
`;

export const AppContent = styled.div`
  max-width: 96rem;
  width: 100%;
  padding-bottom: 4rem;
  margin: 0 auto;

  @media only screen and (max-width: 1400px) {
    max-width: 71.5rem;
  }

  @media only screen and (max-width: 950px) {
    /* width: 100%; */
    margin: 8rem auto;
    padding: 0 3rem 4rem;
  }
`;
