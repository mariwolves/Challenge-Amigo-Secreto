let amigos = [];

function agregarAmigo(){
   let inputAmigo = document.getElementById("amigo").value.trim();
   if (inputAmigo) {
       amigos.push(inputAmigo);
       document.getElementById("amigo").value = "";  
       limpiarCaja();
       mostrarAmigos();
   } else {
       alert("Por favor, inserte un nombre");
   }
}

function limpiarCaja(){
   document.getElementById("amigo").value = "";
}
function mostrarAmigos(){
   let lista = document.getElementById ("listaAmigos");
   lista.innerHTML = "";
   
   for (let i = 0; i < amigos.length; i++) {
       let li = document.createElement("li");
       li.textContent = amigos[i];
       lista.appendChild(li);
   }
}
function sortearAmigo(){
   if (amigos.length === 0) {
       alert("No hay amigos para sortear");
       return;
   }
   let indiceAleatorio = Math.floor(Math.random() * amigos.length);
   let amigoSorteado = amigos[indiceAleatorio];
   document.getElementById("resultado").innerHTML = "El amigo sorteado es: " + amigoSorteado;
}
//////

function reiniciarJuego(){
   amigos = []; // vaciar el array
   document.getElementById("listaAmigos").innerHTML = ""; // limpiar lista
   document.getElementById("resultado").innerHTML = "";   // limpiar resultado
   limpiarCaja(); // limpiar input
}
