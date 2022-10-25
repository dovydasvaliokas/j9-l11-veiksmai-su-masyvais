let masyvoEilute = prompt("Įveskite skaičius atskirtus kableliu ir tarpu");

console.log(masyvoEilute);

const masyvas = masyvoEilute.split(", ");

console.log(masyvas);


const antrasMasyvas = prompt("Įveskite skaičius dar kartą").split(", ");

console.log(antrasMasyvas);

const treciasMasyvas = [];
let n = +prompt("Įveskite kiek bus skaičių masyve");

for (let i = 0; i < n; i++) {
    treciasMasyvas.push(+prompt("Įveskite skaičių"));
}

console.log(treciasMasyvas);


// Papildomas pavyzdys: kaip iš karto nuskaityti konvertuotą masyvą tuos skaičius suvedant į vieną eilutę per kablelį
const ketvirtasMasyavs = prompt("Įveskite skaičius atskirtus kableliu ir tarpu").split(", ").map(Number);

console.log(ketvirtasMasyavs);      // jau bus skaitinis masyvas