// import { myName, myAge, myFn, myClass } from "./module";


var myMap = new Map();
myMap.set('a', 'h')
myMap.set('b', 'e')
myMap.set('c', 'l')
myMap.set('d', 'l')
myMap.set('e', 'o')

console.log('-------keypair--------');
for (const [key, value] of myMap) {
    console.log(key, value)
}

console.log('-------keypair-keys-------');
for (var value of myMap.values()) {
    console.log('key:' + value);
}

console.log('-------keypair-values--------');
for (var value of myMap.values()) {
    console.log('value:' + value);
}

var mySet = new Set([1, 2, 3, 4, 5, 6, 5, 7]);
console.log([...mySet])

var a = new Set([1, 2, 3]);
var b = new Set([2, 4, 3]);

console.log('-------union-----------------');
var union = new Set([...a, ...b]);
console.log(union);
union.forEach(element => {
    console.log(element)
});


console.log('-------untersect------------');
var intersect = new Set([...a].filter(x => b.has(x)));
intersect.forEach(element => {
    console.log(element)
});


console.log('-------difference------------');
var difference = new Set([...a].filter(x => !b.has(x)));
difference.forEach(element => {
    console.log(element)
});


console.log('-------repeat-----------------');
console.log('hello'.repeat(2));

console.log('-------padstart-----------------');
console.log('x'.padStart(8, '0'));
console.log('x'.padEnd(8, '0'));


console.log('-------includes--startwith-endswith-startwith-------------');
let string = "apple,banana,orange";
console.log(string.includes("banana"));     // true
console.log(string.startsWith("apple"));    // true
console.log(string.endsWith("apple"));      // false
console.log(string.startsWith("banana", 6))  // true


var array = Array.of(1, 4, 6, 8, 12);
console.log(array);


let arr = Array.from({
    0: '1',
    1: '2',
    2: 3,
    length: 3
});
console.log(arr);


var f = (id, name) => ({ id: id, name: name });
var fr = f(1, 'smsm');
console.log(fr);


console.log('---------function------------')
function myFunction() {
    console.log(this)
}
myFunction();

var Person = {
    age: 13,
    sayHello: function () {
        console.log(this.age);
        console.log('----Person----');
        console.log(this);
    }
}

Person.sayHello();

var Person1 = {
    age: 18,
    sayHello: function () {
        console.log('----Person1----');
        console.log(this.age);
        console.log(this);
    }
}
Person1.sayHello();


class Father {
    age;
    constructor(age) {
        this.age = age
    }
}

class Son extends Father {
    height;
    constructor(height) {
        super(35);
        this.height = height;
    }
}

var son = new Son(12);
console.log(son.age, son.height);


console.log('-----------module-import-export----------');
// console.log(myAge);
// console.log(myName);
// console.log(myFn());
// console.log(myClass.a);

const p1 = new Promise(function (resolve, reject) {
    resolve('success1');
    resolve('success2');
});

const p2 = new Promise(function (resolve, reject) {
    resolve('success3');
    reject('reject1');
});

p1.then(function (value) {
    console.log(value);
});

p2.then(function (value) {
    console.log(value);
})


Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                      //月份
        "d+": this.getDate(),                           //日
        "h+": this.getHours(),                          //小时
        "m+": this.getMinutes(),                        //分
        "s+": this.getSeconds(),                        //秒
        "q+": Math.floor((this.getMonth() + 3) / 3),    //季度
        "S": this.getMilliseconds()                     //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

console.log('----------------datetime------------------');

function getFirstLastDayByYearMonth(y, m) {
    return { firstDay: new Date(y, m - 1, 1), lastDay: new Date(y, m, 0) }
}
var day = getFirstLastDayByYearMonth(2022, 6);
console.log(day.firstDay.format("yyyy-MM-dd"));
console.log(day.lastDay.format("yyyy-MM-dd"));


let days = getDaysOfMonth(2023, 10);
console.log('days = ', days);
function getDaysOfMonth(year, month) {
    var date = new Date(year, month, 0);
    var days = date.getDate();
    return days;
}

var animals = [
    { key: 1, value: '1' },
    { key: 2, value: '112' },
    { key: 3, value: '113', }
]

var animal = animals.slice(0,1);

var s  = animal.shift();



console.log(animal)
console.log(animals)
