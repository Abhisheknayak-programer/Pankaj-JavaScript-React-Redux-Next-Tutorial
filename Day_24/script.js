// HOW TO MAKE A CLASS IN ES6
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hey ${this.name}`);
  }

  isAllowedToDrive() {
    if (this.age > 18) {
      console.log("You can drive car");
    } else {
      console.log("You cannot drive car");
    }
  }
}

const pankaj = new Person("Pankaj", 23);
const Abhishek = new Person("Abhishek", 26);
const Raja = new Person("Raja", 2);
console.log(pankaj, Abhishek, Raja);

pankaj.greet();
pankaj.isAllowedToDrive();
Abhishek.greet();
Abhishek.isAllowedToDrive();

Raja.greet();
Raja.isAllowedToDrive();

// INHERITANCE BETWEEN CLASSES USING SUPER
class Person1 {
  constructor(fullname, birthyear) {
    this.fullname = fullname;
    this.birthyear = birthyear;
  }

  calcAge() {
    return 2022 - this.birthyear;
  }
}

class Student extends Person1 {
  constructor(fullname, birthyear, course) {
    super(fullname, birthyear);
    this.course = course;
  }

  introduce() {
    console.log(
      `My name is ${this.fullname} and I am doing ${
        this.course
      } and my age is ${this.calcAge()} years`
    );
  }
}

const Panku = new Person1("Panku", 1999);
const ans1 = Panku.calcAge();
console.log(ans1);
// shyam.introduce(); ERROR

const shyam = new Student("Shyam", 2020, "Web Development");
const ans2 = shyam.calcAge();
shyam.introduce();
console.log(ans2);

// CHANNING METHOD IN CLASSES
class accounts {
  constructor(accountHolderName) {
    this.accountHolderName = accountHolderName;
    this.summary = [];
  }

  deposit(val) {
    this.summary.push(val);
    return this;
  }

  withdraw(val) {
    this.summary.push(-val);
    return this;
  }

  totalFunds() {
    return this.summary.reduce((acc, el, ind, arr) => {
      return (acc += el);
    });
  }
}

const pankajKaAccount = new accounts("Pankaj Nandwani");
pankajKaAccount.deposit(1000);
pankajKaAccount.withdraw(200);
console.log(pankajKaAccount);
console.log(pankajKaAccount.totalFunds());

pankajKaAccount
  .deposit(1000)
  .withdraw(6543)
  .deposit(3456)
  .withdraw(765)
  .deposit(98654);
console.log(pankajKaAccount);
console.log(pankajKaAccount.totalFunds());

// HOW TO GET LONGITUDE AND LATITUDE COORDINATES USING JAVASCRIPT
// DISPLAY GOOGLE MAP LINK USING COODS
// SYNCHRONOUS CODE
// ASYNCHRONOUS CODE
// CALLBACK HELL

// HOW TO USE LOCAL STORAGE USING JAVASCRIPT

// WHAT IS AJAX
// WHAT IS API
// What ARE PROMISE IN JAVASCRIPT
// FETCH AND THEN IN JAVASCRIPT
// CATCH IN JAVASCRIPT
// FINALLY IN JAVASCRIPT
// ASYNC AWAIT IN JAVASCRIPT
// TRY ANC CATCH IN JAVASCRIPT

// TABBED COMPONENTS
// INTERSECTION OBSERVER API
// STICKY NAVIGATION
// CAROUSEL
