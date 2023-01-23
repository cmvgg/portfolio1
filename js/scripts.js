function mostrar() {
	document.getElementById("sidebar").style.width = "30%";
    document.getElementById("menubutton").style.marginLeft = "30%";
    document.getElementById("mobile").style.marginLeft = "30%";
    document.getElementById("linkedin").style.marginLeft = "30%";
    document.getElementById("monitor").style.marginLeft = "30%";
    document.getElementById("abrir").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
}

function ocultar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("menubutton").style.marginLeft = "0";
    document.getElementById("mobile").style.marginLeft = "0";
    document.getElementById("linkedin").style.marginLeft = "0";
    document.getElementById("monitor").style.marginLeft = "0";
    document.getElementById("abrir").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}

