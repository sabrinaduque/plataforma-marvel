import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles"

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  height: 114px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding: 0 10rem;
  filter: drop-shadow(0px 3px 3px rgba(255, 0, 0, 0.53));
  list-style-type: none;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 2.5rem;
    height: 80px;
  }
`

export const Logo = styled.div`
  font-family: 'Arial Black', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  height: 55px;
  background-color: ${({ theme }) => theme.COLORS.RED};
  letter-spacing: -5px;
  padding-right: 7px;
  margin-right: 15vw;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 40px;
    height: 45px;
  }
`

export const NavItems = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  .items {
    padding: 0 5px;
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: bold;
    font-size: 20px;

    &:hover {
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }

  .item-active {
    color: ${({ theme }) => theme.COLORS.RED};
  }
`

export const Dropdown = styled.div`
  position: relative;
`

export const DropdownIcon = styled.div`
  width: 25px;
  height: 3px;
  background-color: #FFF;
  margin: 5px 0;
  transition: transform 0.3s, opacity 0.3s;
`

export const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  background-color: #333;
  filter: drop-shadow(0px 3px 3px rgba(255, 0, 0, 0.53));
  z-index: 1;
  top: 100%;
  right: 0;
`

export const DropdownItem = styled.li`
  display: block;
`

export const DropdownLink = styled.div`
  padding: 12px 16px;
  color: white;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #111;
  }

  .item-active {
    color: ${({ theme }) => theme.COLORS.RED};
    font-weight: bold;
  }
`

export const DropdownWrapper = styled.div`
  &:hover ${DropdownMenu} {
    display: block;
  }

  &:hover ${DropdownIcon} {
    transform: rotate(90deg);
  }
`
