import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles";

export const Container = styled.div`
  max-width: 93vw;
  flex: none;
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 100vw;
  }

  .reactIconLeft {
    padding-right: 84px;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      padding-right: 35px;
    }
    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      display: none;
    }
  }

  .reactIconRight {
    padding-left: 84px;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      padding: 20px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      display: none;
    }
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 89px;

  .buttons {
    button {
      background: none;
      border: none;
      cursor: pointer;
      color: white;
      width: 2rem;
      height: 29.5rem;
      z-index: 2;
    }
  }
`;
