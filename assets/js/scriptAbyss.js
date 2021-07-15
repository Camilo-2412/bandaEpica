let btnQuiz = document.getElementById("btnQuiza");
let nombre = document.getElementById("nombre");

validarInfo();

function validarInfo() {
    if(localStorage.getItem("aprobado")){
        document.getElementById("nombreq").innerHTML = "Nombre: " + localStorage.getItem("Nombre");
        document.getElementById("nombreq").style.visibility = "visible";
        document.getElementById("albumq").innerHTML = "Album: " + localStorage.getItem("Album");;
        document.getElementById("albumq").style.visibility = "visible";
        document.getElementById("anoq").innerHTML = "Año: " + localStorage.getItem("Año");;
        document.getElementById("anoq").style.visibility = "visible";
        document.getElementById("compositorq").innerHTML = "Compositor: " + localStorage.getItem("Compositor");;
        document.getElementById("compositorq").style.visibility = "visible";
        document.getElementById("duracionq").innerHTML = "Duracion: " + localStorage.getItem("Duracion");;
        document.getElementById("duracionq").style.visibility = "visible";
    }
}

const quizAbyss = () =>{
    
    let nombreUsuario = prompt("Ingrese su nombre");
    if (nombreUsuario==null || nombreUsuario == ""){
        alert("Porfavor ingresa tu respuesta");
        return;
    }else{
        localStorage.setItem('Nombre', nombreUsuario);
    }


    let album = prompt("Ingrese el album de la canción");
    album = album.toLowerCase();

    if (album==null || album == ""){
        alert("Porfavor ingresa tu respuesta")
        return;
    }else if(album == "omega"){
        localStorage.setItem('Album', album);
    }
    else{
        alert("Incorrecto, el album es: Omega");
        return;
    }

    let ano = prompt("Ingrese el año de publicacion de la canción");
    
    
    if (ano==null || ano == ""){
        alert("Porfavor ingresa tu respuesta")
        return;
    }
    else if(ano == "2021"){
        localStorage.setItem('Año', ano);
    }
    else{
        alert("Incorrecto, el año de publicacion es: 2021");
        return;
    }


    let compositor = prompt("Ingrese el compositor de esta canción");
    compositor = compositor.toLowerCase();
    
    if (compositor==null || compositor == ""){
        alert("Porfavor ingresa tu respuesta")
        return;
    }
    else if(compositor == "mark jansen"){
        localStorage.setItem('Compositor', compositor);
    }
    else{
        alert("Incorrecto, compositor es: Mark Jansen");
        return;
    }


    let duracion = prompt("Ingrese la duracion en minutos con segudos (E.g. 3:24)");
    
    if (duracion==null || duracion == ""){
        alert("Porfavor ingresa tu respuesta")
        return;
    }
    else if(duracion == "5:26"){
        localStorage.setItem('Duracion', duracion);
    }
    else{
        alert("Incorrecto, la cancion dura 5:26");
        return;
    }

    alert("Eres un verdadero fan de esta cancion!");

    document.getElementById("nombreq").innerHTML = "Nombre: " + nombreUsuario;
    document.getElementById("nombreq").style.visibility = "visible";
    document.getElementById("albumq").innerHTML = "Album: " + album;
    document.getElementById("albumq").style.visibility = "visible";
    document.getElementById("anoq").innerHTML = "Año: " + ano;
    document.getElementById("anoq").style.visibility = "visible";
    document.getElementById("compositorq").innerHTML = "Compositor: " + compositor;
    document.getElementById("compositorq").style.visibility = "visible";
    document.getElementById("duracionq").innerHTML = "Duracion: " + duracion;
    document.getElementById("duracionq").style.visibility = "visible";

    localStorage.setItem('aprobado', true);
}
validarInfo();
btnQuiz.addEventListener("click", quizAbyss);