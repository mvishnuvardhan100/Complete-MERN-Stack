//JSON Class
const userDetails = {
  username: "mvishnuvardhan100",
  following: 616,
  followers: 211
};

let userDetailsJSON = JSON.stringify(userDetails);
console.log(userDetailsJSON);

let infoJSON = '{"firstName": "Vijay", "age" : 19}';
const info = JSON.parse(infoJSON);
console.log(info.firstName);
console.log(info.age);

//Object class
console.log(Object.keys(userDetails));
console.log(Object.values(userDetails));
console.log(Object.entries(userDetails));
Object.assign({}, userDetails, {checkmarkAvailable: false});
if(!userDetails.checkmarkAvailable) {
  console.log("Blue tick mark is not availabe");
}


//checking whether a particular key is present or not
console.log(userDetails.hasOwnProperty("username"));
