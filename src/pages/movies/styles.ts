import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles";

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  height: 100%;
  padding: 12rem 12rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 25px;
    margin-top: 69px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    margin: 0;
    padding: 43px;
  }
`;
