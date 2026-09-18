const ICONES_CLIMA = [
  { codigos: [0, 1], icone: "sunny" },
  { codigos: [2, 3], icone: "cloud" },
  { codigos: [45, 48], icone: "foggy" },
  { codigos: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], icone: "rainy" },
  { codigos: [71, 73, 75, 77, 85, 86], icone: "weather_snowy" },
  { codigos: [95, 96, 99], icone: "thunderstorm" },
];

function iconePara(codigo) {
  const achado = ICONES_CLIMA.find((item) => item.codigos.includes(codigo));
  return achado ? achado.icone : "thermostat";
}

function posicaoAtual() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocalização indisponível"));
      return;
    }
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      timeout: 10000,
    });
  });
}

async function nomeDoLugar(latitude, longitude) {
  const resposta = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`
  );
  if (!resposta.ok) return "";
  const dados = await resposta.json();
  return dados.city || dados.locality || dados.principalSubdivision || "";
}

export async function buscarClima() {
  const { coords } = await posicaoAtual();
  const { latitude, longitude } = coords;

  const resposta = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`
  );
  if (!resposta.ok) throw new Error("Clima fora do ar");

  const dados = await resposta.json();
  const lugar = await nomeDoLugar(latitude, longitude).catch(() => "");

  return {
    temperatura: Math.round(dados.current.temperature_2m),
    icone: iconePara(dados.current.weather_code),
    lugar: lugar || "Por aí",
  };
}

export function saudacao(hora) {
  if (hora >= 0 && hora <= 5) {
    return { titulo: "Vai dormir porra, ta loko?", icone: "psychology" };
  }
  if (hora <= 11) return { titulo: "Eae cumpadi, bom dia!", icone: "clear_day" };
  if (hora <= 17) {
    return { titulo: "Boa tarde, meu consagrado", icone: "brightness_medium" };
  }
  if (hora <= 21) return { titulo: "Boa noite e até amanhã.", icone: "bedtime" };
  return { titulo: "Bora dormir ou tá difícil?", icone: "hotel" };
}
