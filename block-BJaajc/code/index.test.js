const testfn = require("./index");

//getFullName
test("John and Snow is Equals John Snow ", () => {
  expect(testfn.getFullName("John", "Snow")).toBe("John Snow");
});

test("Arya and Stark is Equals Arya Stark ", () => {
  expect(testfn.getFullName("Arya", "Stark")).toBe("Arya Stark");
});

test("Rhaegar and Targaryean is Equals Rhaegar Targaryean ", () => {
  expect(testfn.getFullName("Rhaegar", "Targaryean")).toBe(
    "Rhaegar Targaryean"
  );
});

test("Rhaegar and Targaryean is not Equals Rhaegar Stark ", () => {
  expect(testfn.getFullName("Rhaegar", "Targaryean")).not.toBe("Rhaegar Stark");
});

test("Khal and Targaryean is not Equals Khal Drogo ", () => {
  expect(testfn.getFullName("Khal", "Targaryean")).not.toBe("Khal Drogo");
});

test("Cersei and Baratheon is not Equals Cersei Lannister ", () => {
  expect(testfn.getFullName("Cersei", "Baratheon")).not.toBe(
    "Cersei Lannister"
  );
});

//isPalindrome
test("madam is Palindrome to be true", () => {
  expect(testfn.isPalindrome("madam")).toBe(true);
});

test("Hannah is Palindrome to be true", () => {
  expect(testfn.isPalindrome("Hannah")).toBe(true);
});
test("Repaper is Palindrome to be true", () => {
  expect(testfn.isPalindrome("Repaper")).toBe(true);
});

test("Hannah is Palindrome to be true", () => {
  expect(testfn.isPalindrome("Hannah")).not.toBe(false);
});

test("Banana is Palindrome to be false", () => {
  expect(testfn.isPalindrome("Banana")).not.toBe(true);
});

test("1230321 is Palindrome to be true", () => {
  expect(testfn.isPalindrome("1230321")).not.toBe(false);
});

//getCircumference
test("circumference of circle with radius 22 is 63", () => {
  expect(testfn.getCircumference(10)).toBe(`The circumference is 63`);
});

test("circumference of circle with radius 1010 is 6346", () => {
  expect(testfn.getCircumference(1010)).toBe(`The circumference is 6346`);
});

test("circumference of circle with radius 142 is 892", () => {
  expect(testfn.getCircumference(142)).toBe(`The circumference is 892`);
});

test("circumference of circle with radius 22 is not 50", () => {
  expect(testfn.getCircumference(22)).not.toBe(`The circumference is 50`);
});

test("circumference of circle with radius 94 is not 500", () => {
  expect(testfn.getCircumference(94)).not.toBe(`The circumference is 500`);
});

test("circumference of circle with radius 9 is not 58", () => {
  expect(testfn.getCircumference(9)).not.toBe(`The circumference is 58`);
});

//getArea
test("area of circle with radius 10 is to be 314", () => {
  expect(testfn.getArea(10)).toBe(`The area is 314`);
});
test("area of circle with radius 24 is to be 1810", () => {
  expect(testfn.getArea(24)).toBe(`The area is 1810`);
});
test("area of circle with radius 99 is to be 30791", () => {
  expect(testfn.getArea(99)).toBe(`The area is 30791`);
});

test("area of circle with radius 9 is not 58", () => {
  expect(testfn.getArea(9)).not.toBe(`The area is 58`);
});
test("area of circle with radius 10 is not 315", () => {
  expect(testfn.getArea(10)).not.toBe(`The area is 315`);
});
test("area of circle with radius 100 is not 3150", () => {
  expect(testfn.getArea(100)).not.toBe(`The area is 3150`);
});
