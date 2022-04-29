//const idEvento = window.location.search.split("=")[1];
const idEvento = window.location.search.split("=")[1]
const tabelaReservas = document.querySelector("tbody");

function listarReservas(evento){
    evento.forEach((evento, index) => { 
        //inserir nova linha na tabela
        const inserirLinha = tabelaReservas.insertRow(index);
        //inserir index
        const celulaIndex = inserirLinha.insertCell();
        celulaIndex.setAttribute('scope', 'row');
        celulaIndex.innerText = index + 1;
        //inserir data do evento
        const celulaData = inserirLinha.insertCell();
        celulaData.innerText = new Date (evento.created_at).toLocaleString("pt-br")
        //inserir nome do evento
        const celulaNome = inserirLinha.insertCell();
        celulaNome.innerText = evento.owner_name;
        //inserir atrações do evento
        const celulaEmail = inserirLinha.insertCell();
        celulaEmail.innerText = evento.owner_email;
        //inserir botões de ação ==> VER MANEIRA DE CRIAR BOTÕES JÁ DENTRO DA CÉLULA
        const celulaQtdIngressos = inserirLinha.insertCell();
        celulaQtdIngressos.innerText = evento.number_tickets;
     })
}

fetch("https://xp41-soundgarden-api.herokuapp.com/bookings/event/" + idEvento, {
  "method": "GET",
  "headers": {}
})
.then(response => {
  return response.json();
}).then(evento => {
    listarReservas(evento);
})
.catch(err => {
  console.error(err);
});