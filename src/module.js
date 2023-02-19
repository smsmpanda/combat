let myName = 'Tom';
let myAge = 23;
let myFn = function () {
    return 'my name is ' + myName + '! I am' + myAge + 'years old.'
}

let myClass = class MyClass {
    static a = 'yeah!';
}

export { myName, myAge, myFn, myClass }