/*  
    1) Capturar a escolha do jogador: prompt
    2) Capturar a escolha da máquina: Math
    3) Testar (Switch,IF) quem ganhou a rodada
    4) Elegem o ganhador
*/
// let escolhadojogador = prompt ("digite 1 para papel, digite 2 para pedra, digite 3 para tesoura: ");

// function getRandomInt (min, max) {
//     min = Math.ceil (min);
//     max = Math.floor (max);
//     return Math.floor (Math.random() * (max-min) + min);

// }
// switch (escolhadojogador) {
//     case 1:
//         "papel"
//         break;

//     case 2:
//         "pedra"
//         break;
//         case 3: 
//         "tesoura"
//         break;
// }

// console.log (escolhadojogador);

// while(true){
//     jogador1 = prompt("Jogador 1: Digite pedra, papel ou tesoura");
//     jogador2 = prompt("Jogador 2: Digite pedra, papel ou tesoura");

//     if (jogador1 == "pedra") {
//         if (jogador2 == "tesoura") {
//             alert ("Pedra quebra tesoura");
//         } else if (jogador2 == "papel"){
//             alert ("Papel envolve a Pedra");
//         } else if (jogador2 == "pedra") {
//             alert ("Empate");
//         }

//     }
//     else if (jogador1 == "tesoura") {
//         if (jogador2 == "pedra") {
//             alert ("Pedra quebra tesoura");
//         } else if (jogador2 == papel){
//             alert ("tesoura corta papel");
//         } else if (jogadoe2 == "tesoura") {
//             alert ("Empate");
//         }
//     }

//     else if (jogador1 == "papel"){
//         if (jogador2 == "pedra") {
//             alert ("Papel envolve pedra");
//         }else if (jogador2 == "tesoura") {
//             alert ("Tesoura corta papel");
//         }else if (jogador2 == "papel")  {
//             alert ("Empate");
//         }

//     }

// }

function alerta() {
    alert("Vamos jogar pedra,papel ou tesoura!");
}

function user() {
    alerta()

    let opcao = prompt("Escolha")

    switch (opcao) {
        case "pedra":
            return 1
        case "papel":
            return 2
        case "tesoura":
            return 3
    }
}

function machine(max, min) {
    return parseInt(Math.random() * (max - min) + min)
}


let empate = 0
let usuariopnts = 0
let machinepnts = 0
let vencedor = ""

do {
    const usuario = user()
    const maquina = machine(1, 3)

    if (usuario === maquina) {
        empate++
    }
    else if (usuario - maquina == 2 || usuario - maquina == 1) {
        usuariopnts++
    }
    else {
        machinepnts++
    }

    if (usuariopnts == 2 && machinepnts < 2) {
        vencedor = "user"
    }
    else if (machinepnts == 2 && usuariopnts < 2) {
        vencedor = "machine"
    }
    else if (machinepnts == 2 || usuariopnts == 2 ) {
        break
    }

    alert ("Placar: " + usuariopnts+ "X" + machinepnts)
} while (vencedor === "")

alert(vencedor+" Wins")
console.log(vencedor+" Wins")