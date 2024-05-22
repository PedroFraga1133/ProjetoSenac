var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", mostrarUmaMensagem)

function mostrarUmaMensagem(event){
    event.preventDefault();
    //console.log("paciente adiconado com sucesso")

    var form = document.querySelector("#formulario-cadastrar");
    var paciente = obterPacienteDoFormulario(form)

    var pacienteTr = montarTr(paciente)
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr)

    var erros = valida(paciente)
    alert(erros)
    
    form.reset();
}
function obterPacienteDoFormulario(formulario){
    var paciente = {
        cpf: formulario.cpf.value,
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura:formulario.gordura.value,
        imc: (formulario.peso.value/(formulario.altura.value*formulario.altura.value)).toFixed(2)
    
    }
    return paciente; //objeto paciente
}

function montarTr(paciente){
// 2 criar a linha da tabela
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")
     // 5 Anexar as células (td) na linha (tr) da tabela

    pacienteTr.appendChild(montaTd(paciente.cpf, "info-cpf"));
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return(pacienteTr)
}

function montaTd(dado, classe){
    var td = document.createElement("td")
    td.classList.add(classe)
    td.textContent = dado
    console.log(td)
    return td
}


function valida(paciente){
    var erros = [];

    if(paciente.cpf.length == 0 ||paciente.nome.length == 0 ||paciente.peso.length == 0 
        ||paciente.altura.length == 0 ||paciente.gordura.length == 0){
            erros.push("Erro: Campo vazio!🚫")
        }
        return erros;
}


    