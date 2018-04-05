function interest([sum,rate,compPeriod,totalYears]){
    let compaundingFrequency=12/compPeriod
    rate=rate/100
    let interest=sum*Math.pow(1+rate/compaundingFrequency,compaundingFrequency*totalYears)
    console.log(interest.toFixed(2))
}

interest([1500, 4.3, 3, 6])