export default class CL_ventas{
    constructor(){
        this.acum1=0;
        this.mayorV=0;
    }
    procesar(v){
        if(v.tipo==1){
            this.acum1+=v.monto;
        if(v.monto>this.mayorV)
          this.mayorV=v.monto;
        
        }
        
    }
}