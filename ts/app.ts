import { Mock } from "./api/user/mock";

var mock: Mock = new Mock();


function getByUserID(id: number) {
    return mock.GetUserById(id);
}

function getUserList() {
    return mock.GetUserList();
}

function renderView() {
    var tab = document.getElementById('kftable');
    mock.GetUserList().forEach(user => {
        let tr = document.createElement('tr');

        let tdForUserId = document.createElement('td');
        tdForUserId.innerText = user.ID.toString();

        let tdForUserName = document.createElement('td');
        tdForUserName.innerText = user.Name;

        let tdForUserSex = document.createElement('td');
        tdForUserSex.innerText = user.Sex;

        tr.appendChild(tdForUserId);
        tr.appendChild(tdForUserName);
        tr.appendChild(tdForUserSex);

        tab?.appendChild(tr);
    });
}

renderView()


//TypeScript
let names: string[] = ['csharp', 'java', 'python', 'golang'];
console.log(names);

let animals: Array<string> = ['csharp', 'java', 'python', 'golang'];
console.log(animals);

//tuple
let x: [string, number] = ['csharp', 100];
console.log(x);
console.log(x[0]);
console.log(x[1]);

enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Blue;
console.log(c);


function hello(): void {
    alert('Hello Typescript');
}

//any
let anyvarible: any = 1;
anyvarible = 'I am who I am';
anyvarible = false;

let arrList: any[] = [1, true, false, 'csharp'];

var j: any;
var n: any = "a b c"

for (j in n) {
    console.log(n[j])
}

console.log('for…of 、forEach、every 和 some 循环');
let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry);
}

let list = [4, 5, 6];
list.forEach((val, idx, array) => {
    console.log(val);
    console.log(idx);
    console.log(array);
});


function add(a: number, b: number): number {
    return a + b;
}

function add1(a: number, b: number, c?: number): number {
    return a + b;
}

function add2(a: number, b: number, c: number = 10): number {
    return a + b;
}
add2(1, 2);
add2(1, 2, 3);

function addNumbers(...nums: number[]) {
    console.log(nums.length);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);

(function () {
    var x = 'hello';
    console.log(x);
})();

var myFunction = new Function("a", "b", "return a * b");
var x1 = myFunction(4, 3);
console.log(x1);

var foo = (x: number) => x * 12;
console.log(foo(12));
console.log(typeof foo);

function disp(a: string): void;
function disp(n1: number, s1: string): void;

function disp(x: any, y?: any): void {
    console.log(x);
    console.log(y);
}
disp("abc")
disp(1, "xyz");

var s1: string = 'go';
var s2: string = 'lang';
var s3 = s1.concat(s2);
console.log("s1 + s2 : " + s3)

var arr = new Array("orange", "mango", "banana", "sugar");
var length = arr.unshift("water");
console.log("Returned array is : " + arr);
console.log("Length of the array is : " + length);

var myMap = new Map();
myMap.set(1, 'Google1');
myMap.set(2, 'Google2');
myMap.set(3, 'Google3');
console.log(myMap);

console.log('Map has is ' + myMap.has(1));
console.log('Map all keys ' + myMap.keys);
console.log('Map all values ' + myMap.values);

for (let entry of myMap.entries()) {
    //console.log(entry[0], entry[1]);
    console.log(entry[0], entry[1]);
}

for (let [key, value] of myMap) {
    console.log(key, value);
}

var mytuple = [10, "Hello", "World", "typeScript"];
console.log("添加前元素个数：" + mytuple.length)

mytuple.push(12)
console.log("添加后元素个数：" + mytuple.length)
console.log("删除前元素个数：" + mytuple.length)
console.log(mytuple.pop() + " 元素从元组中删除")

console.log("删除后元素个数：" + mytuple.length)

var aa1 = [10, "Runoob"]
var [b1, c1] = aa1;
console.log(b1)
console.log(c1)


console.log('interface');


interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: () => string
}

var customer: IPerson = {
    firstName: 'Tom',
    lastName: 'Smith',
    sayHi() {
        return 'Hi ' + this.firstName + ' ' + this.lastName
    }
}

console.log("Customer 对象 ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

interface namelist {
    [index: number]: string
}

var list2: namelist = ["Google", "Runoob", "Taobao"]

interface ages {
    [index: string]: number
}
var agelist: ages;
// agelist["a"] = 12;

interface Person {
    age: number
}

interface Musician extends Person {
    instrument: string
}

var drummer = <Musician>{};
drummer.age = 21;
drummer.instrument = 'Drums';

console.log('class');

class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    dispay() {
        console.log(this.firstName + ' ' + this.lastName)
    }
}
var aperson = new Person("Smsmpanda", 'Kung Fu');
aperson.dispay();


class Shape {
    Area: number

    constructor(a: number) {
        this.Area = a
    }
    pmth(): void {
        console.log('the parents method.')
    }
}
class Circle extends Shape {
    disp(): void {
        console.log("圆的面积:  " + this.Area)
    }
    pmth(): void {
        console.log('the kids method.')
    }
}

var obj = new Circle(223);
obj.disp();
obj.pmth()


var obj = new Circle(12)
var isPerson = obj instanceof Person;
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);
isPerson = obj instanceof Circle;
console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);


interface ILoan {
    interest: number
}
class AgriLoan implements ILoan {
    interest: number
    rebate: number

    constructor(interest: number, rebate: number) {
        this.interest = interest
        this.rebate = rebate
    }
}

console.log('TypeScript 对象')
var obj_name = {
    key1: 'value1',
    ke2: 'value2',
    key3: function () {
        alert('my name is key3')
    },
    key4: ["c1", 'c2']
}

var sites = {
    site1: "Runoob",
    site2: "Google",
    sayHello: function () { } 
};

console.log(sites.site1)
console.log(sites.site2)
sites.sayHello = function () {
    console.log("hello " + sites.site1);
}

sites.sayHello();