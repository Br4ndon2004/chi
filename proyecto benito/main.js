var suc = [];
var ubi = [];
var nom = [];
var ids = [];
var times = [];
var mar = [];
var co = [];
var ta = [];

function nombredelasucursa() {
    let nam = document.getElementById('nam');
    let u = document.getElementById('u');
    let s1 = new Sucursaal(nam.value, u.value);

    suc.push(s1);

    localStorage.setItem(suc, JSON.stringify(suc));

    sessionStorage.setItem(ubi, JSON.stringify(ubi));
    console.log(suc, ubi);

    alert("se saguardo sucursal");
    document.getElementById('nam  , u').value = ' '

}

function ingresaempleado() {
    let empleadoo = document.getElementById('empleadoo');
    let ide = document.getElementById('ide');
    let time = document.getElementById('time');
    let e1 = new Empleadoo(empleadoo.value, ide.value);

    nom.push(e1);
    localStorage.setItem(nom, JSON.stringify(nom));
    sessionStorage.setItem(ids, JSON.stringify(ids));

    console.log(nom, ids, time);

    alert("se aguardo el empleado");
    document.getElementById('empleadoo,ide,time').value = ' '

}

function nombredelaropa() {
    let tal = document.getElementById('tal');
    let marc = document.getElementById('marc');
    let cortes = document.getElementById('cortes');
    let r1 = new Ropas(tal.value, marc.value, cortes.value);
    mar.push(r1);
    localStorage.setItem(mar, JSON.stringify(mar));
    localStorage.setItem(co, JSON.stringify(co));
    localStorage.setItem(ta, JSON.stringify(ta));
    console.log(mar, co, ta);
    alert("se aguardo la ropa");
    document.getElementById('tal,marc,cortes').value = ''
}