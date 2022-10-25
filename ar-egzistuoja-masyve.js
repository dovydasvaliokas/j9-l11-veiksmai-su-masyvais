const skaiciai = masyvoNuskaitymoFunkcija();

console.log(skaiciai);

console.log(arEgzistuoja(skaiciai, 5));


function masyvoNuskaitymoFunkcija() {
    const masyvas = [];
    let n = +prompt("Įveskite kiek bus skaičių masyve");
    for (let i = 0; i < n; i++) {
        masyvas.push(+prompt(`Įveskite ${i+1}-ą skaičių`));
    }
    return masyvas;
}


function arEgzistuoja(masyvas, ieskomasSkaicius) {
    for (let i = 0; i < masyvas.length; i++) {
        if (masyvas[i] == ieskomasSkaicius) {
            return true;
        }
    }
    return false;
}