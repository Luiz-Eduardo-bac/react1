import Banner from "../Components/Banner"
import Header from "../Components/Header"
import ProdutosEmAlta from "../Components/ProdutosEmAlta"
import Promocoes from "../Components/Promocoes"
import Rodape from "../Components/Rodape"

function Homepage() {

  return (
    <>
      <Header/>
      <ProdutosEmAlta/>
      <Rodape/>
      <Banner/>
      <Promocoes/>
    </>
  )
}

export default Homepage