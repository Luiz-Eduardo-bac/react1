import Homepage from "./Pages/Homepage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import EsqueciMinhaSenha from "./Pages/EsqueciMinhaSenha";


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Cadastro" element={<Cadastro/>} />
          <Route path="/EsqueciMinhaSenha" element={<EsqueciMinhaSenha/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
