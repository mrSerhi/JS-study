"use strict";

function HtmlElement(selector, className) {
  this.selector = selector;
  this.className = className;
}

HtmlElement.prototype.click = function() {
  return "click";
};

class Element {
  constructor(selector, className, data) {
    this.selector = selector;
    this.className = className;
    this.data = data;
  }

  click() {
    return `selector: ${this.selector} has clicked`;
  }

  render() {
    return `<${this.selector} class='${this.className}'>${
      this.data ? this.data : ""
    }</${this.selector}>`;
  }
}

const p = new Element("p", "disc", "Description");

// Class with static methods, like standart javaScript Math
class MathAnother {
  static sum(...arg) {
    return arg.reduce((acc, curr) => acc + curr);
  }

  static mult(...arg) {
    return arg.reduce((acc, curr) => acc * curr);
  }

  static pow(a, b) {
    let pow = a;
    for (let i = 1; i < b; i++) {
      pow *= a;
    }
    return pow;
  }

  static floor(num) {
    return Math.floor(num);
  }

  static round(num) {
    return Math.round(num);
  }
}

const sumOfNums = MathAnother.sum(2, 2);
const multyOfNums = MathAnother.mult(2, 4);
const powOfNums = MathAnother.pow(2, 10);

// privat props and methods using new WeakMap() constructor
const _userName = new WeakMap();
const _userSurname = new WeakMap();
const _setFullYearOfBorn = new WeakMap();
const _yearOfBorn = new WeakMap();

class User {
  constructor(name, surname, age, gender) {
    _userName.set(this, name);
    _userSurname.set(this, surname);
    _setFullYearOfBorn.set(this, () => {
      let now = new Date().getFullYear();
      if (this.userAge) {
        _yearOfBorn.set(this, now - this.userAge);
      } else {
        _yearOfBorn.set(this, null);
      }
    });

    this.userAge = age;
    this.gender = gender;
  }

  getFullName() {
    return `User: ${_userName.get(this)} ${_userSurname.get(this)}`;
  }

  getYearOfBorn() {
    _setFullYearOfBorn.get(this)();
    return `User ${_yearOfBorn.get(this)} year of born`;
  }
}

const anndy = new User("Anndy", "Biliggan", 24, "male");
