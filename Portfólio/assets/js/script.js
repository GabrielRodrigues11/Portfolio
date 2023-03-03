//DIGITAÇÃO DO NOME
var i = 0;
var txt = 'Gabriel Rodrigues'; /* The text */
var speed = 150; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("nome").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()

// EXPERIENCIA 

let btn = document.getElementById('btn-xp')
let btn2 = document.getElementById('btn-xp2')
let btn3 = document.getElementById('btn-xp3')

let text = document.getElementById('oportunidade')
let text2 = document.getElementById('estudos')
let text3 = document.getElementById('experiencia')


btn.onclick = function(){
    text.style.display = "flex"
    text2.style.display = "none"
    text3.style.display = "none"
    btn.style.backgroundColor = "#138b1b"
    btn2.style.backgroundColor = "#09090a"
    btn3.style.backgroundColor = "#09090a"
    btn.style.boxShadow = "0 0 15px#138b1b"
    btn2.style.boxShadow = "none"
    btn3.style.boxShadow = "none"
}

btn2.onclick = function(){
    text2.style.display = "flex"
    text.style.display = "none"
    text3.style.display = "none"
    btn2.style.backgroundColor = "#138b1b"
    btn.style.backgroundColor = "#09090a"
    btn3.style.backgroundColor = "#09090a"
    btn.style.boxShadow = "none"
    btn2.style.boxShadow = "0 0 15px#138b1b"
    btn3.style.boxShadow = "none"
}

btn3.onclick = function(){
    text3.style.display = "flex"
    text2.style.display = "none"
    text.style.display = "none"
    btn3.style.backgroundColor = "#138b1b"
    btn.style.backgroundColor = "#09090a"
    btn2.style.backgroundColor = "#09090a"
    btn.style.boxShadow = "none"
    btn2.style.boxShadow = "none"
    btn3.style.boxShadow = "0 0 15px#138b1b"
}
