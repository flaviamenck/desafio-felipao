let nomeHeroi = "Sage";
let xpHeroi = 6000;
let classificao = "";

switch (true) {
    case (xpHeroi < 1000):
        classificao = "Ferro";
        break;
    case (xpHeroi >= 1001 && xpHeroi < 2000):
        classificao = "Bronze";
        break;
    case (xpHeroi >= 2001 && xpHeroi < 5000):
        classificao = "Prata";
        break;
    case (xpHeroi >= 5001 && xpHeroi < 7000):
        classificao = "Ouro";
        break;
    case (xpHeroi >= 7001 && xpHeroi < 8000):
        classificao = "Platina";
        break;
    case (xpHeroi >= 8001 && xpHeroi < 9000):
        classificao = "Ascendente";
        break;
    case (xpHeroi >= 9001 && xpHeroi < 10000):
        classificao = "Imortal";
        break;
    case (xpHeroi >= 10001):
        classificao = "Radiante";
        break;
    default:
        console.log("Nenhum XP registrado.");
}

console.log("O herói de nome " + nomeHeroi + " está no nível de " + classificao + "!");