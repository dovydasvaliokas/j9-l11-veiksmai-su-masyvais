let zodis = prompt("Įveskite žodį");
let ieskomaRaide = prompt("Įvesite ieškomą raidę");

console.log(rastiKiekYraTokiosRaides(zodis, ieskomaRaide));
console.log(rastiKiekYraTokiosRaides("kfdjasdhgajfvascajsdkadjks", "a"));


function rastiKiekYraTokiosRaides(tekstas, raide) {
    let kiekis = 0;

    for(let i = 0; i < tekstas.length; i++) {
        if (tekstas[i] == raide) {
            kiekis++;
        }
    }
    return kiekis;
}