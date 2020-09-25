'use strict';

let age = 4;
if (age > 3){
    console.log("哈哈")
}else {
    console.log("hh")
}

let name = [123, 423, 23, 23, 123, 234]
name.forEach(function (value) {
    console.log(value);
});
console.log("\n")
for (let num in name){
    console.log(name[num])
}
