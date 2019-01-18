"use strict";
// litteraly
const userOne = {
  name: "Tommy",
  email: "tommy@gmail.com",
  logIn() {
    return `${this.name} **${this.email}: has logged in`;
  },
  logOut() {
    return `${this.name} **${this.email}: has logged out`;
  }
};

// factory method to create obj
function factoryMethod(name, surName, age) {
  return {
    name,
    surName,
    age,
    sayHi() {
      return `hello I'am ${this.name} and I ${this.age} years old`;
    }
  };
}

// const dino = factoryMethod("Dino", "Dinosaur", 111250);
// console.log(dino.sayHi());

// 11,230.00 1,123.00 123,333.00
function changeNumber(num) {
  let numParse = Math.round(num).toFixed(2);
  const [firstNum, secondNum] = numParse.split(".");
  if (firstNum.length >= 5) {
    return `${firstNum.slice(0, firstNum.length - 3)},${firstNum.slice(
      firstNum.length - 3,
      firstNum.length
    )}.${secondNum}`;
  }
  return `${firstNum.charAt(0)},${firstNum.slice(1, firstNum.length)}`;
}
// const one = changeNumber(12345.555555);
// console.log(typeof one); // string
// ====================================================================
function Person(name) {
  this.name = name;
  this.sayHi = function() {
    console.log(`Hello ${this.name}`);
  };
}
const Animal = new Object();
const Human = {};

const Func = new Function("gender", `this.gender = gender`);
const you = new Func("male");

const timmi = new Person("Timmi");

const bool = new Boolean();
const str = new String(10);
const num = new Number();

let number = 10;
let objVal = { value: 10 };
let goods = ["phone", "tv", "player", "art"];
decrement(number);
decrement(objVal);
decrement(goods);

// console.log(number);  // not changetrue
// console.log(objVal); // value: 11
// console.log(goods); // sorts values

function decrement(num) {
  if (typeof num === "object" && !Array.isArray(num)) {
    return num.value++;
  } else if (Array.isArray(num)) {
    num.sort();
  }
  return num++;
}
// ============================================================
function Room(weight, height, length) {
  let roomData = {
    weight,
    height,
    length
  };

  this.square = function() {
    return roomData.weight * roomData.height * roomData.length;
  };

  Object.defineProperty(this, "workWithData", {
    get: function() {
      return roomData;
    },
    set: function(val) {
      if (typeof val === "object" || val) {
        for (const key in val) {
          roomData[key] = val[key];
        }
      } else {
        throw new Error("Must be a obj with parameters");
      }
    }
  });
}
const myRoom = new Room(4, 2.5, 6);

// =================================================================
// player

function Player() {
  let interval = null;
  let duration = 0;

  Object.defineProperty(this, "duration", {
    get: function() {
      return `duration: ${duration.toFixed(2)} ms`;
    }
  });

  this.start = function() {
    if (interval === null) {
      interval = setInterval(() => {
        // duration++;
        duration += 0.1;
      }, 100);
    } else {
      throw new Error("Aplication has started!");
    }
  };

  this.stop = function() {
    if (typeof interval === "function" || interval !== null) {
      clearInterval(interval);
      interval = null;
    } else {
      throw new Error("Aplication not started!");
    }
  };

  this.reset = function() {
    duration = 0;
  };
}

const sw = new Player();
// sw.start();
// sw.stop();
// sw.duration;
// sw.reset();

function WatchPlayer() {
  let startTime = null,
    endTime = null,
    state,
    duration = 0;

  Object.defineProperties(this, {
    startTime: {
      get: function() {
        return startTime;
      }
    },
    endTime: {
      get: function() {
        return endTime;
      }
    },
    state: {
      get: function() {
        return state;
      }
    },
    duration: {
      get: function() {
        return parseFloat(duration.toFixed(2));
      }
    }
  });
}

WatchPlayer.prototype.start = function() {
  if (this.state) {
    throw new Error("Aplication has started!");
  }
  this.state = true;
  this.startTime = new Date().getTime(); //ms
};

WatchPlayer.prototype.stop = function() {
  if (!this.state) {
    throw new Error("Aplication not started");
  }
  this.state = false;
  this.endTime = new Date().getTime(); // ms

  this.duration += (endTime - startTime) / 1000;
};

WatchPlayer.prototype.reset = function() {
  this.startTime = this.endTime = null;
  this.state = false;
  this.duration = 0;
};

const vv = new WatchPlayer();

const ss = { name: "David" };

Object.defineProperty(ss, "name", {
  writable: false,
  enumerable: false,
  configurable: false
});
