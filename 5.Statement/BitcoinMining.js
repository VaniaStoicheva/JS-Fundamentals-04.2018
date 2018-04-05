function bitcoin(input){
    let gold1g=67.51
    let bitcoin1=11949.16
    let totalSum=0
    for(let day=0; day<=input.length; day++){
        totalSum+=Number(input[day])*gold1g
        if(input[day]===3){
            input[day]=Number(input[day])-(input[day])*0.3
            totalSum+=Number(input[day])*gold1g
        }
    }
    console.log(totalSum)
}
bitcoin('100', '200', '300')