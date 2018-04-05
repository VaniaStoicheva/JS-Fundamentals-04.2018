function translate(numb){
    let inch=numb/12
    let second=numb%12
    console.log(`${Math.floor(inch)}'-${second}"`)
}
translate(55)