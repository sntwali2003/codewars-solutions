function nerdify(txt){
  const ntxt= txt.replaceAll("a","4").replaceAll("A","4").replaceAll("e","3").replaceAll("E","3").replaceAll("l","1")
  return  ntxt;
}
console.log(nerdify("Los Angeles"))