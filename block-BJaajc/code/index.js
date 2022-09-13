function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
function isPalindrome(value) {
  let arr = value.split("");
  if (arr.length % 2 === 0) {
    return (
      arr
        .slice(0, arr.length / 2)
        .join("")
        .toLowerCase() ===
      arr
        .slice(arr.length / 2, arr.length)
        .reverse()
        .join("")
        .toLowerCase()
    );
  } else {
    return (
      arr
        .slice(0, (arr.length - 1) / 2)
        .join("")
        .toLowerCase() ===
      arr
        .slice((arr.length + 1) / 2, arr.length)
        .reverse()
        .join("")
        .toLowerCase()
    );
  }
}
function getCircumference(radius) {
  let circumference = 2 * Math.PI * radius;
  return `The circumference is ${Math.round(circumference)}`;
}

function getArea(radius) {
  let area = Math.PI * Math.pow(radius, 2);
  return `The area is ${Math.round(area)}`;
}

module.exports = {
  getFullName,
  isPalindrome,
  getCircumference,
  getArea,
};
