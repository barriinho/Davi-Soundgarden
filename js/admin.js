const tabelaEventos = document.querySelector("#corpoTabela");

function listarEventos(evento){
    evento.forEach((evento, index) => { 
        //inserir nova linha na tabela
        const inserirLinha = tabelaEventos.insertRow(index);
        //inserir index
        const celulaIndex = inserirLinha.insertCell();
        celulaIndex.setAttribute('scope', 'row');
        celulaIndex.innerText = index + 1;
        //inserir data do evento
        const celulaData = inserirLinha.insertCell();
        celulaData.innerText = evento.scheduled
        const data = new Date(evento.scheduled);
        celulaData.innerText = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
        //inserir nome do evento
        const celulaNome = inserirLinha.insertCell();
        celulaNome.innerText = evento.name;
        //inserir atrações do evento
        const celulaAtracoes = inserirLinha.insertCell();
        celulaAtracoes.innerText = evento.attractions.join(', ');
        //inserir botões de ação ==> VER MANEIRA DE CRIAR BOTÕES JÁ DENTRO DA CÉLULA
        const celulaAcoes = inserirLinha.insertCell();
        //botão ver reservas
        const botaoVerReservas = document.createElement('a');
        botaoVerReservas.innerText = "ver reservas";
        botaoVerReservas.classList.add('btn', 'btn-dark');
        botaoVerReservas.href = 'reservas.html?id='+ evento._id;
        celulaAcoes.appendChild(botaoVerReservas);
        //botão editar
        const botaoEditar = document.createElement('a');
        botaoEditar.innerText = "editar";
        botaoEditar.classList.add('btn', 'btn-secondary');
        botaoEditar.href = 'editar-evento.html?id='+ evento._id;
        celulaAcoes.appendChild(botaoEditar);
        //botão excluir
        const botaoExcluir = document.createElement('a');
        botaoExcluir.innerText = "excluir";
        botaoExcluir.classList.add('btn', 'btn-danger');
        botaoExcluir.href = 'excluir-evento.html?id='+ evento._id;
        celulaAcoes.appendChild(botaoExcluir);
     })
}

fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  return response.json();
}).then(evento => {
    listarEventos(evento);
})
.catch(err => {
  console.error(err);
});