function lastMount(arr){
    let [day,month,year]=arr
    let newDate=new Date(year,month-1,0)
    let dayCount=newDate.getDate()
    return dayCount
}
let arr=[13, 12, 2004]
console.log(lastMount(arr))