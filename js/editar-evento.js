//capturar id do evento através do link
const idEvento = window.location.search.split("=")[1];
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

// ENVIAR EVENTO EDITADO NA API ATRAVÉS DO PUT
formulario.addEventListener('submit', (pressionado) => {
    pressionado.preventDefault();
    const body = {
        name: formulario[0].value,
        poster: formulario[1].value,
        attractions: formulario[2].value.split(', '),
        description: formulario[3].value,
        scheduled: formulario[4].value,
        number_tickets: formulario[5].value,
     }
  
    fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${idEvento}`, {
      "method": "PUT",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify(body)
    })
      .then(response => {
        console.log(response);
        alert("Evento editado com sucesso");
        window.location.replace("admin.html");
      })
      .catch(err => {
        console.error(err);
      });
   })