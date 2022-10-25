let tekstas = prompt("Įveskite tekstą, kurį išves atvirkščiai");

isvestiAtvirksciai(tekstas);

function isvestiAtvirksciai(tekstas) {
    let naujasApsuktasZodis = "";
    for (let i = tekstas.length - 1; i >= 0; i--) {
        naujasApsuktasZodis += tekstas[i];
    }
    alert(naujasApsuktasZodis);
}