"use strict";

// Association
class Person {
  constructor(name, sername) {
    this.name = name;
    this.sername = sername;
    this.parent = null;
  }
}

// two different objects but one of them has prop on another object
// each of them is independent of the others
const ted = new Person("Ted", "Kolah");
const bill = new Person("Bill", "Stivenson");
ted.parent = bill;
bill.age = 24;

// console.dir(ted)
// ============================================================
// Aggregation
const company = {
  title: "ATC inc",
  employees: [] // will be contain two Person objs
};

company.employees.push(ted, bill);

// console.dir(company)
// ============================================================
// Encapsulation
function Company(name) {
  let employees = [];
  this.name = name;
  this.getEmployeers = function() {
    return employees;
  };
  this.setEmployees = function(newEmp) {
    employees.push(...newEmp);
  };
  this.sortEmployeesByName = function() {
    employees.sort((a, b) => (a.name > b.name ? 1 : -1));
  };
}

const delivery = new Company("Delivery corp.");
let deliveryEmployees = [
  {
    name: "Devid",
    position: "developer",
    inWork: true,
    bonus: true
  },
  {
    name: "Bill",
    position: "PM",
    inWork: true,
    bonus: true
  },
  {
    name: "Lina",
    position: "designer",
    inWork: true,
    bonus: false
  },
  {
    name: "Agnieshka",
    position: "HR",
    inWork: true,
    bonus: true
  }
];
delivery.setEmployees(deliveryEmployees);
delivery.sortEmployeesByName();
// ========================================================
// Enheritance
function SubCompany(product = []) {
  this.product = product;
}

SubCompany.prototype = new Company();
const foodSubComp = new SubCompany(["car", "bus", "flymachine", "robots"]);
// =============================================================================
// Polymorphism

// from ES5
function sum(x, y, z) {
  var x = x ? x : 0;
  var y = y ? y : 0;
  var z = z ? z : 0;
  return x + y + z;
}

// from ES2015
function sum(x = 0, y = 0, z = 0) {
  return x + y + z;
}

// property descriptors Setters and getters Encapsulations

// litteral
const nums = {
  first: null,
  second: null,
  set setUp(str) {
    const [first, operator, second] = str.split(" ");
    this.first = +first;
    this.operator = operator;
    this.second = +second;
  },
  get getSum() {
    return this.first + this.second;
  }
};

nums.setUp = "2 + 4";
nums.getSum; // 6

// with constructor and IIFE declaretion and WeakMap()
const Worker = (function() {
  let priv = new WeakMap(); // key must be {}
  let _ = function(instance) {
    // argument must be refer on context - this
    return priv.get(instance);
  };

  function WorkerConstr(name = null, serName = null) {
    var privatMembers = { email: "" };
    priv.set(this, privatMembers);
    this.name = name;
    this.serName = serName;
  }

  Object.defineProperty(WorkerConstr.prototype, "fullName", {
    get: function() {
      return `Name: ${this.name} \nSername: ${this.serName}`;
    },
    set: function(value) {
      const [name, serName] = value.split(" ");
      this.name = name || "";
      this.serName = serName || "";
    }
  });

  Object.defineProperty(WorkerConstr.prototype, "userEmail", {
    get: function() {
      return _(this).email;
    },
    set: function(str) {
      let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailRegExp.test(str)) {
        _(this).email = str;
      } else {
        throw new Error("not valid email adress");
      }
    }
  });
  return WorkerConstr;
})();

const gogi = new Worker();
gogi.fullName = "Gogi Avanesian";
gogi.userEmail = "gogi.avanisian@gmail.com";
// console.log(gogi.fullName);
// console.log(gogi.userEmail);

// using ES6
const MovieSeats = (function() {
  let priv = new WeakMap();
  let _ = function(key) {
    return priv.get(key);
  };

  class SeatsConstr {
    constructor() {
      let privat = { seats: [], discount: null };
      priv.set(this, privat);
      this.maxSeats = 10;
    }

    bookingPersonSeat(person) {
      _(this).seats.push(person);
    }
    displayFreeSeats() {
      return _(this).seats;
    }
    checkAvailableSeats() {
      return _(this).seats.length >= this.maxSeats;
    }
    countFreeSeats() {
      return this.maxSeats - _(this).seats.length;
    }
    get getDiscaunt() {
      return _(this).discount;
    }
    set setDiscaunt(num) {
      if (num && isNaN(num) && !isFinite(num)) {
        _(this).discount = num;
      }
    }
  }
  return SeatsConstr;
})();
