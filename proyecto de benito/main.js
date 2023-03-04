var suc = [];//se declaran las variables a utilizar
var ubi = [];
var nom = [];
var ids = [];
var times = [];
var mar = [];
var co = [];
var ta = [];
var pre = [];

function nombredelasucursa() {//se guardan los datos de la empresa
    let nam = document.getElementById('nam');//el nombre de la empresa
    let u = document.getElementById('u');//se guarda la ubicacion de la escuela
    let s1 = new Sucursaal(nam.value, u.value);//la accion de guardar los dos datos en un nuevo arreglo 

    suc.push(s1);

    localStorage.setItem(suc, JSON.stringify(suc));

    sessionStorage.setItem(ubi, JSON.stringify(ubi));
    console.log(suc, ubi);

    alert("se guardo sucursal");//cuando se presione el boton de guardar sucursal saldra la siguiente alerta en la parte superior
    document.getElementById('nam').value = " ";
    document.getElementById('u').value = " ";
}

function ingresaempleado() {//se ingresan los datos del empleado
    let empleadoo = document.getElementById('empleadoo');//se crea el get para ingresar un nuevo empleado al arreglo 
    let ids = document.getElementById('ide');//se crea el get para ingresar un nuevo id de un empleado al arreglo
    let time = document.getElementById('time');//se crea el get para ingresar un nuevo horario de entrada y salida de un  empleado al arreglo
    let e1 = new Empleadoo(empleadoo.value, ide.value);//se crea el arreglo para guardar los datos de el empleado 

    nom.push(e1);
    localStorage.setItem(nom, JSON.stringify(nom));//se guardan los datos en el local storage 
    sessionStorage.setItem(ids, JSON.stringify(ids));

    console.log(nom, ids, time);

    alert("se guardo el empleado");//se arroja la alerta cuando se haya guardado un nuevo empleado 
    document.getElementById('empleadoo').value = " ";
    document.getElementById('ide').value = " ";
 
}
function nombredelaropa() {
    let tal = document.getElementById('tal');//de la misma manera se guardan los datos de la ropa 
    let marc = document.getElementById('marc');
    let cortes = document.getElementById('cortes');
    let prenda = document.getElementById('prend')
    let r1 = new Ropas(tal.value, marc.value, cortes.value, prenda.value);//se guardan los datos de una prenda nueva
    mar.push(r1);
    localStorage.setItem(mar, JSON.stringify(mar));
    localStorage.setItem(co, JSON.stringify(co));
    localStorage.setItem(ta, JSON.stringify(ta));
    localStorage.setItem( pre, JSON.stringify(pre));
    console.log(mar, co, ta, pre);
    alert("se guardo los datos de la prenda");//cuando se guarde una nueva prenda se arrojara una alerta donde se muestre que se guardo una nueva prenda
    document.getElementById('tal').value = " ";
    document.getElementById('marc').value = " ";
    document.getElementById('cortes').value = " ";
    document.getElementById('prend').value = " ";
}

