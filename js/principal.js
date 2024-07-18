import CL_vendedor from "./CL_vendedor.js";
import CL_ventas from "./CL_ventas.js";

let vendedor1 = new CL_vendedor ( "Mary",1,150 );
let vendedor2 = new CL_vendedor ( "Jose",1,135 );
let vendedor3 = new CL_vendedor ( "Carlos",2,160 );
let vendedor4 = new CL_vendedor ( "Pedro",2,75 );

let ventas = new CL_ventas ();
ventas.procesar (vendedor1);
ventas.procesar (vendedor2);
ventas.procesar (vendedor3);
ventas.procesar (vendedor4);

let salida = document.getElementById ("salida"); 
salida.innerHTML+=" <br> monto total de las ventas de los vendedores tipo mayorista (1): "+ventas.acum1+"$";
salida.innerHTML+=" <br> monto mayor venta realizada por los vendedores tipo mayorista (1): "+ventas.mayorV+"$";

