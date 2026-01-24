const userDetails1JSO = {
  fullName: "Vijay",
  age: 19,
  isMarried: false,
  achievements: [
    "ICPC",
    "Candidate Master",
    "5 Star at CodeChef"
  ]
};

const userDetails1JSON = JSON.stringify(userDetails1JSO);
console.log(userDetails1JSON);

const userDetails2JSON = '{"fullName": "Rama", "age": 19, "isMarried": false}';
const userDetails2JSO = JSON.parse(userDetails2JSON);
console.log("Name: " + userDetails2JSO.fullName);
console.log("Age: " + userDetails2JSO.age);
if(userDetails2JSO.isMarried) {
  console.log(userDetails2JSO.fullName + " is married");
} else {
  console.log(userDetails2JSO.fullName + " is not married");
}

//Object class
console.log(Object.keys(userDetails1JSO));
console.log(Object.values(userDetails1JSO));
console.log(Object.entries(userDetails1JSO));
console.log(userDetails1JSO.hasOwnProperty("fullName"));
