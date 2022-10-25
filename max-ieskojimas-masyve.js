//----- Pagrindinė programa
const masyvas = masyvoNuskaitymas();

console.log(masyvas);

console.log(maxIeskojimas(masyvas));


//------ Papildomos funkcijos
function masyvoNuskaitymas() {
    const masyvas = prompt("Įveskite skaičius atskirtus su kableliu ir tarpu").split(", ");

    return masyvoKonvertavimasISkaitinius(masyvas);
}


function masyvoKonvertavimasISkaitinius(masyvas) {
    for (let i = 0; i < masyvas.length; i++) {
        masyvas[i] = +masyvas[i];
    }
    return masyvas;
}


function maxIeskojimas(masyvas) {
    let max = masyvas[0];

    for (let i = 0; i < masyvas.length; i++) {
        if (masyvas[i] > max) {
            max = masyvas[i];
        }
    }
    return max;
}