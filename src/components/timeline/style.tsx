import styled from "styled-components";
import { colors } from "../../style/global";

const getTemplate = (count: number) =>
  [...Array(count).keys()]
    .map((i) => {
      i++;
      if (i === 1) {
        //first
        return `. card${i}`;
      }
      if (i % 2 === 0) {
        ///even
        return `card${i} card${i - 1}"
    "card${i} .`;
      }
      //odd
      return `card${i - 1} card${i}"
    ". card${i}`;
    })
    .join('"\n"');

export const TimelineContainer = styled.div<{ count: number }>`
  line-height: 1.5em;
  font-size: 14px;
  transition: all 0.4s ease;
  position: relative;
  counter-reset: section;
  gap: 0.75rem;
  display: flex;
  flex-direction: column;

  &:before {
    content: "";
    width: 10px;
    height: 100%;
    background: ${colors.primary};
    position: absolute;
    top: 0;
    left: -3.313rem;
    border-radius: 40px 40px;
  }

  @media (min-width: 768px) {
    display: grid;
    row-gap: 2.25rem;
    column-gap: 4.75em;
    grid-auto-columns: 1fr 1fr;
    grid-template-areas: ${({ count }) => `"${getTemplate(count)}"`};

    &:before {
      left: 49.5%;
    }
  }
`;

export const Dl = styled.dl<{ index?: number }>`
  position: relative;
  margin: 0px;

  .title {
    border-radius: 10px 10px 0 0;
    color: white;
    background-color: ${colors.primary};
    font-weight: 300;
    font-size: 1rem;
    padding: 1rem;
  }

  .detail {
    background-color: #fff;
    color: ${colors.textcolor};
    padding: 1rem;
    margin: 0;
    border-radius: 0 0 10px 10px;
  }

  @media (min-width: 768px) {
    ${({ index }) =>
      index &&
      ` &:nth-child(${index}) {
        grid-area: card${index};
      }`}
    &:before {
      content: "";
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5rem;
      height: 1.5rem;
      background-color: ${colors.primary};
      border: 0.1rem solid white;
      border-radius: 50%;
      position: absolute;
      left: -4.5rem;
      top: 1rem;
    }

    .title {
      &:before {
        content: "";
        display: inline-block;
        width: 1em;
        height: 1em;
        position: absolute;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        left: -1em;
        border-right: 10px solid ${colors.primary};
      }
    }

    :nth-of-type(odd):before {
      left: -2.725rem;
    }

    :nth-of-type(even):before {
      left: calc(100% + 1.475rem);
    }

    :nth-of-type(even) .title:before {
      left: 100%;
      border-left: 10px solid ${colors.primary};
      border-right: 0;
    }
  }
`;
