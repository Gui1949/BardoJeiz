import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { gerarFrase } from "../lib/frase";

function FraseCard() {
  const [frase, setFrase] = useState(gerarFrase);
  const fraseRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: fraseRef });

  const trocar = contextSafe(() => {
    gsap.to(fraseRef.current.querySelector(".frase__texto"), {
      opacity: 0,
      y: -12,
      duration: 0.2,
      onComplete: () => {
        setFrase(gerarFrase());
        gsap.fromTo(
          fraseRef.current.querySelector(".frase__texto"),
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
        );
      },
    });
  });

  return (
    <section className="card card--frase" ref={fraseRef}>
      <p className="card__rotulo">Sabedoria do balcão</p>
      <p className="frase__texto">{frase}</p>
      <button className="botao" onClick={trocar}>
        <span className="material-symbols-rounded">casino</span>
        Solta outra
      </button>
    </section>
  );
}

export default FraseCard;
