// My Initial solution

// function findShort(s){
//     let A="";
//     let L = [];
//     for(let i = 0 ; i<=s.length; i++){
//         if (s[i]!==" "&& i!==s.length){
//             A = A + s[i];
//         }
//         else {
//             L.push(A.length);
//             A="";
//         } 
//     }
//     let sm = L[0];
//     for(let i = 0; i<L.length; i++){
//         if(L[i]<sm){
//             sm = L[i];
//         }
//     }
//     return sm;
// }
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

// Using ES6

function findShort(s) {
    let A = [];
    A =  Math.min(...s.split(" ").map(w => w.length));
    return A;
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
 


// let A = ['word','steven','Hi'];
// let x = [];
// for (let i = 0; i<A.length; i++){
//      x.push(A[i].length);
// }
// //x = A.map(a => a.length);
// console.log(x);