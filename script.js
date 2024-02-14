
function horaActual(){

    var date = new Date(); // creo un objeto DATE
    var h = date.getHours(); // tomo su atributo horas
    var m = date.getMinutes();
    var s = date.getSeconds();
    var mediriano = 'am'

    if(h == 0){
        h = 12
    }else if (h>12){
        h=h-12
        mediriano = 'pm'
    }
    
    h = (h<10)?'0'+h : h
    m = (h<10)?'0'+m : m
    s = (h<10)?'0'+s : s
    document.getElementById("relojDigital").innerHTML = `${h} : ${m} : ${s} : ${mediriano}`
    
    setTimeout(horaActual, 1000); //esta funcion se ejecuta cada tantos milisegundos
};

horaActual();