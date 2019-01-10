{
    'use strict';

    // ES5 

    var blocks = document.querySelectorAll('.block');
    var blocksArray = createArrFromNodeList(blocks);
    var styles = {
        backgroundColor: '#FF0000',
        border: '1px solid black',
        borderColor: 'black',
        color: 'white',
        marginBottom: '1rem',
        textAlign: 'center',
        verticalAlign: 'middle'
    };
    var userAges = getUserAge([2010, 2005, 1992, 2008, 2001, 2007, 2015])
    var usersFullAgeBool = checkOnFullAge(userAges);

    // displayAges(usersFullAgeBool)
    usersFullAgeBool.indexOf(true);
    userAges[usersFullAgeBool.indexOf(true)];
    // ---------------------------------------------
    // changeBlockStyle(blocksArray, styles);
    // displayChangedElem(blocksArray);


    function createArrFromNodeList(nodeList) {
        return Array.prototype.slice.call(nodeList);
    }

    function changeBlockStyle(arr, param) {
        return arr.forEach(function (elem) {
            Object.assign(elem.style, param);
        });
    }

    function displayChangedElem(arr) {
        for (var i = 0; i < arr.length; i++) {

            if (arr[i].classList.contains('block_red')) {
                continue;
            }

            arr[i].textContent = 'Element was changed';
        }
    }

    function getUserAge(arr) {
        var now = new Date().getFullYear();
        return arr.map(function (item) {
            return now - item;
        });
    }

    function checkOnFullAge(arr) {
        return arr.map(function (item) {
            return item >= 18;
        });
    }

    function displayAges(arr) {
        console.dir(arr);
    }


    //  ES6

    const blocksClone = Array.from(blocks);
    let fullAgeIndex = usersFullAgeBool.findIndex(el => el === true); // first entry
    let valueOfAge = userAges.find(el => el >= 18); // first entry

    // console.log(valueOfAge);
    // chaangeItemStyle(blocksClone, styles);
    // displayChangesItems(blocksClone);

    function chaangeItemStyle(arr, param) {
        arr.forEach(el => Object.assign(el.style, param));
    }

    function displayChangesItems(arr) {
        for (const item of arr) {
            if (item.className.includes('block_red')) {
                continue;
            }
            item.textContent = 'Item was changed';
            Object.assign(item.style, {
                fontSize: '1.4rem',
                color: '#000'
            });
        }
    }



}