"use strict";
let company = 'Apple';
let isPublish = false;
let x = 'Hello world';
let ids = [1, 2, 3, 4, 5];
ids.push(6);
let arr = [1, 2, 3, 4, 5, '6', false];
let person = [1, '110', true];
let employees;
employees = [
    [1, '1'],
    [2, '2'],
];
let id;
id = 1;
id = '2';
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 20] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Down);
console.log(Direction1.Right);
const user = {
    id: 1,
    name: 'John',
};
let cid = 1;
let customId = cid;
customId = 2;
function addNum(x, y) {
    return x + y;
}
function incrementNum(x) {
    return x++;
}
const user2 = {
    id: 2,
    name: 'Smith',
};
const add = (x, y) => {
    return x + y;
};
const sub = (x, y) => {
    return x - y;
};
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
const brad = new Person(1, 'Mike Jordan');
class MyPerson {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
class Employee extends MyPerson {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4, 5]);
let stringArr = getArray(['John', 'Mike', 'Bradley']);
