import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles"

export const Container = styled.div`
  width: 100%;
  margin-top: 8rem;
  padding: 0 4.7rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 50%;
    display: flex;
    align-items: center;
  }
`

export const Form = styled.form`
  max-width: 380px;
  margin: 30px auto 0;

  .header-form {
    padding: 20px 0;
    color: ${({ theme }) => theme.COLORS.RED};
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }

  .label-access {
    color: #84848D;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 10px;
  }

  .inputs {
    margin: 10px 0;
    width: 380px;
    height: 72px;
    padding: 10px 20px;
    border: 3px solid #FFF;
    border-radius: 50px;
    outline: none;
    transition: border-color 0.3s, box-shadow 0.3s;
    font-size: 16px;
    box-sizing: border-box;
  }

  .inputs:focus {
    border: solid 3px;
    border-color: rgba(255, 0, 0, 1);
  }

  .inputs::placeholder {
    color: #AAA;
  }

  .btn-enter {
    margin-top: 10px;
    width: 380px;
    height: 64px;
    background-color: ${({ theme }) => theme.COLORS.RED};
    color: white;
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    font-size: 28px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .btn-enter:hover {
    opacity: 0.7;
  }

  .footer-form {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 28px;
    color: #84848D;
    font-size: 16px;
  }

  .btn-register {
    cursor: pointer;
    padding-left: 5px;
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .btn-register:hover {
    color: #FFF;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    .header-form {
      padding: 20px 0;
      font-size: 25px;
    }

    .inputs {
      width: 100%;
      height: 48px;
    }

    .btn-enter {
      width: 100%;
      height: 42px;
      font-size: 18px;
    }
  }
`

export const Logo = styled.div`
  position: relative;
  padding-bottom: 24px;

  .label-logo {
    position: relative;
    display: flex;
    justify-content: center;
    font-size: 75px;
    padding-top: 6px;
    padding-left: 14px;
  }

  .square-logo {
    position: absolute;
    width: 177px;
    height: 72px;
    left: 30px;
    background-color: ${({ theme }) => theme.COLORS.RED};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding-left: 100px;

    .label-logo {
      display: inherit;
      font-size: 100px;
    }

    .square-logo {
      width: 232px;
      height: 95px;
      left: inherit;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding-bottom: 12px;

    .square-logo {
      left: inherit;
      left: -20px;
    }
  }
`

export const Settings = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 14px;

  .checkbox-save-login-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #84848D;
    font-size: 15px;
  }

  .checkbox-save-login {
    width: 16px;
    height: 16px;
    border: 2px solid ${({ theme }) => theme.COLORS.RED};
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    background-color: #FFF;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    transition: border-color 0.3s, box-shadow 0.3s;
    margin-right: 8px; /* Espaço entre o checkbox e o texto */
  }

  .checkbox-save-login:checked {
    border-color: ${({ theme }) => theme.COLORS.RED};
  }

  .checkbox-save-login:checked::after {
    content: "";
    position: absolute;
    left: 3px;
    width: 4px;
    height: 8px;
    border: solid ${({ theme }) => theme.COLORS.RED};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  .forgot-password {
    font-size: 15px;
    color: #84848D;
    cursor: pointer;
    text-decoration: underline red;
    text-underline-offset: 6px;
  }

  .forgot-password:hover {
    color: #FFF;
  }
`
