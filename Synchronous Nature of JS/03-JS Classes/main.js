class Student {
  #password;
  static university = "VIT Vellore";
  constructor(firstName, age, password) {
    this.firstName = firstName;
    this.age = age;
    this.#password = password;
  }

  getPassword() {
    return this.#password;
  }
  setPassword(password) {
    this.#password = password;
  }

  setPhoneNumber(phno) {
    this.phoneNumber = phno;
  }
}

let student1 = new Student("Vishnu", 19, "VITVishnu@12345");
student1.setPhoneNumber("1234567890");
console.log(student1.phoneNumber);
