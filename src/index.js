let nomeHeroi = "Sage";
let xpHeroi = 6000;
let classificacao = "";

switch (true) {
    case (xpHeroi < 1000):
        classificacao = "Ferro";
        break;
    case (xpHeroi >= 1001 && xpHeroi < 2000):
        classificacao = "Bronze";
        break;
    case (xpHeroi >= 2001 && xpHeroi < 5000):
        classificacao = "Prata";
        break;
    case (xpHeroi >= 5001 && xpHeroi < 7000):
        classificacao = "Ouro";
        break;
    case (xpHeroi >= 7001 && xpHeroi < 8000):
        classificacao = "Platina";
        break;
    case (xpHeroi >= 8001 && xpHeroi < 9000):
        classificacao = "Ascendente";
        break;
    case (xpHeroi >= 9001 && xpHeroi < 10000):
        classificacao = "Imortal";
        break;
    case (xpHeroi >= 10001):
        classificacao = "Radiante";
        break;
    default:
        console.log("Nenhum XP registrado.");
}

console.log("O herói de nome " + nomeHeroi + " está no nível de " + classificacao + "!");