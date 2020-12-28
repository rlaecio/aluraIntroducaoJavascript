var botaoImportar = document.querySelector("#importar-pacientes");
botaoImportar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function() {
        if (xhr.status == 200) { //valida a busca  
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); 
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(shr.status);
        }
    });
    xhr.send();
})