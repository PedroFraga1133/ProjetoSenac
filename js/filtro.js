var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", filtrarPorCPF);

function filtrarPorCPF(){
   var pacientes = document.querySelectorAll(".paciente");

   if(this.value.length>0){
    for(var i =0; i<pacientes.length; i++){
        var paciente = pacientes[i];
        var tdCpf = paciente.querySelector(".info-cpf");
        var cpf = tdCpf.textContent;
        // EXPRESSÃO REGULAR QUE FILTRA LETRA POR LETRA
        var expressao = new RegExp(this.value, "i");
        //VERIFICAR SE ALGUMA PARTE DO CPF ESTA NA BUSCA

        if(!expressao.test(cpf)){
        paciente.classList.add("invisivel");
        }else{
            paciente.classList.remove("invisivel");
        }
        }

    }
    else{
        for(var i=0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");

        }

    }
}  
    