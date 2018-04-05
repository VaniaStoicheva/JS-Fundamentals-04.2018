function pointInRectangle(input){
let [x,y,xMin,xMax,yMin,yMAx]=input
if(x>=xMin && x<=xMax && y>=yMin && y<=yMAx){
    console.log('inside')
}else{
    console.log('outside')
}
}
let arr=[8,-1,2,12,-3,3]
pointInRectangle(arr)