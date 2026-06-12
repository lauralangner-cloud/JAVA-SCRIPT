const painel = document.querySelector('#painel');

const jogadores = [
    { nome: "Ana",    pontos: 320, vitorias: 15, derrotas: 3  },
    { nome: "Bruno",  pontos: 180, vitorias: 8,  derrotas: 10 },
    { nome: "Carla",  pontos: 450, vitorias: 22, derrotas: 1  },
    { nome: "Diego",  pontos: 95,  vitorias: 4,  derrotas: 14 },
    { nome: "Elena",  pontos: 280, vitorias: 12, derrotas: 5  }
  ];

for (let i = 0; i < jogadores.length; i++) {

    let jogador = jogadores[i];
    let totalJogos = jogador.vitorias + jogador.derrotas;
    let taxaVitorias = (jogador.vitorias / totalJogos) * 100;
        console.log(jogador.nome + " tem uma taxa de: " + taxaVitorias.toFixed(1) + "%");

    const card = document.createElement('div');
    

}