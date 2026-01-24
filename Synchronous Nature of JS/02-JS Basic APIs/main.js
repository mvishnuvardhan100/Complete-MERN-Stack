//String APIs
let str = "  Hi Hello Hello Hi  ";
str = str.trim(); //will remove the white space from both the beginning and the end of string 
console.log(str);
console.log("Length: " + str.length);
console.log("Index of Hi: " + str.indexOf("Hi"));
console.log("Last Index of Hi: " + str.lastIndexOf("Hi"));
console.log(str.slice(0, 2));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.replace("Hi", "Hello"));

//Array APIs

const nums = [1, 2, 3, 4];
console.log(nums);
nums.push(5);
console.log(nums);
nums.pop();
console.log(nums);
nums.unshift(0);
console.log(nums);
nums.shift();
console.log(nums);

//for-each loop
nums.forEach((val, ind) => {
  console.log("nums[" + ind + "] = " + val);
});

