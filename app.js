// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variables

let inputAmigo = document.getElementById("amigo");
let ListaAmigos =[];
let ulListaAmigos = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");


function agregarAmigo() {
    if(inputAmigo.value == ""){
        alert("nombre vacio, ingresa un nombre")
    }
   ListaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    console.log(ListaAmigos)
}

function sortearAmigo(){
    let random = Math.floor(Math.random() * ListaAmigos.length);
    console.log(random);
    let amigoSecreto = ListaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
   
}