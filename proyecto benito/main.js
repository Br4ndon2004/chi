var suc = [];
var ubi = [];
var nom = [];
var ids = [];
var times = [];
var mar = [];
var co = [];
var ta = [];
var pre = [];


function nombredelasucursa() {
   
    let nam = document.getElementById('nam');
    let u = document.getElementById('u');
    let s1 = new Sucursaal(nam.value, u.value);



    localStorage.setItem(suc, JSON.stringify(suc));

    sessionStorage.setItem(ubi, JSON.stringify(ubi));


    alert("se saguardo sucursal");
    document.getElementById('nam').value = ' '
    document.getElementById('u').value = ' '
}

function ingresaempleado() {
    let empleadoo = document.getElementById('empleadoo');
    let ide = document.getElementById('ide');

    let e1 = new Empleadoo(empleadoo.value, ide.value);

    nom.push(e1);
    localStorage.setItem(nom, JSON.stringify(nom));
localStorage.setItem(ids, JSON.stringify(ids));
    console.log(nom, ids);

    alert("se aguardo el empleado");
    document.getElementById('empleadoo').value = ' '
    document.getElementById('ide').value = ' '
    document.getElementById('time').value = ' '
}

function nombredelaropa() {
    let prenda = document.getElementById('prend').value;
    let nam = document.getElementById('nam').value;
    let u = document.getElementById('u').value;
    let tal = document.getElementById('tal').value;
    let marc = document.getElementById('marc').value;
    let cortes = document.getElementById('cortes').value;
    let r1 = new Ropas(nam, u, tal, marc, cortes,prenda);
    mar.push(r1);
    localStorage.setItem(suc, JSON.stringify(suc));

    localStorage.setItem(ubi, JSON.stringify(ubi));
    localStorage.setItem(mar, JSON.stringify(mar));
    localStorage.setItem(co, JSON.stringify(co));
    localStorage.setItem(ta, JSON.stringify(ta));
    localStorage.setItem(pre, JSON.stringify(pre));
    var arrayg = localStorage.getItem('ubi');
    var arrayg = localStorage.getItem('suc');
    var arrayg = localStorage.getItem('mar');
    var arrayg = localStorage.getItem('co');
    var arrayg = localStorage.getItem('ta');
    var arrayg = localStorage.getItem('pre');
    var ubi = JSON.parse(arrayg);
    console.log(nam, u, mar, co, ta,pre );
    alert("se aguardo la ropa");
    document.getElementById('tal').value = ' '
    document.getElementById('marc').value = ' '
    document.getElementById('cortes').value = ' '
    document.getElementById('nam').value = ' '
    document.getElementById('u').value = ' '
    document.getElementById('pre').value = ' '




}