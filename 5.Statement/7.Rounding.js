function rounding([num,prec]){
    let number=prec<15 ? Number(num.toFixed(prec)) : Number(num.toFixed(15))
    console.log(number)
}
rounding([3.1415926535897932384626433832795, 2])