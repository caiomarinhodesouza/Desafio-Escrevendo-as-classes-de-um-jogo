//Escrevendo as classes de um Jogo:

// Definição da classe Heroi.
class Heroi {
  // Construtor da classe.
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método para realizar o ataque.
  atacar() {
    let ataque = '';

    // Determina o tipo de Ataque com base no tipo do herói
    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque indefinido';
    }

    // Exibe a mensagem do ataque
    console.log(O ${this.tipo} ${this.nome} atacou usando ${ataque});
  }
}

// classe Heroi
const mago = new Heroi('Gandalf', 100, 'mago');
const guerreiro = new Heroi('Aragorn', 35, 'guerreiro');
const monge = new Heroi('Lee Sin', 40, 'monge');
const ninja = new Heroi('Hanzo', 30, 'ninja');

// Realizar os ataques.
mago.atacar(); // Saída esperada: O mago Gandalf atacou usando magia
guerreiro.atacar(); // Saída esperada: O guerreiro Aragorn atacou usando espada
monge.atacar(); // Saída esperada: O monge Lee Sin atacou usando artes marciais
ninja.atacar(); // Saída esperada: O ninja Hanzo atacou usando shuriken