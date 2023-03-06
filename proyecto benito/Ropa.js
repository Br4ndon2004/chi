class Ropas extends Sucursaal {
    tipoDePrenda;
    Talla;
    Marca;
    Corte;
    constructor(nam, u, tal, Marcaa, Cortee,prenda ) {
        super(nam, u, tal, Marcaa, Cortee);
        this.Talla = tal;
        this.Marca = Marcaa;
        this.Corte = Cortee;
        this.tipoDePrenda = prenda;
    }

}