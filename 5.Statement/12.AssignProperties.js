function assignProp(input){
    let [p1,v1,p2,v2,p3,v3]=input
    let obj={}
    obj[p1]=v1
    obj[p2]=v2
    obj[p3]=v3
    return obj
}
console.log(assignProp(['name', 'Pesho', 'age', '23', 'gender', 'male']))