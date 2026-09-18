import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { buscarClima, saudacao } from "../lib/clima";

function relogio() {
  const agora = new Date();
  return {
    hora: agora.getHours(),
    texto: agora.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
}

function StatusCard() {
  const [hora, setHora] = useState(relogio);
  const [clima, setClima] = useState(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setHora(relogio()), 1000 * 15);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let ativo = true;
    buscarClima()
      .then((dados) => ativo && setClima(dados))
      .catch(() => {});
    return () => {
      ativo = false;
    };
  }, []);

  useGSAP(
    () => {
      gsap.from(cardRef.current, {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });
    },
    { scope: cardRef }
  );

  const { titulo, icone } = saudacao(hora.hora);

  return (
    <section className="card card--status" ref={cardRef}>
      <div className="status__topo">
        <p className="status__titulo">{titulo}</p>
        <span className="material-symbols-rounded">{icone}</span>
      </div>
      <div className="status__corpo">
        <p className="status__relogio">{hora.texto}</p>
        <div className="status__clima">
          <p className="status__lugar">{clima ? clima.lugar : "No armário"}</p>
          <div className="status__temp">
            <span>{clima ? `${clima.temperatura}°C` : "--"}</span>
            <span className="material-symbols-rounded">
              {clima ? clima.icone : "thermostat"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatusCard;
