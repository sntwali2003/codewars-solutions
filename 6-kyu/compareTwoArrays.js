// *First 
/*function comp(array1, array2){
    let x = []
    let s = [...new Set(array2)]
    for (let i = 0 ; i<s.length; i++){
        let count = 0;
        for(let j = 0 ; j<array1.length ; j++){
            if (s[i] === (array1[j]*array1[j])){
                count ++
            }
        }
        x[i] = count
    }
    let sum = 0;
    for (let n of x ){
        sum = sum + n
    }
    if (sum === array2.length){
        return true
    }
    else {
        return false
    }
}
console.log (comp([121, 144, 19, 161, 19, 144, 19, 11],
[121, 14641, 20736, 361, 25921, 361, 20736, 361]))*/


// **Second 
function comp(a,b){
  if ( !a || !b || a.length != b.length) return false
  let f= {};
  for (const n of a ){
    s = n*n;
    f[s] = (f[s]||0) + 1 ;
  }
  for (const n of b ){
    if (f[n]){
      f[n]--;
    }
    else {
      return false;
    }
  }
  return true;
}
console.log(comp( [121, 144, 19, 161, 19, 144, 19, 11]  , [121, 14641, 20736, 361, 25921, 361, 20736, 361]))
