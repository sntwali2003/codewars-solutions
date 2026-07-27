// First 
checkRange=(a,x,y)=>a.filter(n=>n>=x&n<=y).length

//  Second 
checkRange=(a,x,y,z=0)=>a.map(e=>z+=e<x==e>y)|z


console.log(checkRange([2, 5, 6, 7, 1, 3, 4, 11, 56, 49],1,7))

