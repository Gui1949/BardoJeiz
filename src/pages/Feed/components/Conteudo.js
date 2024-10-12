import React from "react";

class Conteudo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }
  render() {
    let foto = this.state.foto;

    if (foto.includes("fbsbx") || foto.includes("fbcdn")) {
      return (
        <div className="conteudo">
          <div className="caixa_fb">
            <div className="titulo_fb">
              <p>
                <b>Publicação do FaceBook</b>
              </p>
            </div>
            <div className="desc_fb">
              <p className="desc_fb_class">
                A postagem a seguir é proveniente do FaceBook. Não me
                responsabilizo por nada de lá não.
              </p>
            </div>
            <a className="btn_fb" target="_blank" href={foto}>
              <b>Acessar</b>
            </a>
          </div>
        </div>
      );
    } else {
      let imagem = foto.includes("wp-content") 
      || foto.includes("twimg")
      || foto.includes("bcdn")
      || foto.includes("eaglepatches")
      || foto.includes("cdn")
        ? "https://media.tenor.com/N_0wM0S-3RAAAAAM/sumiu-cade.gif"
        : foto;

      return <img crossorigin="anonymous" className="conteudo" src={imagem} />;
    }
  }
}

export default Conteudo;
