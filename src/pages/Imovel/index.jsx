import CardAvaliação from '../../components/Card-Avaliacao'
import "./index.css"
import { img1, img2, img3, img4, img5 } from "../../assets"

const index = () => {
  return (
    <section className="imovel">
        <section className="imovel-header">
        <h1>Cabana do Sossego Refugio na Serra da Mantiqueira.</h1>
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

        <section className="images">
            <img className="img1" src={img1} alt="Imagem 1" />
            <img className="img2" src={img2} alt="Imagem 2" />
            <img className="img3" src={img3} alt="Imagem 3" />
            <img className="img4" src={img4} alt="Imagem 4" />
            <img className="img5" src={img5} alt="Imagem 5" />
        </section>

        <section className='conteudoPrincipal'>
            <article>
            <div className="titulo-imovel">
                <h2>Espaço inteiro: cabana em Bairro Mellos, Brasil</h2>
                <p>2 hóspedes • 1 quartos • 1 cama • 1 banheiro</p>
            </div>
            </article>
            <aside className="conteudoPrincipalLadoDireito">
                <section className="reserva">
                    <div className="precoPorNoite">
                    <h1>R$1.420</h1>
                    <span>por noite</span>
                    </div>
                    <div className="checkInOut">
                    <button className="botaoCheck In">
                        CHECK-IN
                        <span>08/08/2024</span>
                    </button>
                    <button className="botaoCheck Out">
                        CHECKOUT
                        <span>12/08/2024</span>
                    </button>
                    </div>
                    <button className="botaoHospedes">
                    <div>
                        HÓSPEDES
                        <span>1 hóspede</span>
                    </div>
                    </button>
                    <button className="botaoReservar">Reservar</button>
                    <p className="aviso">Você ainda não será cobrado</p>
                    <div className="precosPlano">
                    <p className="precoSublinhado">R$1.420 x 5 noites</p>
                    <p>R$7.100</p>
                    </div>
                    <div className="precosPlano">
                    <p className="precoSublinhado">Taxa de limpeza</p>
                    <p>R$200</p>
                    </div>
                    <div className="precosPlano">
                    <p className="precoSublinhado">Taxa de serviço do Airbnb</p>
                    <p>R$1.061</p>
                    </div>
                    <div className="total">
                    <p>Total sem impostos</p>
                    <p>R$8.361</p>
                    </div>
                </section>
                <section className="denuncia">
                    <a href="#">Denunciar este anúncio</a>
                </section>
            </aside>
        </section>

        <section className="avaliacoes">
            <CardAvaliação profileImage="https://a0.muscache.com/im/pictures/user/957760f1-8672-4905-9699-f12c72c2107c.jpg?im_w=240" name="Rogério" timeAtApp="5 anos no Airbnb" avaliationTime="2 semanas atrás" stayedTime="
    Ficou algumas noites" avaliation="Ótimo lugar para casais, principalmente para quem busca contato com a natureza e paz"/>
            <CardAvaliação profileImage="https://a0.muscache.com/im/pictures/user/0bf83a34-4637-4f24-af86-0ded753650b9.jpg?im_w=240" name="Eric" timeAtApp="4 anos no Airbnb" avaliationTime="3 semanas atrás" stayedTime="
    Ficou algumas noites" avaliation="Infraestrutura nota 10, fácil check-in, vista exuberante. Recomendo!"/>
            <CardAvaliação profileImage="https://a0.muscache.com/im/pictures/user/389355aa-7258-4d88-b8e0-b700a824c9cd.jpg?im_w=240" name="Bruna" timeAtApp="7 anos no Airbnb" avaliationTime="julho de 2024" stayedTime="
    Ficou algumas noites" avaliation="Estadia perfeita! Fizemos uma viagemzinha de casal sem as crianças e o lugar é perfeito. "/>
            <CardAvaliação profileImage="https://a0.muscache.com/im/pictures/user/User/original/d0938c24-bab6-4d4a-bb22-a09694397f5d.jpeg?im_w=240" name="Laís" timeAtApp="4 meses no Airbnb" avaliationTime="2 semanas atrás" stayedTime="
    Ficou algumas noites" avaliation="O ambiente maravilhoso, respondia totalmente com que é proposto pela publicação. Comunicação rápida e muito boa com o anfitrião Rafael."/>
        </section>
    </section>
  )
}

export default index