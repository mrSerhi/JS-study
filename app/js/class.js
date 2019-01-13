{
  ("use strict");

  // ES5
  function OfficeWorker(name, status, department, workExperience) {
    this.name = name;
    this.status = status;
    this.department = department;
    this.workExperiens = workExperience;
  }

  OfficeWorker.prototype.setFullAge = function(year) {
    if (!year || isNaN(year) || !isFinite(year)) {
      this.userAge = null;
      return false;
    }
    var fullYearAtNow = new Date().getFullYear();

    return (this.userAge = fullYearAtNow - year);
  };
  OfficeWorker.prototype.setGradeOfExperience = function() {
    if (this.workExperiens <= 1) {
      this.gradeOfExperience = "Junior";
    } else if (this.workExperiens <= 3) {
      this.gradeOfExperience = "Middle";
    } else {
      this.gradeOfExperience = "Senior";
    }
  };

  var nataly = new OfficeWorker("Nataly", true, "finanse", 1);
  nataly.setFullAge(1990);
  nataly.setGradeOfExperience();

  function DirectorOfDepartment(
    name,
    status,
    department,
    workExperience,
    departmentLength,
    education
  ) {
    // inheritens
    OfficeWorker.call(this, name, status, department, workExperience);

    this.departmentOfPeopleLength = departmentLength;
    this.education = !education ? [] : education;
  }

  DirectorOfDepartment.prototype = Object.create(OfficeWorker.prototype);
  // may put in to parameters one or more objects
  DirectorOfDepartment.prototype.setEducation = function(obj) {
    if (arguments.length > 1) {
      for (var i = 0; i < arguments.length; i++) {
        this.education.push(arguments[i]);
      }
    } else {
      this.education.push(arguments[0]);
    }
  };

  var dilan = new DirectorOfDepartment("Dilan", true, "IT", 7, 55);
  dilan.setEducation(
    {
      nameOfUniversity: "Cambrige",
      facultative: "radio-engineering",
      fullTymeEducation: true,
      fullEducationYears: 5
    },
    {
      nameOfUniversity: "Oxford",
      facultative: "developing",
      fullTymeEducation: false,
      fullEducationYears: 2
    }
  );

  // console.dir(dilan);

  // ========================================================================

  // ES6
  class Animal {
    constructor(name, animal, yearOfBorn, pedigree, pows = 4, food = []) {
      this.animalName = name;
      this.animal = animal;
      this.yearOfBorn = yearOfBorn;
      this.pedigree = pedigree;
      this.pows = pows;
      this.food = food;
    }

    calcFullAge() {
      let animal = this.animal ? this.animal.toLowerCase() : "";
      let yearAtNow = new Date().getFullYear();

      if (animal === "dog" || animal === "cat") {
        this.animalFullAge = (yearAtNow - this.yearOfBorn) * 2;
      } else {
        this.animalFullAge = parseInt(
          (yearAtNow - this.yearOfBorn) * (Math.random() * 10) + 1
        );
      }
    }
  }

  class Dog extends Animal {
    constructor(
      name = "",
      animal,
      yearOfBorn = null,
      pedigree,
      pows,
      food,
      reddyToDress = false,
      voice = ""
    ) {
      super(name, animal, yearOfBorn, pedigree, pows, food);
      this.reddyToDress = reddyToDress;
      this.voice = voice;
    }

    displayVoice() {
      return `${this.animalName} to say ${this.voice.toUpperCase()}`;
    }
  }

  const bonia = new Animal("Bonia", "cat", 2010, "scotland-free", 4, [
    "meat",
    "feed"
  ]);
  const rocket = new Dog(
    "Rocket",
    "dog",
    2014,
    "germany",
    "all",
    4,
    true,
    "GUF GUAFFF"
  );
  bonia.calcFullAge();
  rocket.displayVoice();
  rocket.calcFullAge();

  // console.log(bonia);
  // console.dir(rocket)
}
