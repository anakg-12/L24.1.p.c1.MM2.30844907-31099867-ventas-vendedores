export default class CL_vendedor{
    constructor(n,t,m){
        this.nombre=n;
        this.tipo=t;
        this.monto=m;
    }
    getnombre(){
        return this.nombre;
    }
    setnombre(n){
        this.nombre=n;
    }
    gettipo(){
        return this.tipo;
    }
    settipo(t){
        this.tipo=t;
    }
    getmonto(){
        return this.monto;
    }
    setmonto(m){
        this.monto=m;
    }
}