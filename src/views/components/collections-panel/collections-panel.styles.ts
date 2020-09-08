import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  display: flex;

  height: 16.3rem;
  height: 62rem;
  background: ${({ theme }) => theme.light_grey_color_1};
  border-radius: 5px;
  position: relative;
  padding: 3rem 4.5rem 5rem;

  ul {
    display: grid;
    grid-template-columns: repeat(4, minmax(18rem, 1fr));
    grid-template-rows: repeat(4, minmax(12.3rem, max-content));
    grid-gap: 1.6rem;
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
    /* margin-right: 1.6rem; */
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

  .horizontalChevron {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 60%;
    /* color: ${({ theme }) => theme.light_color}; */
    color: #fff;
    background: ${({ theme }) => theme.dark_grey_color_1};
    padding: 0 0.2rem;

    &.chevronLeft {
      position: absolute;
      top: 50%;
      left: 0;

      transform: translate(calc(-50% + 0.1rem), -50%);
      border-radius: 6px 0 0 6px;
      /* margin-right: 2rem; */
    }

    &.chevronRight {
      border-radius: 0 6px 6px 0;

      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(calc(50% - 0.1rem), -50%);
    }
  }

  /* .verticalChevron {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60%;
    color: ${({
  theme,
}) => theme.light_color};
    background: ${({ theme }) =>
    theme.dark_grey_color_1};
    padding: 0.2rem 0;

    &.chevronDown {
      border-radius: 6px 6px 0 0;
      margin-top: auto;
    }
  } */
`;

export const CollectionItemEmpty = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.light_color};
  background: ${({ theme }) => theme.dark_color};
  /* background: #000; */
  border-radius: 6px;
  opacity: 0.5;

  span {
    font-style: italic;
    font-size: 1.4rem;
  }
`;
