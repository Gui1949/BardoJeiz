import React from "react";

class Conteudo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }
  render() {
    
    let foto = this.state.foto

    if (foto.includes(".mp4", "mov") == true) {
      return (
        <video className="conteudo" controls>
          <source src={foto} type="video/mp4" />
        </video>
      );
    } 
    else if (foto.includes("https://www.youtube.com") == true) {
      return (
        <iframe
          className="conteudo"
          src={foto}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      );
    }
    else if (foto.includes("fbsbx") == true || foto.includes("fbcdn") == true) {
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
            <a
              className="btn_fb"
              target="_blank"
              href={foto}
            >
              <b>Acessar</b>
            </a>
          </div>
        </div>
      );
    }
    else {
        return <img className="conteudo" src={foto} />;
      }
  }
}

export default Conteudo;
