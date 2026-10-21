function maskify(xx) {
  if (xx.length <= 4) {
    return xx;
  } 
  return "#".repeat(xx.length - 4) + xx.slice(-4)
 
}

console.log(maskify("4556364607935616"));
console.log(maskify("64607935616"));
console.log(maskify("123"));