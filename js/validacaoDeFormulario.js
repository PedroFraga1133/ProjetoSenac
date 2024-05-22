var form = document.querySelectorAll("#formulario-cadastrar");
var paciente = obterPacienteDoFormulario(form)

function obterPacienteDoFormulario(formulario){
    var paciente = {
        cpf: formulario.cpf.value,
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gorduda: formulario.gordura.value,
        imc: formulario.nome.value/(formulario.altura.value*formulario.altura.value)
    }
    return paciente;
}


function valida(paciente){
    var erros = [];

    if(paciente.cpf.length == 0 ||paciente.nome.length == 0 ||paciente.peso.length == 0 
        ||paciente.altura.length == 0 ||paciente.gordura.length == 0){
            erros.push("Erro: Campo vazio!🚫")
        }
        return erros;
}

