/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1;
	var num2;
	var Rdo; 
    //Declaro variable

	num1=parseInt (document.getElementById("txtIdNumeroDividendo").value);

	num2=parseInt (document.getElementById("txtIdNumeroDivisor").value);
    // Comvierto a entero

	Rdo= num1 % num2;
    //Asigno valores a traves de una operacion matematica

    alert("El resto es " + Rdo );
    //Imprimo el mensaje
}
