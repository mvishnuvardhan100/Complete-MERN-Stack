class Student {
  #password;
  static university = "VIT Vellore";
  constructor(fullName, age, branch, password) {
    this.fullName = fullName;
    this.age = age;
    this.branch = branch;
    this.#password = password;
  }

  setPhoneNumber(phno) {
    this.phoneNumber  = phno;
  }

  setPassword(password) {
    this.#password = password;
  }
  getPassword() {
    return this.#password;
  }

}

let student1 = new Student("Vijay Vishnu Vardhan", 19, "CSE-1", "Vis@12345");
student1.setPhoneNumber("1234567890");
console.log(student1.phoneNumber);
let student2 = new Student("Raghav", 19, "ECE-1", "Rag@12345");
console.log(student2.phoneNumber); //Undefined
