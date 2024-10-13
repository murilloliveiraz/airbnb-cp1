import { img1, img2, img3, img4, img5 } from "../../assets";
import CardAvaliação from "../../components/Card-Avaliacao";
import "./index.css";

const index = () => {
  return (
    <section className="imovel">
      <section className="imovel-header">
        <h1>Cabana do Sossego Refugio na Serra da Mantiqueira.</h1>
        <ul>
          <li>
            <span className="material-symbols-outlined">ios_share</span>
            Compartilhar
          </li>
          <li>
            <span className="material-symbols-outlined">favorite</span>
            Salvar
          </li>
        </ul>
      </section>

      <section className="images">
        <div className="images-header">
          <span class="material-symbols-outlined">arrow_back_ios</span>
          <div>
            <span class="material-symbols-outlined">upload</span>
            <span class="material-symbols-outlined">favorite</span>
          </div>
        </div>
        <img className="img1" src={img1} alt="Imagem 1 do imóvel" />
        <img className="img2" src={img2} alt="Imagem 2 do imóvel" />
        <img className="img3" src={img3} alt="Imagem 3 do imóvel" />
        <img className="img4" src={img4} alt="Imagem 4 do imóvel" />
        <img className="img5" src={img5} alt="Imagem 5 do imóvel" />
        <p className="images-footer">1/34</p>
      </section>

      <section className="conteudoPrincipal">
        <article>
          <h2 className="titulo-responsivo">
            Cabana do Sossego Refugio na Serra da Mantiqueira.
          </h2>
          <div className="titulo-imovel">
            <h2>Espaço inteiro: cabana em Bairro Mellos, Brasil</h2>
            <p>2 hóspedes • 1 quartos • 1 cama • 1 banheiro</p>
          </div>
          <div className="descricao-imovel">
            <p>Venha se hospedar na primeira Cabana A-Frame do Sul de Minas.</p>
            <p>
              A Cabana do Sossego foi inspirada nas Cabanas americanas e
              canadenses. Um encontro lindo da natureza com a Arquitetura. Feita
              toda em madeira rústica, e decorada com todo luxo e design para
              que o hospede tenha uma experiência inesquecível com requinte e
              aconchego.
            </p>
            <p className="mostrar-mais-imovel">
              Mostrar mais{" "}
              <svg
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right "
                viewBox="0 0 16 16"
              >
                <path d="M6.293 12.293a1 1 0 0 1 0-1.414L10.586 8 6.293 3.707a1 1 0 1 1 1.414-1.414l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414 0z" />
              </svg>
            </p>
          </div>

          <div className="oferece-imovel">
            <h3>O que esse lugar oferece</h3>
            <div className="lista-imovel">
              <ul className="lista-imovel">
                <div className="coluna-lista coluna-lista-1">
                  <li>
                    <span className="material-symbols-outlined">image</span>{" "}
                    Vista para as montanhas
                  </li>
                  <li>
                    {" "}
                    <span className="material-symbols-outlined">
                      flatware
                    </span>{" "}
                    Cozinha
                  </li>
                  <li>
                    <span className="material-symbols-outlined">
                      garage_home
                    </span>
                    Estacionamento incluído
                  </li>
                  <li>
                    {" "}
                    <span className="material-symbols-outlined">hot_tub</span>
                    Jacuzzi privativa
                  </li>
                </div>
                <div className="coluna-lista coluna-lista-2">
                  <li>
                    {" "}
                    <span className="material-symbols-outlined">
                      local_florist
                    </span>{" "}
                    Vista para o jardim
                  </li>
                  <li>
                    {" "}
                    <span className="material-symbols-outlined">wifi</span>{" "}
                    Wi-Fi
                  </li>
                  <li>
                    {" "}
                    <span className="material-symbols-outlined">pool</span>
                    Piscina compartilhada - aquecida
                  </li>
                  <li>
                    {" "}
                    <span className="material-symbols-outlined">videocam</span>
                    Câmeras de segurança na <br /> parte externa da propriedade
                  </li>
                </div>
              </ul>
            </div>
            <div className="p-imovel">
              <p>Mostrar todas as 45 comodidades</p>
            </div>
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
        <CardAvaliação
          profileImage="https://a0.muscache.com/im/pictures/user/957760f1-8672-4905-9699-f12c72c2107c.jpg?im_w=240"
          name="Rogério"
          timeAtApp="5 anos no Airbnb"
          avaliationTime="2 semanas atrás"
          stayedTime="
    Ficou algumas noites"
          avaliation="Ótimo lugar para casais, principalmente para quem busca contato com a natureza e paz"
        />
        <CardAvaliação
          profileImage="https://a0.muscache.com/im/pictures/user/0bf83a34-4637-4f24-af86-0ded753650b9.jpg?im_w=240"
          name="Eric"
          timeAtApp="4 anos no Airbnb"
          avaliationTime="3 semanas atrás"
          stayedTime="
    Ficou algumas noites"
          avaliation="Infraestrutura nota 10, fácil check-in, vista exuberante. Recomendo!"
        />
        <CardAvaliação
          profileImage="https://a0.muscache.com/im/pictures/user/389355aa-7258-4d88-b8e0-b700a824c9cd.jpg?im_w=240"
          name="Bruna"
          timeAtApp="7 anos no Airbnb"
          avaliationTime="julho de 2024"
          stayedTime="
    Ficou algumas noites"
          avaliation="Estadia perfeita! Fizemos uma viagemzinha de casal sem as crianças e o lugar é perfeito. "
        />
        <CardAvaliação
          profileImage="https://a0.muscache.com/im/pictures/user/User/original/d0938c24-bab6-4d4a-bb22-a09694397f5d.jpeg?im_w=240"
          name="Laís"
          timeAtApp="4 meses no Airbnb"
          avaliationTime="2 semanas atrás"
          stayedTime="
    Ficou algumas noites"
          avaliation="O ambiente maravilhoso, respondia totalmente com que é proposto pela publicação. Comunicação rápida e muito boa com o anfitrião Rafael."
        />
        <div className="mostrar-comentarios">
          <p>Mostrar todos os 159 comentários</p>
        </div>
      </section>

      <section className="mapa">
        <h3>Onde você estará</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14984.005614602811!2d-42.930295799999996!3d-20.133989049999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4e605179e2c89%3A0x885a732813b087ae!2sMelos%2C%20Dom%20Silv%C3%A9rio%20-%20MG%2C%2035440-000!5e0!3m2!1spt-PT!2sbr!4v1725666778773!5m2!1spt-PT!2sbr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <article className="descricao-localizacao">
        <h3>Bairro Mellos, Minas Gerais, Brasil</h3>
        <p>
          O Bairro dos Mellos é um bairro rural e familiar. <br />
          Nao possui mercados, mas fica bem proximo do centro da cidade de
          Piranguçu. <br />
          Estamos a 1h40m de Campos do Jordao.
        </p>
        <p className="mostrar-mais-imovel">
          Mostrar mais{" "}
          <svg
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right "
            viewBox="0 0 16 16"
          >
            <path d="M6.293 12.293a1 1 0 0 1 0-1.414L10.586 8 6.293 3.707a1 1 0 1 1 1.414-1.414l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414 0z" />
          </svg>
        </p>
      </article>

      <section className="informacoes">
        <h3>O que você deve saber</h3>
        <div className="topicos">
          <div className="topico">
            <h5>Regras da casa</h5>
            <p>Check-in: 17:00 - 22:00</p>
            <p>Checkout antes das 12:00</p>
            <p>Máximo de 2 hóspedes</p>
            <a href="#">
              Mostrar mais{" "}
              <svg
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right "
                viewBox="0 0 16 16"
              >
                <path d="M6.293 12.293a1 1 0 0 1 0-1.414L10.586 8 6.293 3.707a1 1 0 1 1 1.414-1.414l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414 0z" />
              </svg>
            </a>
          </div>
          <div className="topico">
            <h5>Segurança e propriedade</h5>
            <p>Não há alarme de fumaça</p>
            <p>Câmeras de segurança na parte externa da propriedade</p>
            <p>Detector de monóxido de carbono não é necessário</p>
            <a href="#">
              Mostrar mais{" "}
              <svg
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right "
                viewBox="0 0 16 16"
              >
                <path d="M6.293 12.293a1 1 0 0 1 0-1.414L10.586 8 6.293 3.707a1 1 0 1 1 1.414-1.414l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414 0z" />
              </svg>
            </a>
          </div>
          <div className="topico">
            <h5>Política de cancelamento</h5>
            <p>
              Cancelamento gratuito por 48 horas. Se você cancelar antes de 27
              de dez., receberá um reembolso parcial.
            </p>
            <p>Consulte a política completa deste anfitrião para saber mais.</p>
            <a href="#">
              Mostrar mais{" "}
              <svg
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right "
                viewBox="0 0 16 16"
              >
                <path d="M6.293 12.293a1 1 0 0 1 0-1.414L10.586 8 6.293 3.707a1 1 0 1 1 1.414-1.414l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414 0z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default index;
