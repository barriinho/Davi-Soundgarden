const formulario = document.querySelector('#form');

formulario.addEventListener('submit', (pressionado) => {
  pressionado.preventDefault();
  const body = {
    name: formulario[0].value,
    poster: "N/D",
    attractions: formulario[1].value.split(', '),
    description: formulario[2].value,
    scheduled: formulario[3].value,
    number_tickets: formulario[4].value,
   }

  fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify(body)
  })
    .then(response => {
      console.log(response);
      alert("Evento cadastrado com sucesso");
      window.location.replace("admin.html");
    })
    .catch(err => {
      console.error(err);
    });
 })