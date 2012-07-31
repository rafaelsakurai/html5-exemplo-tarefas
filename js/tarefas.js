window.onload = init;

function init() {
  var button = document.getElementById("botaoAdicionar");
  button.onclick = criarTarefa;

  for(var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if(key.substring(0, 6) == "tarefa") {
      var value = localStorage.getItem(key);
      adicionarTarefaNoDOM(value);
    }
  }
}

function adicionarTarefaNoDOM(value) {
  var tarefas = document.getElementById("tarefas");
  var tarefa = document.createElement("li");
  var span = document.createElement("span");
  span.setAttribute("class", "tarefa");
  span.innerHTML = value;
  tarefa.appendChild(span);
  tarefas.appendChild(tarefa);
}

function criarTarefa() {
  var valor = document.getElementById("descricao").value;
  var chave = "tarefa_" + localStorage.length;
  localStorage.setItem(chave, valor);
  adicionarTarefaNoDOM(valor);
  document.getElementById("descricao").value = "";
}