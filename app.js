console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
  return function (plusNumber) {
    return plusNumber + number;
  };
}
let plus15 = plus(15);
console.log(plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

users.forEach((ele) => console.log(ele.name));

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let mappedArr = users.map((ele) => {
  let newObj = {};
  newObj.name = ele.name;
  newObj.score = ele.score;
  return newObj;
});

console.log(mappedArr);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let filterArr = users.filter((ele) => ele.isActive);
console.log(filterArr);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

users.sort((a, b) =>  b.score - a.score);
console.log(users);

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");

console.log(
  users.reduce((acc, currVal) => {
    return (acc += currVal.score);
  }, 0) / users.length
);
