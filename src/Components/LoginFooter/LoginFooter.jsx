
import "./LoginFooter.css"
import Vector from "../../assets/vector.png"
import Facebook from "../../assets/facebookicon.png"
import Instagram from "../../assets/instagramicon.png"
import Twitter from "../../assets/twitericon.png"


function LoginFooter (){

    return(
        <>
          <footer>

            <div id="digitalStore">

                <div id="logo-text">
                    <img src={Vector} alt="" />
                    <h2>Digital Store</h2>
                </div>

                <p>
                    Oferecemos camisetas, calças, bonés, tênis e headphones com estilo, qualidade e praticidade. Aqui, você encontra tudo o que precisa para se vestir bem e curtir o melhor da música e do dia a dia.
                </p>

                <div id="social-icons">
                    <a href="https://www.facebook.com/?locale=pt_BR" target="blank"><img src={Facebook} alt="" /></a>
                    <a href="https://www.instagram.com/" target="blank"><img src={Instagram} alt="" /></a>
                    <a href="https://x.com/" target="blank"><img src={Twitter} alt="" /></a>
                </div>

            </div>

            <div class="informacao-cat">
                <h2>Informação</h2>
                <a href="">Sobre Drip Store</a>
                <a href="">Segurança</a>
                <a href="">Wishlist</a>
                <a href="">Blog</a>
                <a href="">Trabalhe conosco</a>
                <a href="">Meus pedidos</a>
            </div>

            <div class="informacao-cat">
                <h2>Categorias</h2>
                <a href="">Camisetas</a>
                <a href="">Calças</a>
                <a href="">Bonés</a>
                <a href="">Headphones</a>
                <a href="">Tênis</a>
            </div>

            <div class="informacao-cat">
                <h2>Contato</h2>
                <address>
                    Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE, 30160-161
                </address>
                <p>
                    (85) 3051-3411
                </p>

            </div>

            



          </footer>

            <div id="footer-bottom">
                <hr />
                <p>
                    @2025 Digital College
                </p>
            </div>
        
        
        </>       
    )
}

export default LoginFooter;
