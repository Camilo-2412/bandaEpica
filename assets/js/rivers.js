let survey = document.getElementById("survey");
let nameUserWeb = document.getElementById("nameUserWeb");
let albumWeb = document.getElementById("albumWeb");
let yearSongWeb = document.getElementById("yearSongWeb");
let nameComposerWeb = document.getElementById("nameComposerWeb");
let songTimeWeb = document.getElementById("songTimeWeb");

const startSurvey = () => {
  let nameUser = prompt("Ingresa tu nombre");
  if (nameUser == null || nameUser === "") {
    alert("Por favor ingresa tu respuesta");
  } else {
    nameUserWeb.innerHTML = "Nombre del usuario: " + nameUser;
    localStorage.setItem("nameItem", nameUser);
  }

  let album = prompt("¿A qué albúm pertenece esta canción?");
  album = album.toLowerCase();

  if (album == null || album == "") {
    alert("Por favor ingresa tu respuesta");
    return;
  } else if (album == "omega") {
    localStorage.setItem("albumItem", album);
  } else {
    alert("Incorrecto. La respuesta correcta es: Omega");
    return;
  }

  let yearSong = prompt("¿En que año se produjo esta canción?");
  if (yearSong == null || yearSong == "") {
    alert("Por favor ingresa tu respuesta");
    return;
  } else if (yearSong == "2021") {
    localStorage.setItem("yearSongItem", yearSong);
  } else {
    alert("Incorrecto. La respuesta correcta es: 2021");
    return;
  }

  let nameComposer = prompt("¿Quién es su compositor?");
  nameComposer = nameComposer.toLowerCase();

  if (nameComposer == null || nameComposer == "") {
    alert("Por favor ingresa tu respuesta");
    return;
  } else if (nameComposer == "simone simons") {
    localStorage.setItem("nameComposerItem", nameComposer);
  } else {
    alert("Incorrecto. La respuesta correcta es: Simone Simons");
    return;
  }

  let songTime = prompt("¿Cuánto tiempo dura la canción?");
  if (songTime == null || songTime == "") {
    alert("Porfavor ingresa tu respuesta");
    return;
  } else if (songTime == "4:49") {
    localStorage.setItem("songTimeItem", songTime);
  } else {
    alert("Incorrecto. La respueta correcta es: 4:49");
    return;
  }

  alert("Haz acertado todas las preguntas. ¡Muy bien!");

  nameUserWeb.innerHTML = "Nombre del usuario: " + nameUser;

  albumWeb.innerHTML = "Albúm: " + album;

  yearSongWeb.innerHTML = "Año de la canción: " + yearSong;

  nameComposerWeb.innerHTML = "Nombre del compositor: " + nameComposer;

  songTimeWeb.innerHTML = "Duración de la canción: " + songTime;

  
};

const validateStorage = () => {
  if (localStorage.getItem("nameItem")) {
    nameUserWeb.innerHTML = "Nombre del usuario: "  + localStorage.getItem("nameItem");
    albumWeb.innerHTML = "Albúm: " + localStorage.getItem("albumItem");
    yearSongWeb.innerHTML = "Año de la canción: " + localStorage.getItem("yearSongItem");
    nameComposerWeb.innerHTML =
    "Nombre del compositor: " + localStorage.getItem("nameComposerItem");
    songTimeWeb.innerHTML = "Duración de la canción: " + localStorage.getItem("songTimeItem");
  }
};

validateStorage();

survey.onclick = function () {
  startSurvey();
};