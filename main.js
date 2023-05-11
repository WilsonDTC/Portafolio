function cifrar(){
    var valor1 = document.getElementById("Res1").value;
    var valor_cif = valor1.replace(/a/g, "ai").replace(/e/g, "enter").replace(/o/g, "ober").replace(/u/g, "ufat").replace(/i/g, "imes");
    var vla_cif = valor_cif.replace(/aimes/g, "ai");
    if (valor1.length != 0) {
        document.getElementById("Res").value = vla_cif;
        document.getElementById("Res1").value = "";
        document.getElementById("muñeco").style.display = "none";
    } else {
        document.getElementById("muñeco").style.display = "block";
        alert("POR FAVOR INGRESE ALGO PARA ENCRIPTAR O DESENCRIPTAR");
    } 
}
function descifrar(){
    var valor2 = document.getElementById("Res1").value;
    var valor_des = valor2.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
        if (valor2.length != 0) {
        document.getElementById("Res").value = valor_des;
        document.getElementById("Res1").value = "";
        document.getElementById("muñeco").style.display = "none";
    } else {
        document.getElementById("muñeco").style.display = "block";
        alert("POR FAVOR INGRESE ALGO PARA ENCRIPTAR O DESENCRIPTAR");
    }
} 
function copiar(){
    var acopiar = document.getElementById("Res").value;
    var copiarTexto = document.createElement("textarea");
    copiarTexto.value = acopiar;
    document.body.appendChild(copiarTexto);
    copiarTexto.select();
    document.execCommand("copy");
    document.body.removeChild(copiarTexto);
    if (acopiar.length != 0) {
        document.getElementById("Res").value = "";
        document.getElementById("muñeco").style.display = "block";
    } else {
        document.getElementById("muñeco").style.display = "block";
        alert("POR FAVOR INGRESE ALGO PRIMERO PARA ENCRIPTAR O DESENCRIPTAR");
    }        
}
function Validacion(e)
{
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = [ a-zA]+$;

    especiales = [8,13];
    tecla_especial = false
    for(var i in especiales) {
    if(key == especiales[i]){
    tecla_especial = true;
    break;
    }
    }

    if(letras.indexOf(tecla) == -1 && !tecla_especial)
    {
    alert("Ingresar solo letras minúsculas POR FAVOR");
    return false;
    }
}
