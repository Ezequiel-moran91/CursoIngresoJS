/*
Al presionar el botón pedir  números  
hasta que el usuario quiera,
sumar los que son positivos y
 multiplicar los negativos.*/
function mostrar()
{
	let numeroIngresado;
	let positivos;
	let negativos;
   let seguir;
   
   positivos= 0;
   negativos= 1;
   seguir= true;

   while(seguir== true)
   {
   	numeroIngresado= prompt("Ingrese un numero");
   	numeroIngresado= parseInt(numeroIngresado);

      if (numeroIngresado > 0)
      {
          positivos= positivos + numeroIngresado;
      }
      else
      {
      	 negativos= negativos * numeroIngresado;
      }

   	seguir= confirm("Agregar mas numeros?");
   }

   txtIdSuma.value= positivos;
   txtIdProducto.value= negativos;

}
/*
var numeroIngresado;
	var seguir;
	var positivos;
	var negativos;
	
	positivos=0;
	negativos=1;

	seguir= true;

    while(seguir == true)
    {
       numeroIngresado= prompt("Ingrese un numero: ");
       numeroIngresado= parseInt(numeroIngresado);       
    
    if (numeroIngresado > 0)
     {
     	positivos =positivos + numeroIngresado;  
     }
     else 
     {
     	 negativos= negativos * numeroIngresado;
     }
      seguir = confirm("quiere seguir? ");
    }
     
	txtIdSuma.value= positivos;
	txtIdProducto.value= negativos;
    */
    /*
    let numeroIngresado;
	let positivos;
	let negativos;
	let seguir;

	seguir= true;

	positivos= 0;
	negativos= 1;

	while(seguir == true)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado= parseInt(numeroIngresado);

		if (numeroIngresado > 0)
		{
         positivos= positivos + numeroIngresado;
		}
		else
		{
			negativos = negativos * numeroIngresado;
		}

		seguir = confirm("quiere seguir? ");
	}
   txtIdSuma.value=positivos;
	txtIdProducto.value=negativos;
	*/