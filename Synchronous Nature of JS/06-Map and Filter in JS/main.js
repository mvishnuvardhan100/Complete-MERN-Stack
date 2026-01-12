const nums = [1, 2, 3, 4, 5, 6];
console.log(nums);

//Map
const newNums = nums.map((val) => {
  return val * 2;
});
console.log(newNums);

//Filter
const oddNums = nums.filter((val, i) => {
  if(i % 2 == 1) return true;
  else false;
});
console.log(oddNums);