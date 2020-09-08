import styled from 'styled-components';

export const Title = styled.h1`
  max-width: 45rem;
  font-size: 4.8rem;
  color: ${({ theme }) => theme.dark_color};
  line-height: 5.6rem;
`;

export const RepoListsPreview = styled.section`
  display: flex;
  align-items: center;

  height: 16.3rem;
  background: ${({ theme }) => theme.light_grey_color_1};
  border-radius: 5px;
  position: relative;
  padding: 2rem 4.5rem;

  .horizontalChevron {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 60%;
    color: ${({ theme }) => theme.light_color};
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

export const RepoLists = styled.ul`
  display: flex;

  width: 100%;
  overflow: hidden;

  .addListItem {
    flex: 0 0 18rem;
    align-self: stretch;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.light_grey_color_1};
    color: #fff;
    background: ${({ theme }) => theme.dark_color};
    border-radius: 6px;
    padding: 1rem 2rem;
    margin-right: 1.6rem;

    &:hover {
      opacity: 0.8;
    }

    svg {
      display: inline-block;
      width: 4rem;
      height: 4rem;
    }
  }
`;

export const RepoListsItem = styled.li`
  flex: 0 0 18rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #fff;
  border-radius: 6px;
  padding: 1rem 2rem;

  &:not(:last-child) {
    margin-right: 1.6rem;
  }

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 6px;
    margin-bottom: 0.8rem;
  }

  h3 {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 1rem;
  }
`;
