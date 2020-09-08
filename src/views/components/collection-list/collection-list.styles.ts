import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.ul`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;
  overflow: hidden;

  & > li:not(:last-child) {
    margin-right: 1.6rem;
  }

  .addListItem {
    flex: 0 0 18rem;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 12.3rem;

    color: ${({ theme }) => theme.light_grey_color_1};
    color: #fff;
    background: ${({ theme }) => theme.primary_color};
    border-radius: 6px;
    padding: 1rem 2rem;
    margin-right: 1.6rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: ${({ theme }) => shade(0.2, theme.primary_color)};
    }

    svg {
      display: inline-block;
      width: 4rem;
      height: 4rem;
    }
  }
`;
