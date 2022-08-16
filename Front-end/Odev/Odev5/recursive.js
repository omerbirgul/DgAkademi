let sayi = 5;
for(let i = 1; i <= sayi; i++){
    console.log(sayi *= i)
}

function recursive(data){
    if(data == 1){
        return data;
    }
    else{
        return (data *= recursive(data - 1))
    }
}
console.log(recursive(data));


// ***********************************************

function pow2(a,b){
    let result = 1;
    for(let i = 1; i <b; i++){
        result *= a;
    }
    return result;
}


function pow(x,n){
    if(n == 1){
        return x;
    }
    else{
        return x * pow(x,n-1);
    }
}