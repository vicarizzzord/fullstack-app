import { FormEvent, useEffect, useState } from 'react'
// import login from '../services/auth'
import './styles.css'

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  // const handleSubmit = (e: FormEvent) => {
  //   login(
  //     username,
  //     password
  //   )
  //   e.preventDefault()
  // }

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form action="" className="login-form" /*onSubmit={handleSubmit}*/>
            <span className="login-form-title">
              Bem-vindo!
            </span>
            <div className="wrap-input">
              <input type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className={username !== "" ? 'has-value input' : 'input'} />
              <span className="focus-input" data-placeholder='Username'></span>
            </div>

            <div className="wrap-input">
              <input type="password" required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={password !== "" ? 'has-value input' : 'input'} />
              <span className="focus-input" data-placeholder='Password'></span>
            </div>

            <div className="container-login-form-btn">
              <button type="submit" className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <a href="#" className="txt2"> Criar Conta</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export { LoginPage }
