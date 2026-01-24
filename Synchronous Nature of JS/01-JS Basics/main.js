//Variables
var a = 10; //function-scoped, can be redeclared and can be reassigned.
let b = 20; //block-scoped, cannot be redeclared and can be reassigned.
const c = 30;//block-scoped, cannot be redeclared and cannot be reassigned.

let username = "mvishnuvardhan100";
let followers = 207, following = 615;

console.log("Username: " + username);
console.log("Followers: " + followers);
console.log("Following: " + following);

//if-else statements
if(followers >= 500) {
  console.log(username + " is quite popular");
} else {
  console.log(username + " is not popular");
}

//while loop

//Q-Using a while loop try to get the sum of first n natural numbers
let n = 10;
let i = 0;
let sumOfN = 0;
while(i <= n) {
  sumOfN += i;
  i++;
}
console.log("Sum of first 10 natural numbers: " + sumOfN);


//for loop

//Q-Usinng a for loop try to get the sum of all even natural numbers which are under n

let sumOfEvenN = 0;
for(let i = 0; i <= n; i += 2) {
  sumOfEvenN += i;
}
console.log("Sum of all even natural numbers under 11: " + sumOfEvenN);

//Arrays

const nums = [1, 2, 3, 4, 5];

//Just traverse though the above array and print the array elements using a for loop
for(let i = 0; i < nums.length; i++) {
  console.log("nums[" + i + "] = " + nums[i]);
}

//JavaScript Object

const userDetails = {
  firstName: "Vijay",
  age: 19,
  isMarried: false
};

console.log("Firstname: " + userDetails.firstName);
console.log("Age: " + userDetails["age"]);
if(userDetails.isMarried) {
  console.log(userDetails.firstName + " is married");
} else {
  console.log(userDetails.firstName + " is not married");
}

//functions in JS
function sum(a, b) {
  return a + b;
}

console.log("2 + 3 = " + sum(2, 3));