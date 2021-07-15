let datos = document.getElementById("datos");
let Nombre = document.getElementById("Nombre");
let Album = document.getElementById("Album");
let Anno = document.getElementById("Anno");
let Compositor = document.getElementById("Compositor");
let Duracion = document.getElementById("Duracion");


//funciones
const ingresarDatos = () => {
    validar();    
    let nombreUsuario = prompt("Ingrese tu nombre");
    if (nombreUsuario==null || nombreUsuario == ""){
        alert("Porfavor ingresaun valor valido");
        return;
    }else{
        localStorage.setItem('Nombre', nombreUsuario);
    }

    let album = prompt("Ingrese el album de la canción code of life");
    album = album.toLowerCase();
    if (album==null || album == ""){
        alert("Porfavor ingresa un valor valido")
        return;
    }else if(album == "omega"){
        localStorage.setItem('Album', album);
    }
    else{
        localStorage.setItem('check', 0);
        validar();    
        alert("Incorrecto, el album es: Omega");        
        return;
    }

    let anno = prompt("Ingrese el año de publicacion");  
    if (anno==null || anno == ""){
        alert("Porfavor ingresa un valor valido")
        return;
    }
    else if(anno == "2021"){
        localStorage.setItem('Año', anno);
    }
    else{
        alert("Incorrecto, el año de publicacion es: 2021");
        localStorage.setItem('check', false);
        return;
    }

    let compositor = prompt("Ingrese el compositor de la canción code of life");
    compositor = compositor.toLowerCase();    
    if (compositor==null || compositor == ""){
        alert("Porfavor ingresaun valor valido")
        return;
    }
    else if(compositor == "mark jansen"){
        localStorage.setItem('Compositor', compositor);
    }
    else{
        alert("Incorrecto, compositor es: Mark Jansen");
        localStorage.setItem('check', false);
        return;
    }

    let duracion = prompt("Ingrese la duracion en minutos con segudos (Ejm. 5:24)");    
    if (duracion==null || duracion == ""){
        alert("Porfavor ingresa un valor valido")
        return;
    }
    else if(duracion == "5:58"){
        localStorage.setItem('Duracion', duracion);
    }
    else{
        alert("Incorrecto, la cancion dura 5:58");
        localStorage.setItem('check', false);
        return;
    }

    alert("Eres un gran fan de esta cancion! 5/5 ");

    // validar todo

    document.getElementById("Nombre").innerHTML = "Nombre: " + nombreUsuario;
    document.getElementById("Album").innerHTML = "Album: " + album;
    document.getElementById("Anno").innerHTML = "Año: " + anno;
    document.getElementById("Compositor").innerHTML = "Compositor: " + compositor;
    document.getElementById("Duracion").innerHTML = "Duracion: " + duracion;

    localStorage.setItem('check', true);

}


function validar() {
    if(localStorage.getItem("check")){
    document.getElementById("Nombre").innerHTML = "Nombre: " + localStorage.getItem("Nombre");
    document.getElementById("Nombre").style.visibility = "visible";
    document.getElementById("Album").innerHTML = "Album: "  + localStorage.getItem("Album");
    document.getElementById("Album").style.visibility = "visible";
    document.getElementById("Anno").innerHTML = "Año: " + localStorage.getItem("Año");
    document.getElementById("Anno").style.visibility = "visible";
    document.getElementById("Compositor").innerHTML = "Compositor: " + localStorage.getItem("Compositor");
    document.getElementById("Compositor").style.visibility = "visible";
    document.getElementById("Duracion").innerHTML = "Duracion: " + localStorage.getItem("Duracion");
    document.getElementById("Duracion").style.visibility = "visible";
    }
    else{
        document.getElementById("Nombre").innerHTML = "Nombre: " + " ";
        document.getElementById("Nombre").style.visibility = "hidden";
        document.getElementById("Album").innerHTML = "Album: "  + " ";
        document.getElementById("Album").style.visibility = "hidden";
        document.getElementById("Anno").innerHTML = "Año: " + " ";
        document.getElementById("Anno").style.visibility = "hidden";
        document.getElementById("Compositor").innerHTML = "Compositor: " + " ";
        document.getElementById("Compositor").style.visibility = "hidden";
        document.getElementById("Duracion").innerHTML = "Duracion: " + " ";
        document.getElementById("Duracion").style.visibility = "hidden";
    }
}


validar();

// eventos
datos.onclick = function (){
ingresarDatos();
}