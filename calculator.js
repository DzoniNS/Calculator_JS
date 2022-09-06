function izracunaj() {
    var gornji = parseFloat(document.getElementById("prviBroj").value);
    console.log(gornji);
    var donji = parseFloat(document.getElementById("drugiBroj").value); //parsefloat se koristi da bi se ocitao number a ne string
    console.log(donji);

    var operacija = document.getElementById("operacija").value;
    console.log(operacija);
    var rezultat = document.getElementById("rez");
    console.log(rezultat);

    if(isNaN(gornji) || isNaN(donji)){ // logicko ili ||   a logicko i  &&
        alert("polja ne mogu ostati prazna!");
        return false; // zaustavlja dalje izvrsavanje koda
    }

    if (operacija == "+") {
        rezultat.innerHTML = gornji + donji;
    }
    else if (operacija == "-") {
        rezultat.innerHTML = gornji - donji;
    }
    else if (operacija == "*") {
        rezultat.innerHTML = gornji * donji;
    }
    else {
        rezultat.innerHTML = gornji / donji;
    }
}