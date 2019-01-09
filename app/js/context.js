{
    'use strict';

    // ES5 
    var blockGreen = {
        class: 'block_green',
        position: 1,
        color: 'green',
        getElement: function() {
            return document.querySelector('.' + this.class);
        },
        displayDataOnClick: function() {
            this.getElement().addEventListener('click', function() {
                console.log('Element has ' + this.color + ' background-color and stay on ' + this.position + ' position');
            }.bind(this));
        }
    };

    blockGreen.displayDataOnClick();

    // ES6
    const blockRed = {
        class: 'block_red',
        position: 2,
        color: '',
        getElement: function() {
            return document.querySelector(`.${this.class}`);
        },
        displayDataOnClick: function() {
            this.getElement().addEventListener('click', () => {
                if (this.color !== 'red') {
                    this.color = 'red';
                    this.getElement().style.backgroundColor = 'red';
                }
                console.log(`Element has ${this.color} background-color and stay on ${this.position} position`);
            });
        }
    };

    blockRed.displayDataOnClick();

    // ES5

    function Person(name, age, like) {
        this.name = name;
        this.age = age;
        this.like = like;
        this.friends = [];
    }

    Person.prototype.setYearOfBirth = function() {
        var now = new Date().getFullYear();

        return this.yearOfBith = now - this.age;
    };

    Person.prototype.setLovedGoods = function(arr) {
        return this.goods = arr.map(function(el) {
            if (this.like.indexOf(el) !== 1) return el; 
        }.bind(this));
    };

    var igor = new Person('Igor', 55, ['coffie', 'tea']);
    igor.setYearOfBirth();
    igor.setLovedGoods(['burger', 'book', 'palme', 'tea']);
    

    // ES6

    Person.prototype.addFriends = function(arr) {
        arr.map(el => this.friends.push(el));
    };

    igor.addFriends(['Anna', 'Kirill', 'Vova'])

    // console.log(igor);








}