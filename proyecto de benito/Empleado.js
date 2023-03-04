class Empleadoo {
    nombre_de_empleado;
    id;
    horarioEntrada;
    horarioSalida;
    constructor(empleadoo, ids, Horaentrada, Horasalida) {
        this.nombre_de_empleado = empleadoo;
        this.horarioEntrada = Horaentrada; 
        this.horarioSalida = Horasalida;
        this.id = ids;
    }
}