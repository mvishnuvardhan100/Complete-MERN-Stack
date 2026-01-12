//Variables in JS
var a = 10; //function scoped, can be redeclared and can be reassigned
let b = 20; //block scoped, cannot be redeclared abn can be reassigned
const c = 30; //block scoped, cannot be redeclared abn cannot be reassigned

let username = "mvishnuvardhan100";
let followers = 211, following = 616;
console.log("Instagram username: " + username);
console.log("Following: " + following + " & Followers: " + followers);

//if-else statement
if(followers >= 500) {
  console.log(username + " is popular on Instagram");
}
else {
  console.log(username + " is not so popular on Instagram");
}


//using while loop to calculate the sum of first 100 natural numbers
let sumOf100Natural = 0, i = 1;
while(i <= 100) {
  sumOf100Natural += i;
  i++;
}
console.log("Sum of first 100 natural numbers: " + sumOf100Natural);

//using for loop to calculate the sum of first 50 odd natural numbers
let sumOf50Odd = 0;
for(let i = 1; i <= 100; i += 2) {
  sumOf50Odd += i;
}
console.log("Sum of first 50 odd natural numbers: " + sumOf50Odd);


//Arrays
const nums = [1, 2, 3, 4, 5];
//let's traverse through this array
for(let i = 0; i < nums.length; i++) {
  console.log("nums[" + i + "] = " + nums[i]);
}


//JavaScript Object
const userDetails = {
  username: "mvishnuvardhan100",
  following: 616,
  followers: 211
};
//Accessing the JS Object in two ways
console.log("Instagram username: " + userDetails.username);
console.log("Following: " + userDetails["following"]);
console.log("Followers: " + userDetails["followers"]);

//Functions in JS
function sum(a, b) {
  return a + b;
}

console.log("2 + 3 = " + sum(2, 3));