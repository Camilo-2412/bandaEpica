let button = document.getElementById("juega");
let lblNombreUsuario =document.getElementById("usuario");
let lblAlbum =document.getElementById("album");
let lblAño=document.getElementById("año");
let lblTiempo = document.getElementById("tiempo");
let lblCompositor = document.getElementById("compositor");



const ingresarDatos = () =>{
    let nombreUsuario = prompt("Ingrese nombre de usuario; ");
    let album =  prompt("Ingrese el nombre del album: ");
    let año = prompt("Ingrese el año de publicación: ");
    let tiempo=prompt("Ingrese la duración de la canción: ");
    let compositor = prompt("Ingrese el compositor: ");

   
    if (album.toLowerCase()==="omega" && año === "2021" && tiempo ==="5:06" && compositor.toLowerCase()==="simone simons") {
        if (nombreUsuario == null || nombreUsuario =="") {
            validarStorageUsuario();
        } else {
            lblNombreUsuario.innerHTML = "Usuario:" +nombreUsuario;
            localStorage.setItem('lblNombreUsuario' , nombreUsuario);
        }

        if (album == null || album =="") {
            validarStorageAlbum();
        } else {
            lblAlbum.innerHTML = "Album: " + album;
            localStorage.setItem('lblAlbum' , album);
        }

        if (año == null || año =="") {
            validarStorageAño();
        } else {
            lblAño.innerHTML = "Año " + año;
            localStorage.setItem('lblAño' , año);
        }

        if (tiempo == null || tiempo =="") {
            validarStorageTiempo();
        } else {
            lblTiempo.innerHTML = "Duración " + tiempo +" min";
            localStorage.setItem('lblTiempo' , tiempo);
        }

        if (compositor == null || compositor =="") {
            validarStorageCompositor();
        } else {
            lblCompositor.innerHTML ="Compositor: " +  compositor;
            localStorage.setItem('lblCompositor' , compositor);
        }


    } else {
        alert("Datos erroneos");
    }
};




const validarStorageUsuario = () =>{
    if (localStorage.getItem('lblNombreUsuario')) {
        lblNombreUsuario.innerHTML = "Usuario " + localStorage.getItem('lblNombreUsuario');
    } else{
        lblNombreUsuario.innerHTML = '';
    
    }
}

const validarStorageAlbum = () =>{
    if (localStorage.getItem('lblAlbum')) {
        lblAlbum.innerHTML = "Album: "+ localStorage.getItem('lblAlbum');
    } else{
        lblAlbum.innerHTML = '';
    
    }
}

const validarStorageAño = () =>{
    if (localStorage.getItem('lblAño')) {
        lblAño.innerHTML ="Año: " + localStorage.getItem('lblAño');
    } else{
        lblAño.innerHTML = '';
    
    }
}

const validarStorageTiempo = () =>{
    if (localStorage.getItem('lblTiempo')) {
        lblTiempo.innerHTML = "Duración: " +localStorage.getItem('lblTiempo') +"min";
    } else{
        lblTiempo.innerHTML = '';
    
    }
}

const validarStorageCompositor = () =>{
    if (localStorage.getItem('lblCompositor')) {
        lblCompositor.innerHTML ="Compositor: " + localStorage.getItem('lblCompositor');
    } else{
        lblCompositor.innerHTML = '';
    
    }
}


validarStorageUsuario();
validarStorageAlbum();  
validarStorageAño();
validarStorageTiempo();
validarStorageCompositor();


button.onclick = function (){
    ingresarDatos();
};