function distance([v1,v2,t]) {
    let timeInHour=t/3600;
    let distance=Math.abs(v1-v2)*timeInHour;
    console.log(distance*1000)
}
let arr=[0, 60, 3600]
distance([0, 60, 3600])