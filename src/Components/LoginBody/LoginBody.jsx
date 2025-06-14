import Tenis1 from "../../assets/tenisLogin1.png"
import Tenis2 from "../../assets/tenisLogin2.png" 
import Icons from "../../assets/links.png" 

import "./LoginBody.css"


function LoginBody() {

  return (
    <>
      <section id="loginBodyContainer">
        <div id="formContainer">
          <div id="loginTitles">
              <h1>Acesse sua conta</h1>
              <p>Novo cliente? Então registre-se <a href="">aqui</a></p>
          </div>
          <div id="loginForm">
            <label htmlFor="">Login *</label>
            <input type="email"  placeholder="Digite seu login ou email"/>

            <label htmlFor="">Login *</label>
            <input type="password"  placeholder="Digite sua senha"/>

            <a href="">Esqueci minha senha</a>
            <button>Acessar conta</button>

            <div id="icons">
              <a href="">Ou faça login com</a>
              <img src={Icons} alt="" />
            </div>
          </div>
        </div>
        <div>
          <img src={Tenis1} alt="" />
          <img src={Tenis2} alt="" />
        </div>
      </section>
    </>
  )
}

export default LoginBody