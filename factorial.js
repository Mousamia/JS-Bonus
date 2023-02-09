// factorial function using recursion
function factorial(i){
    if( i == 1){
        return 1;
    }

    return  i * factorial(i-1);
}

const result = factorial(5);
console.log(result);

// function er vitor theke function call korle take ole recursion