let group1 = [];
let group2 = ["Peter"];
let group3 = ["Peter", "John"];
let group4 = ["Peter", "John", "Alex"];
let group5 = ["Peter", "John", "Alex", "Jacob"];
let group6 = ["Peter", "John", "Alex", "Jacob", "Mark"];
let group7 = ["Peter", "John", "Alex", "Jacob", "Mark", "Max"];
function likes(group) {
  let count = group.length;
  if (count === 0) {
    return "no one likes this";
  } else if (count === 1) {
    return group[0] + " likes this";
  } else if (count === 2) {
    return group[0] + " ," + group[1] + " like this";
  } else if (count === 3) {
    return group[0] + " ," + group[1] + " and " + group[2] + " like this";
  } else {
    let othersCount = count - 2;
    return (
      group[0] + " ," + group[1] + " and " + othersCount + " others like this"
    );
  }
}
console.log(likes(group1));
console.log(likes(group2));
console.log(likes(group3));
console.log(likes(group4));
console.log(likes(group5));
console.log(likes(group6));
console.log(likes(group7));