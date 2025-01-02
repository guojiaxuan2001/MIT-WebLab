HTML is bones
CSS is style
JS is interactive

### How to JS
**Data Types**
+ Bool
+ Number
+ String
+ Null
+ Undefined

always use "===" to compare

```
//compute GCD of 2 nums
const GCD = (a, b) => {
    while (b !==0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
```

**Defining Variables**
```
let myBool = "Yes";
let myNum = 12;
let myString = "Hello World!";

const ans = 8964;   //we cannot redefine it
```

null - no value;
undefined - we have declared a var but have not assigned it a value

console.log - printf in Cpp

```
const a = 5;
const b = 10;

console.log(`a * b = ${a * b}`);
```

alert("something");    //pop-up

array.push()    //insert to the last elem
array.pop()    //delete the last elem

**for ... of ...**
```
const sb = ['1', '2', '3,'];

for (const 2b of sb){
    const nc  = "CNM" + 2b;
    console.log(nc);
}
```

**Object**
is a collection of name: value pairs
```
const myCar = {
    make: "Benz";
    model: "S680";
    year: "2024";
    color: "Black";
};

console.log(myCar.make);
```


**Copy arr**
*If we use*
```
let arr = [1, 2];
let copyArr = arr;
//copyArr和arr指向同一个内存地址
```
*Actually we use*
```
let arr = [1, 2];
let copyArr = [...arr];

let obj = {name : "Su Biyang"};
let copyObj = {...obj};
```

### JS Func
Syntax:
(parameters) => { body }


