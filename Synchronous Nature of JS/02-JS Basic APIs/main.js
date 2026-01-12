//string APIs
let s = " Hi Hello Hi Hello  ";
console.log(s);
s = s.trim();//will trim the leading and trailing white spaces
console.log(s);
console.log("Length of the string: " + s.length);
console.log("Index of Hi: " + s.indexOf("Hi"));
console.log("Last index of Hi: " + s.lastIndexOf("Hi"));
console.log("Slice of the string: " + s.slice(0, 2));
console.log("Uppercase: " + s.toUpperCase());
console.log("Lowercase: " + s.toLowerCase());
console.log(s.replace("Hello", "Hi"));

//Array APIs
const nums = [1, 2, 3, 4, 5];
console.log(nums);
nums.push(6);
console.log(nums);
nums.pop();
console.log(nums);
nums.unshift(0);
console.log(nums);
nums.shift();
console.log(nums);

//for-each loop
nums.forEach((val, i) => {
  console.log("nums[" + i + "] = " + val);
});
