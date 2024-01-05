var texte="Bienvenue sur notre site!";
var contenant=document.getElementById("contenant");
let index=0;
function ecriture() {
  contenant.textContent=texte.slice(0,index);
  index++;
  if(index<texte.length){
    setTimeout(ecriture,300);
  }
}
ecriture();
