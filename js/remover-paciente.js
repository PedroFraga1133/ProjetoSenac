
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", removePaciente);

function removePaciente(event){
    event.target.parentNode.classlist.add("fadeOut")
        setTimeout(function(){
        event.target.parentNode.remove()}, 500);
    

}
