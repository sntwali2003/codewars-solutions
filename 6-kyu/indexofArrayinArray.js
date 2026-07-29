var searchArray = function (arrayToSearch, query) {
if ( query.length !== 2 || !Array.isArray(query))  throw new Error("Query has a problem");
for( const i of arrayToSearch){
  if (!Array.isArray(i) || i.length !== 2 )  throw new Error("problem with arrayToSearch");
}
for ( let i = 0 ; i < arrayToSearch.length; i++){
  if ( query.length === arrayToSearch[i].length && query.every((value,index)=>value === arrayToSearch[i][index])) return i 
}
  return -1
}
const bigArray = [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]];
const searchFor = [45,4];
console.log(searchArray(bigArray,searchFor))