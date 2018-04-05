function triangle(n){
    for(let i=0;i<=n;i++){
        console.log('*'.repeat(i))
    }
    for(let i=n;i>=0;i--){
        console.log('*'.repeat(i))
    }
} 
triangle(5)