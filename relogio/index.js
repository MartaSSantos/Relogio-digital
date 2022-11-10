const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const titulo = document.getElementById('teste')
console.log(titulo)

const relogio = setInterval(function time ()  {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    
    if (hr < 10) hr = '0' + hr;

    if(min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;


    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})

function menssagemNatela(){
    alert('Não vá se atrasar heim!')
}

//Chamando a função ao passar o mouse pelo titulo
titulo.onmouseover  = menssagemNatela

// Como é bom ver tudo acontecer, Marta vc vai longe acredite sempre em vc Te amo S2 PS: de mim para mim