//valida formularios e copia variaveis para a tabela
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    
    // extrai do formulario as informaçaos do paciente
    var paciente = obtemPacienteDoFormulario(form);
    var erros = validaPaciente(paciente);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);
    
    //limpando o formulario
    form.reset(); 
    var mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
    // adiciona o paciente a tabela
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr"); // inicializa tr
    pacienteTr.classList.add("paciente");

    //cria a tabela final
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td
}

function validaPaciente(paciente) {
    var erros = [];
    if(!validaPeso(paciente.peso)) erros.push("O peso é inválido");
    if(!validaAltura(paciente.altura)) erros.push("A altura é inválida");  
    if(paciente.nome.length == 0) erros.push("O nome não pode ser em branco");  
    if(paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco");  
    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}