function findShort(s){
    let A="";
    let L = [];
    for(let i = 0 ; i<=s.length; i++){
        if (s[i]!==" "&& i!==s.length){
            A = A + s[i];
        }
        else {
            L.push(A.length);
            A="";
        } 
    }
    let sm = L[0];
    for(let i = 0; i<L.length; i++){
        if(L[i]<sm){
            sm = L[i];
        }
    }
    return sm;
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
