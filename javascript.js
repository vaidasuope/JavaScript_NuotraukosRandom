"use strict"

const rodyti=document.getElementById("mygtukas");
rodyti.addEventListener("click", rodytiNuotraukas);

function rodytiNuotraukas(){
    var foto=document.getElementById("nuotraukos");
    var mygtukasRodyti=document.getElementById("mygtukas");
    var mygtukasMaisyti=document.getElementById("mygtukas2");
    if (foto.style.display==="none" && mygtukasMaisyti.style.display==="none"){
        foto.style.display="block";
        mygtukasMaisyti.style.display="block";
        document.getElementById("mygtukas").value = "Nerodyti";
    }
    else {
        foto.style.display="none";
        mygtukasMaisyti.style.display="none";
        document.getElementById("mygtukas").value = "Rodyti";
    }
}

const sumaisyti=document.getElementById("mygtukas2");
sumaisyti.addEventListener("click",maisytiNuotraukas);

function maisytiNuotraukas(){
    let fotoMasyvas=document.querySelectorAll("img");
    let masyvoDydis=fotoMasyvas.length;
    let random, keisti;
    while (masyvoDydis>0){
        random=Math.floor(Math.random()*masyvoDydis);
        masyvoDydis--;
        keisti=fotoMasyvas[masyvoDydis].src;
        fotoMasyvas[masyvoDydis].src=fotoMasyvas[random].src;
        fotoMasyvas[random].src=keisti;
    }
}

