function cooking(arr){
    let number=arr[0]
    let operations={
        chop:(n)=>n/2,
        dice:(n)=>Math.sqrt(n),
        spice:(n)=>++n,
        bake:(n)=>n*3,
        fillet:(n)=>n*0.8
    }
    
    for(let i=1;i<=arr.length-1;i++){
    const currentOperation=arr[i]
   
       number=operations[currentOperation](number)
       console.log(number);
       
    }
}
let arr=[32, 'chop', 'chop', 'chop', 'chop', 'chop']
cooking(arr)