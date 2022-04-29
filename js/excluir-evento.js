//capturar id do evento através do link
const idEvento = window.location.search.split("=")[1];
console.log(idEvento)
//preenche o formulário com as informações do evento
const formulario = document.querySelector("form");
function preencheFormulario(evento){
    formulario[0].value = evento.name;
    formulario[1].value = evento.poster;
    formulario[2].value = evento.attractions.join(", ");
    formulario[3].value = evento.description;
    formulario[4].value = evento.scheduled.split(".")[0];
    formulario[5].value = evento.number_tickets;
}
//localizar evento na API através do id
fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${idEvento}`, {
  "method": "GET",
  "headers": {}
})
.then(response => {
  return response.json();
}).then(evento => {
    preencheFormulario(evento);
})
.catch(err => {
  console.error(err);
});

formulario.addEventListener("submit", (pressionado) => {
    pressionado.preventDefault();
  
    fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${idEvento}`, {
      method: "DELETE",
    })
      .then(() => {
        alert("Evento removido com sucesso");
        window.location.replace("admin.html");
      })
      .catch((error) => console.log(error.message));
  });