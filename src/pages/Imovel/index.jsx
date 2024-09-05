import CardAvaliação from '../../components/Card-Avaliacao'
import "./index.css"

const index = () => {
  return (
    <section className="imovel">
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

        <article className="price-card">
            <p className="price"><s>R$671</s> <strong>R$561</strong> noite</p>
            <form>
                <div className="inputs-check">
                    <div className="check">
                        <label htmlFor="checkin">CHECK-IN</label>
                        <input type="date" name="checkin"/>
                    </div>
                    <div className="check">
                        <label htmlFor="checkot">CHECK-OUT</label>
                        <input type="date" name="checkout"/>
                    </div>
                </div>
                <div className="hospedes-div">
                    <label htmlFor="hóspedes">HÓSPEDES</label>
                    <input type="date" name="checkout" placeholder="1 Hóspede"/>
                </div>
                <button>Reservar</button>
                <p>Você ainda não será cobrado</p>
            </form>
            <div>
                <ul>
                    <li>R$561 x 5 noites</li>
                    <li>R$2.805</li>
                </ul>
                <ul>
                    <li>Taxa de limpeza</li>
                    <li>R$100</li>
                </ul>
                <ul>
                    <li>Taxa de serviço do Airbnb</li>
                    <li>R$422</li>
                </ul>
            </div>
            <div>
                <h3>Total sem impostos</h3>
                <h3>R$3.327</h3>
            </div>
        </article>

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