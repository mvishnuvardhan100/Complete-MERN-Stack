const nums = [1, 2, 3, 4, 5];

//Map
const newNums1 = nums.map((val) => {
  return val * 2;
});
console.log(newNums1);

//Filter
const newNums2 = nums.filter((val) => {
  if(val % 2 == 0) return true
});
console.log(newNums2);