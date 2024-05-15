import { useState } from "react"
import { Container, Form, Logo, Settings } from "./styles"
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    console.log(usuario, password)
    navigate('/characters')
  }

  return (
    <Container>
      <Form>
        <Logo>
          <div className="square-logo"/>
          <div className="label-logo">MARVEL</div>
        </Logo>

        <div className="header-form">
          <span>Bem-vindo(a) de volta!</span>
        </div>

        <div className="label-access">
          <span>Acesse sua conta:</span>
        </div>

        <input
          className="inputs"
          placeholder="Usuário"
          type="text"
          onChange={e => setUsuario(e.target.value)}
        />

        <input
          className="inputs"
          placeholder="Senha"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Settings>
          <div className="checkbox-save-login-label">
            <input type="checkbox" className="checkbox-save-login" />
            <span>Salvar login</span>
          </div>

          <span className="forgot-password">Esqueci a senha</span>
        </Settings>

        <button className="btn-enter" type="button" onClick={handleSignIn}>
          Entrar
        </button>

        <div className="footer-form">
          <span>Ainda não tem o login?</span>
          <span className="btn-register">Cadastre-se</span>
        </div>
      </Form>
    </Container>
  )
}

export default SignIn
