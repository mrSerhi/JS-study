{
  ("use strict");

  const johnSmith = {
    name: "John",
    serName: "Smith"
  };
  const sendyMeen = {
    name: "sendy",
    serName: "meen"
  };
  const developer = {
    language: "javaScript"
  };
  Object.setPrototypeOf(developer, johnSmith);
  const proto = Object.getPrototypeOf(developer);
  const objProtoNull = Object.create(null);
  const hr = Object.create(sendyMeen);
  hr.job = "head hanting";

  // with constructors
  function Person(name, surName) {
    this.name = name;
    this.surName = surName;
  }

  Person.prototype.getFullName = function() {
    return this.name + " " + this.surName;
  };

  function Developer(name, surName, language, status) {
    // Person.apply(this, arguments);
    Person.call(this, name, surName);
    this.language = language;
    this.status = status;
  }

  Developer.prototype.getFullName = function() {
    return "Dev " + Person.prototype.getFullName.call(this);
  };

  Developer.prototype.getData = function() {
    return [this.name, this.surName];
  };

  const joana = new Person("Joana", "Pido");
  const dima = new Developer("Dima", "Obligenko", "javaScript", true);
  const andry = new Developer("Andry", "Bulinkov", "Pyton", true);
  /*
console.dir(dima instanceof Developer); // true
console.dir(dima instanceof Person); // false
console.dir(dima instanceof Object); // true
*/

  Developer.prototype = Object.create(Person.prototype);
  Developer.prototype.constructor = Person;

  /*
console.dir(dima instanceof Developer); // false
console.dir(dima instanceof Person); // false
console.dir(dima instanceof Object); // true
console.log(Developer.prototype.constructor === Person); // true
*/
  /*
console.log(joana.getFullName());
console.log(dima.getFullName());
console.log(andry.getFullName());
*/
  // console.log(dima.getData());

  // used classes ES6
  class Building {
    constructor(name, number, age) {
      this.name = name;
      this.number = number;
      this.age = age;
    }

    getBuildData() {
      return [this.name, this.age];
    }
  }

  class HouseDown extends Building {
    constructor(name, number, age, height, weight) {
      super(name, number, age);
      this.height = height;
      this.weight = weight;
    }

    displayBuildData() {
      const [name, age] = super.getBuildData();
      return `HouseDown has name *${name}* and age *${age}*`;
    }

    getData() {
      return [this.name, this.age];
    }
  }

  const doroty = new Building("Doroty build", 344, 1);
  const houseOfRocks = new HouseDown("Rocks house inc.", 111, 4, 1403, 1023);

  // console.log(doroty.getBuildData());
  // console.log(houseOfRocks.displayBuildData());
  // console.log(houseOfRocks.displayData())
}
