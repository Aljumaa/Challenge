const list1 = ["a", "b", "c", "d", "f"];
const list2 = ["O", "Q", "R", "S"];

function findMissingLetter(list) {
  for (let i = 1; i < list.length; i++) {
    let codeNow = list[i].charCodeAt(0);
    let codePerv = list[i - 1].charCodeAt(0);
    if (codeNow - codePerv > 1) {
      let missingCode = codePerv + 1;
      return String.fromCharCode(missingCode);
    }
  }
}
console.log(findMissingLetter(list1));
console.log(findMissingLetter(list2));