//Create a function which returns the number of true values there are in an array.
const countTrue = (arr) => {
  let count = 0;
  arr.filter((item) => {
    if (item === true) count++;
  });
  return count;
};

console.log(`countTrue => ${countTrue([true, true, false, true, false])}`);

//Write a function redundant that takes in a string str and returns a function that returns str.
const redundant = (value) => {
  let val = value;
  const innerfunction = () => {
    console.log(val);
  };
  return innerfunction;
};

console.log(redundant("apple"));

/**
 * In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any dice roll.
 */
const possibleBonus = (player1Position, player2Position) => {
  return (
    player2Position - player1Position <= 6 &&
    player2Position - player1Position > 0
  );
};

/**
 * The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

[1, [2, 3]]
// 2 elements, number 1 and array [2, 3]
Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

Write a function that returns the total number of non-nested items in a nested array.
 */

const getLength = (arr) => {
  return arr.flat(Infinity).length;
};

/**
 * Create a function that takes voltage and current and returns the calculated power.
 */
const circuitPower = (voltage, current) => {
  return voltage * current;
};

/**
 * Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
 * Test Cases
 * sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
 * sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
 * sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
 */
const sevenBoom = (arr) => {
  return arr.toString().includes(7) ? "Boom!" : "there is no 7 in the array";
};

/**
 * Try finding your ancestors and offspring with code.
 * Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).
 * If the number is negative, return the related ancestor.
 * If positive, return the related descendant.
 * You are generation 0. In the case of 0 (male or female), return "me!".
 * Generation	      Male	                  Female
      -3	          great grandfather	      great grandmother
      -2	          grandfather	            grandmother
      -1	          father	                mother
      0	            me!	                    me!
      1	            son	                    daughter
      2	            grandson	              granddaughter
      3	            great grandson	        great granddaughter
  *Test Cases ->
    *generation(2, "f") ➞ "granddaughter"
    *generation(-3, "m") ➞ "great grandfather"
    *generation(1, "f") ➞ "daughter"
 */
const generation = (generation, character) => {
  const generationObject = {
    "-3": {
      m: "great grandfather",
      f: "great grandmother",
    },
    "-2": {
      m: "grandfather",
      f: "grandmother",
    },
    "-1": {
      m: "father",
      f: "mother",
    },
    0: {
      m: "me!",
      f: "me!",
    },
    1: {
      m: "son",
      f: "daughter",
    },
    2: {
      m: "grandson",
      f: "granddaughter",
    },
    3: {
      m: "great grandson",
      f: "great granddaughter",
    },
  };
  return generationObject[generation][character];
};

/**
 * A tetrahedron is a pyramid with a triangular base and three sides. A tetrahedral number is a number of items within a tetrahedron.
 * Create a function that takes an integer n and returns the nth tetrahedral number.
 * Test Cases ->
 * tetra(2) ➞ 4
 * tetra(5) ➞ 35
 * tetra(6) ➞ 56
 */

const tetra = (n) => {
  return (n * (n + 1) * (n + 2)) / 6;
};

/**
 * Create a function that takes two numbers as arguments and returns their sum.
 *
 * Test Cases ->
 * addition(3, 2) ➞ 5
 * addition(-3, -6) ➞ -9
 * addition(7, 3) ➞ 10
 */
const addition = (number1, number2) => {
  return number1 + number2;
};

/**
 * Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.
 * Perimeter of a square: 4 * side.
 * Perimeter of a circle: 6.28 * radius.
 * No if... else statements.
 * No objects.
 * No arrays.
 * No formatting methods, etc.
 * Test Cases ->
 * perimeter("s", 7) ➞ 28
 * perimeter("c", 4) ➞ 25.12
 * perimeter("c", 9) ➞ 56.52
 */
const perimeter = (objectType, value) => {
  return objectType === "s" ? 4 * value : 6.28 * value;
};
