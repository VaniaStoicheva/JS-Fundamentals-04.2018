function calculator(a,b,op){
let add=function(c,d){return c+d}
let subtract=function(c,d){return c-d}
let multiplay=function(c,d){return c*d}
let divide=function(c,d){return c/d}

switch(op){
    case '+':return add(a,b)
    case '*':return multiplay(a,b)
    case '/':return divide(a,b)
    case '-':return subtract(a,b)
}
}

console.log(calculator(2,3,'*'))