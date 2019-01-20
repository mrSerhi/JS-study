{
  ("use strict");
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
  // const Animal = new Object();
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
  // =============================================================================
  function extend(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
  }

  function Star(name = "", weight = null, radius = null, number = null) {
    this.name = name;
    this.weight = weight;
    this.radius = radius;
    this.number = number;
  }
  Star.prototype.getDistanceToSatellite = function() {
    return `distance to satellite is very big`;
  };

  function Planet(name, weight, radius, number, mass, traectory = "elipce") {
    // call super constructor
    Star.call(this, name, weight, radius, number);

    this.mass = mass;
    this.traectory = traectory;
  }

  extend(Planet, Star);

  Planet.prototype.sayHi = function() {
    return `Hello EvryOne, I'm the ${this.name} planet`;
  };

  Planet.prototype.getDistanceToSatellite = function() {
    return `Distance to satellite is the fucking big number, dudde!`;
  };

  function Satellite(name, weight, radius, year, state = true) {
    Star.call(this, name, weight, radius);

    this.yearOfBirn = year;
    this.state = state;
  }

  extend(Satellite, Star);

  Satellite.prototype.getDistanceToSatellite = function() {
    return `I'm the Satellite, and my distance non exist =)`;
  };

  const moon = new Planet("Moon", 3500, 8900, 344, 120340);
  const sun = new Star();
  const niero = new Satellite("Niero", 11000, 4000, 1997);

  const objects = [moon, sun, niero];
  // displayDistance(objects);

  function displayDistance(objects) {
    for (const obj of objects) {
      console.log(obj.getDistanceToSatellite());
    }
  }

  // =================================================================

  // mixins and composition

  // mixins
  const walking = {
    canWalc: function() {
      return `Animal can walc`;
    }
  };

  const eating = {
    canEat: function() {
      return `Animal can eat`;
    }
  };

  const flying = {
    canFly: function() {
      return `Animal can fly`;
    }
  };

  const swiming = {
    canSwim: function() {
      return `Animal can swim`;
    }
  };

  function mixin(target, ...sources) {
    Object.assign(target.prototype, ...sources);
  }

  function Animal(name, age, habitat) {
    this.name = name;
    this.age = age;
    this.habitat = habitat;
  }

  Animal.prototype.displaMessage = function() {
    return `This animal is ${this.name} has ${this.age} years and dwells in ${
      this.habitat
    } habitat`;
  };

  function Wolf(name, age, habitat) {
    Animal.call(this, name, age, habitat);
  }

  extend(Wolf, Animal);
  mixin(Wolf, eating, walking);

  function Bird(name, age, habitat) {
    Animal.call(this, name, age, habitat);
  }

  extend(Bird, Animal);
  mixin(Bird, flying, eating);

  // Object.assign(Bird.prototype, fly);

  function Fish() {
    Animal.apply(this, arguments);
  }

  extend(Fish, Animal);
  mixin(Fish, eating, swiming);

  const eagle = new Bird("Eagle", 3, "sky");
  const wolf = new Wolf("Wolf", 9, "ground");
  const whale = new Fish("Whale", 34, "ocean");

  // =============================================================

  function HtmlElement() {
    this.click = function() {
      console.log("clicked");
    };
  }

  HtmlElement.prototype.focus = function() {
    console.log("Focused");
  };

  function HtmlSelectElement(arr = []) {
    // HtmlElement.call(this);

    this.items = arr;
    this.addItem = function(...item) {
      this.items.push(...item);
    };
    this.removeItem = function(item) {
      if (this.items.includes(item))
        this.items.splice(this.items.indexOf(item), 1);
    };
  }

  HtmlSelectElement.prototype = new HtmlElement();
  // HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
  HtmlSelectElement.prototype.constructor = HtmlSelectElement;
  // HtmlSelectElement.prototype.click = function() {
  //   HtmlElement.call(this);
  //   this.click();
  // };
  HtmlSelectElement.prototype.render = function() {
    return `
<select>
${this.items.map(el => `<option>${el}</option>`).join("")}
</select>
`;
  };

  function HtmlImageElement(src = "") {
    this.src = src;
    this.render = function() {
      return `<img src="${this.src}" />`;
    };
  }
  HtmlImageElement.prototype = new HtmlElement();
  HtmlImageElement.prototype.constructor = HtmlImageElement;

  const img = new HtmlImageElement();
  const button = new HtmlElement();
  const htmlElements = new HtmlSelectElement();
  htmlElements.addItem("title", "value", "src", "href");
  htmlElements.removeItem("src");
  // htmlElements.click()
  // htmlElements.focus();
  img.src = "http://google.com";
  const elements = [img, htmlElements];
  // dipsplayRender();

  function dipsplayRender() {
    for (const elem of elements) {
      console.log(elem.render());
    }
  }
  // ===========================================================================
}
