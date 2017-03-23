  var dato1=0;
  var dato2=0;
  var numeroI="";

function mostrarD(num){
  numeroI += num;
  document.getElementById("valor").value=numeroI;

}
/* utilizar substring*/

function operacion(){

    var suma = eval(dato1 + dato2);
    var resta = eval(dato1 - dato2);
    var multiplicacion= eval(dato1 * dato2 );
    var division= eval(dato1 / dato2);

}

function suma(){
  var resultado=number(numeroI) + number(numeroI);
  document.getElementById("valor").value=resultado;

}
