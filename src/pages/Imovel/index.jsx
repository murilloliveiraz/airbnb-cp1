import "./index.css"
import { img1, img2, img3, img4, img5 } from "../../assets"

const index = () => {
  return (
    <section>
        <section className="imovel-header">
            <h1>Casa linda e rústica com piscina, próxima a tudo.</h1>
            <ul>
                <li>
                    <span className="material-symbols-outlined">
                        ios_share
                    </span>
                    Compartilhar
                </li>
                <li>
                <span className="material-symbols-outlined">
                        favorite
                    </span>
                    Salvar
                </li>
            </ul>
        </section>
        <h2>Espaço inteiro: casa em Chácara Inglesa, Brasil</h2>
        <p>6 hóspedes • 2 quartos • 1 cama • 2 banheiros e meio</p>

        <section className="images">
            <img className="img1" src={img1} alt="Imagem 1" />
            <img className="img2" src={img2} alt="Imagem 2" />
            <img className="img3" src={img3} alt="Imagem 3" />
            <img className="img4" src={img4} alt="Imagem 4" />
            <img className="img5" src={img5} alt="Imagem 5" />
        </section>

        <section className="avaliações">
            <article className="card">
                <div className="profile">
                    {/* <img src="https://a0.muscache.com/im/pictures/user/78cc5842-4314-43ad-8af4-46d34938c7b9.jpg?im_w=240" alt="mariana" /> */}
                    <div className="profile-name">
                        <h3>Mariana</h3>
                        <p>3 anos no Airbnb</p>
                    </div>
                </div>
                <div className="avaliacao">
                <p className="estrelas">
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    <span className="material-symbols-outlined">star</span>
                    • 2 semanas atrás • Ficou algumas noites
                </p>
                <p>a casa é super aconchegante, confortável e bem decorada. bem equipada com utensílios domésticos.</p>
                </div>
            </article>
        </section>
    </section>
  )
}

export default index