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
const _fullYearOfBorn = new WeakMap();
const _yearOfBorn = new WeakMap();

class User {
  constructor(name, surname, age, gender) {
    _userName.set(this, name);
    _userSurname.set(this, surname);
    _fullYearOfBorn.set(this, () => {
      let now = new Date().getFullYear();

      if (this.userAge && !_yearOfBorn.get(this)) {
        _yearOfBorn.set(this, now - this.userAge);
      } else {
        _yearOfBorn.get(this);
      }
    });

    this.userAge = age;
    this.gender = gender;
  }

  sayHi() {
    return `Hello ${this.gender === "male" ? "mt.User" : "ms.User"}!`;
  }

  // getters and setters
  get getFullName() {
    return `User: ${_userName.get(this)} ${_userSurname.get(this)}`;
  }

  get getYearOfBorn() {
    _fullYearOfBorn.get(this)();
    return `User ${_yearOfBorn.get(this)} year of born`;
  }

  set setYearOfBOrn(val) {
    _yearOfBorn.set(this, val);
  }
}

const anndy = new User("Anndy", "Biliggan", 24, "male");

// inheritance

class Selector {
  constructor(selector = "", className = "", content, style = {}) {
    this.selector = selector;
    this.className = className;
    this.style = style;
    this.content = content;
  }

  render() {
    return `<${this.selector} class='${this.className}'>${
      this.content ? this.content : ""
    }</${this.selector}>`;
  }
}

class SpacialSelector extends Selector {
  constructor(selector, className, content, style) {
    super(selector, className, content, style);
  }
}

const middleSection = new SpacialSelector("div", "middle-section", "BuM!");

// ============================================================
const _items = new WeakMap();
class Stack {
  constructor() {
    _items.set(this, []);
  }

  push(val) {
    _items.get(this).push(val);
  }

  pop() {
    const items = _items.get(this);

    if (items.length === 0) {
      throw new Error("Stack is empty");
    }
    return _items.get(this).pop();
  }

  peek() {
    const items = _items.get(this);

    if (items.length === 0) {
      throw new Error("Stack is empty");
    }
    return items[items.length - 1];
  }

  get count() {
    return _items.get(this).length;
  }
}

const stack = new Stack();
