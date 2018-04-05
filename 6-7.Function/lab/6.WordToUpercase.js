function words(str){
    console.log(str.toUpperCase()
    .split(/\W+/)
    .filter(w=>w!='')
    .join(", "));  
}
words('Hi, how are you?')