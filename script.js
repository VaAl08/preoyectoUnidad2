function encriptar(){
passSistema ="0J6jXyz0(_Zc"
msgError = "error en la contraseña, vuelve a intentarlo"
var mensaje =document.getElementById("msg").value;
var password = document.getElementById("pass").value;
//alert(mensaje+"+"+password)
if(passSistema==password){
    //alert("contraseña correcta");
    document.getElementById("error").innerHTML = "";
var encryted = btoa(mensaje);
//alert(encryted);
document.getElementById("medo1").innerHTML = encryted;

}else{

    //alert("error");

document.getElementById("error").innerHTML = msgError;

}


}





function desencriptar(){




}
