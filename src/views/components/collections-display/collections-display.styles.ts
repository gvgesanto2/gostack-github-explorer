import styled from 'styled-components';

export const Options = styled.ul`
  display: flex;

  & > li:first-child {
    margin-left: 2rem;
  }

  & > li:not(:last-child) {
    margin-right: 2rem;
  }

  li {
    font-size: 2.2rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.light_color};
    background: ${({ theme }) => theme.dark_grey_color_1};
    border-radius: 6px 6px 0 0;
    opacity: 0.4;
    padding: 1rem 2.5rem;

    &:hover,
    &:focus,
    &.active {
      color: #fff;
      opacity: 1;
    }
  }
`;
