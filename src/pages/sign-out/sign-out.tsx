import { useState } from "react"
import { Container, Form, Logo } from "./styles"
import { useNavigate } from 'react-router-dom';

const SignOut: React.FC = () => {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    console.log(usuario, password)
    navigate('/')
  }

  return (
    <Container>
      <Form>
        <Logo>
          <span className="label-logo">MARVEL</span>
        </Logo>

        <div className="header-form">
          <span>Bem-vindo(a) de volta!</span>
        </div>

        <div className="label-access">
          <span>Crie sua conta:</span>
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

        <button className="btn-enter" type="button" onClick={handleSignIn}>
          Entrar
        </button>

        <div className="footer-form">
          <span>Já tem conta?</span>
          <span className="btn-register" onClick={handleSignIn} >Login</span>
        </div>
      </Form>
    </Container>
  )
}

export default SignOut
