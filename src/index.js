//Botón que lleva a las Instrucciones
const instructionsButton=document.getElementById("instructions-button");
const encodeButton=document.getElementById("encode-button");
const decodeButton = document.getElementById("decode-button");
const home1Button = document.getElementById("home1-button");
const home2Button = document.getElementById("home2-button");
const home = document.getElementById("inicio");
const results = document.getElementById("resultado");
const instructions=document.getElementById("instrucciones");
const removible= document.getElementById('id');


//Función instructions
const showInstructions=()=>{
  instructions.classList.remove("disappear");
  home.classList.add("disappear");
}

const goHome=()=>{
  instructions.classList.add("disappear");
  home.classList.remove("disappear");
  results.classList.add("disappear");
}

const encode =()=>{
  results.classList.remove("disappear");
  home.classList.add("disappear");
  const string = document.getElementById("texto").value;
  const offset = document.getElementById("offset").value;
  //falta agregar la función que codifica y limpiar los inputs al volver a inicio
}

const decode =()=>{
  results.classList.remove("disappear");
  home.classList.add("disappear");
  document.getElementById("change").innerHTML="es";
  document.getElementById("change-2").innerHTML="      ";
  const coded= document.getElementById("coded");
  coded.classList.add("disappear");
  const string = document.getElementById("texto").value;
  const offset = document.getElementById("offset").value;
  //Falta agregar la funcion que decodifica y limpiar los inputs al volver a inicio

}

instructionsButton.addEventListener("click", showInstructions);
home1Button.addEventListener("click", goHome);
home2Button.addEventListener("click", goHome);
encodeButton.addEventListener("click", encode);
decodeButton.addEventListener("click", decode);
//document.getElementById('encoded').value = 'hi';
