//console.log('correcto');

document.querySelector('#dolar').addEventListener('click', function(){
    obtenerDatos('dolar');
});
document.querySelector('#uf').addEventListener('click', function(){
    obtenerDatos('uf');
});

function obtenerDatos(valor){
    //console.log('diste click');
    let url = `https://mindicador.cl/api/${valor}`;

const api = new XMLHttpRequest();
api.open('GET', url, true);
api.send();
api.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){
        //console.log(this.responseText); //transformamos a json
        let datos = JSON.parse(this.responseText);
        //console.log(datos);
        console.log(datos.serie); //me trae fecha y valor.
        let resultado = document.querySelector('#resultado'); 
        resultado.innerHTML = '';

        //quiero que i se incremente en 1 afuera del for declaro i. 
        let i= 0;
        for(let item of datos.serie){
            //console.log(item.fecha);
            i++;
        resultado.innerHTML += `<li>${item.fecha.substr(0,10)} | $ ${item.valor}
        </li>`;

        if(i>10){
            break;
        }
    }
}
}
}