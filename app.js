function getNumber(num){
    var result = document.getElementById("result");
    result.value +=  num; //+ will keep the current value and add a new valur also
}

// clear function

function clearResult(){
    var result = document.getElementById("result");
    result.value = ""
}

function getResult(){
    var result = document.getElementById("result");
    result.value =  eval(result.value) //eval is used for calculation
}