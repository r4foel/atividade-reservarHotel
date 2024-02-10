class Quarto {
    // Construi as classes e atribui as caracteristicas
    constructor(numero, tipo, precoDiaria, reservado) {
        this.numero = numero;
        this.tipo = tipo;
        this.precoDiaria = precoDiaria;
        //Estava tendo um problema ao apresentar somente false e o chat sugeriu a resolução abaixo
        this.reservado = reservado || false; // Define como falso se não for fornecido
    }
 
    estaDisponivel() {
        //Usando booleano para imprimir a disponibilidade do quarto
        return this.reservado ? `O quarto ${this.numero} não esta disponível` : `Quarto disponível.`;
    }
}
 
class Hospede {
     // Construi as classes e atribui as caracteristicas e testei com o console.log a implementação dos objetos
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
 
}
 
class Reserva {
     // Construi as classes e atribui as caracteristicas
    constructor(quarto, hospede, dataInicio, dataFim) {
        this.quarto = quarto;
        this.hospede = hospede;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }
 
    calcularCustoTotal(precoDiaria) {
        //Adicionei a solução sugerida pelo professor retornando o console log e atribuindo o valor ao final da função
        const diferencaEmMilissegundos = this.dataFim - this.dataInicio;
        const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
        const custoTotal = diferencaEmDias * precoDiaria;
        console.log(`Valor total: ${custoTotal}`);
        return custoTotal;
    }
}
 
class Hotel {
     // Construi as classes e atribui as caracteristicas
    constructor(quartos, reservas) {
        this.quartos = [];
        this.reservas = [];
    }
 
    adicionarQuarto(quarto) {
        //Esta recolhendo a lista de quartos dentro do array
        this.quartos.push(quarto);
    }
 
    reservarQuarto(quarto, hospede, dataInicio, dataFim) {
        //Apliquei a função iniciando com o booleano questionando se o quarto já esta ocupado (false), sendo aceito ele aplica a constante com os objetos da classe reserva e atribui o valor da variavel reservado como true para identificar o quanrto como ocupado.  
        if (quarto.reservado === false) {
            const novaReserva = new Reserva(quarto, hospede, dataInicio, dataFim);
            quarto.reservado = true;
            this.reservas.push(novaReserva);
            console.log(`Reserva concluída com sucesso!`)
            return novaReserva;
        } else {
            console.log(`O quarto ${quarto.numero} não está disponível`);
            //caso ele não identifique como falso, o quarto já esta reservado.
        }
    }
 
    exibirQuartosDisponiveis() {
        const quartosDisponiveis = [];
   // for realizou a contagem dos quartos e abrigou na propria variavel e em seguida aplica uma condição sobre os valores recebidos
        for (let i = 0; i < this.quartos.length; i++) {
            const quarto = this.quartos[i];
            if (quarto.reservado === false) {
                quartosDisponiveis.push(quarto);
            }
        }
   //apliquei um segundo for para recolher os valores verdadeiros em uma lista, precisei da ajuda do chat para esse segundo item porque estava dando erro. 
        console.log("Lista de quartos disponíveis:");
        for (let j = 0; j < quartosDisponiveis.length; j++) {
            console.log(quartosDisponiveis[j]);
        }
   
        return quartosDisponiveis;
    }
    }
 
//criando arrays para colher os valores não recolhidos nas classes 
let hotel = new Hotel();
let reserva = new Reserva();
 
 
//exemplos de quarto depois retirei alguns para o console não ficar extenso
let quarto1 = new Quarto(1, "Standard", 120, false);
let quarto2 = new Quarto(2, "Standard", 120, false);
let quarto3 = new Quarto(3, "Standard", 120, false);
 
let quarto4 = new Quarto(4, "Luxo", 180, false);
let quarto5 = new Quarto(5, "Luxo", 180, false);
let quarto6 = new Quarto(6, "Luxo", 180, false);
 
let quarto7 = new Quarto(7, "Suíte", 250, false);
let quarto8 = new Quarto(8, "Suíte", 250, false);
let quarto9 = new Quarto(9, "Suíte", 250, false);
 
 //adicionando os quartos através do array do hotel, com a função e puxando as variaveis criadas para os quartos. 
hotel.adicionarQuarto(quarto2);
hotel.adicionarQuarto(quarto3);
hotel.adicionarQuarto(quarto6);
hotel.adicionarQuarto(quarto9);
 

let cliente1 = new Hospede("Julia Santos", "juliasantos@gmail.com");
let cliente2 = new Hospede("Roberto Reis", "rreis@gmail.com");
let cliente3 = new Hospede("Eduardo Silva", "eduzinho@gmail.com");
let cliente4 = new Hospede("Maria Maria", "maria2@gmail.com");
 

 
 //Apliquei as situações, exibir os quartos disponiveis
console.log(hotel.exibirQuartosDisponiveis());
//Conclui a reserva do quarto e demonstrei o calculo sobre o custo total
console.log(hotel.reservarQuarto(quarto3, cliente2, new Date("2024-02-01"), new Date("2024-02-10")).calcularCustoTotal(quarto3.precoDiaria));
//Tentei concluir uma nova reserva sobre o mesmo quarto ocupado
console.log(hotel.reservarQuarto(quarto3, cliente2, new Date("2024-02-01"), new Date("2024-02-10")))
//Exibi os quartos disponíveis atualmente. 
console.log(hotel.exibirQuartosDisponiveis());