import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles";

export const CardsWrapper = styled.div`
  display: flex;
  gap: 84px;
  position: relative;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;

`;

export const SortSelect = styled.select`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #000;
  border: 1px solid red;
  font-size: 16px;
  color: red;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  option {
    background-color: #000;
    color: red;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 5;
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  z-index: 0;

  .infos {
    display: flex;
    position: absolute;
    top: 331px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    height: 217px;
    width: 289px;
    border-radius: 30px;
    background: linear-gradient(180deg, #ff0000 0%, rgba(128, 0, 0, 0.3) 100%);
    transform: translateY(-50%);

    .title {
      flex-grow: 0;
      font-size: 20px;
      font-weight: bold;
      color: #ffffff;
    }

    .description {
      flex-grow: 1;
      padding-top: 12px;
      font-size: 12px;
      line-height: 20px;
      font-style: normal;
      text-align: left;
      color: #ffffff;
    }

    .section-buttons {
      flex-grow: 0;
      button {
        font-size: 20px;
        color: #ffffff;
        background: none;
        border: none;
      }
    }
  }

  &.expanded {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 25%;

    .title {
      padding: 0 11px 11px 0;
    }

    .more-info{
      flex-grow: 1;
      font-size: 12px;
    }

    .heroImage {
      position: absolute;
      left: 0px;
      top: 236px;
      z-index: 1;
    }

    .infos {
      padding: 33px 25px 0 78px;
      top: 454px;
      left: 57%;
      display: flex;
      position: relative;
      width: 410px;
      height: 438px;
      background: linear-gradient(90deg, #ff0000 0%, #400e0e 100%);
      align-items: flex-start;
      font-size: 18px;

      .appearances {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 3px;
      }

      .label-appearances {
        display: flex;
        text-align: left;
        font-weight: bold;
      }

      .description {
        display: none;
      }

      .title {
        flex-grow: 0;
        margin-bottom: 11px;
        font-size: 30px;
      }

      .appears {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
      }

      .classification {
        flex-grow: 0;
        height: fit-content;
        font-size: 26px;
      }

      .streaming{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 0;
        gap: 5px;
        font-size: 12px;
      }

      .section-buttons {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding: 0 10px 25px 0;

        .closeButton {
          font-size: 20px;
          color: #ffffff;
          background: none;
          border: none;
          cursor: pointer;
        }
      }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      position: relative;
      left: 0;
      .heroImage {
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 1;
      }
      .infos {
        top: 48%;
        left: 0;
        z-index: 2;
        padding: 25px;
        width: 289px;
        background: linear-gradient(
          180deg,
          #ff0000 -42%,
          rgba(128, 0, 0, 0.3) 100%
        );
        transform: translateY(-50%);
        display: flex;
        align-items: flex-start;
        justify-content: center;
        font-size: 16px;

        .title {
          flex-grow: 0;
          font-size: 25px;
          margin-bottom: 11px;
        }

        .section-buttons {
          padding: 0;
          flex-grow: 0;
        }

        .appears {
          flex-grow: 1;
          span {
            width: fit-content;
            height: fit-content;
          }
        }
      }
    }
  }
`;
