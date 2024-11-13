/*
var tope = 20;
for(var i=1; i<tope; i++)
    {
    if(i%2 !==0){
            console.log(i);
    }
}
*/
function par(rNumero){
    if(rNumero%2==0){
        return"si"
    }
    else{
        return "no";
    }
}

var numero = 6;
var esPar= par(numero);
console.log(esPar);
