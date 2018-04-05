function grads(grad){
    grad=grad % 400
let degrees=grad*0.9
let output=degrees>0 ? degrees : 360+degrees 
return output
}
console.log(grads(-50))