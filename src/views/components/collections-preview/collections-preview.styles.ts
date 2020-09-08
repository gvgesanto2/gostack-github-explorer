import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;

  height: 16.3rem;
  height: 18.3rem;
  background: ${({ theme }) => theme.light_grey_color_1};
  border-radius: 5px;
  position: relative;
  padding: 0 4.5rem;

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
