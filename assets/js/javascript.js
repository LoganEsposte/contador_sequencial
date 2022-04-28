/*
    Mudança de  cor
*/
function altereColor(number){
    if (number < 0){
        currentNumberPure.style.color = 'red';
    }else{
        currentNumberPure.style.color = 'black';
    }
}

/*
    Primeiro Contador
*/
var currentNumberPure = document.getElementById('current-number-pure');
var pure = 0;


function increment_pure(){
    pure = pure + 1;
    altereColor(pure);
    currentNumberPure.innerHTML = pure;
}

function decrement_pure(){
    pure = pure -1;
    altereColor(pure);
    currentNumberPure.innerHTML = pure;
}


/*
    Segundo Contador
 */

var currentNumberLimit = document.getElementById('current-number-limit');
var limit = 0;


function increment_limit(){
    if (limit < 10){
    limit = limit + 1;
    currentNumberLimit.innerHTML = limit;
    }
}

function decrement_limit(){
    if (limit > 0){
    limit = limit - 1;
    currentNumberLimit.innerHTML = limit;
    }
}