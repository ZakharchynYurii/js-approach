function recus(num){
    if(num <= 0){ return}

    if(num === 1){ return num}

    return  num * recus(num - 1);
}

let res = recus(5)
console.log(res);
