'use strict';

//ES6
//统计学生的成绩，学生的名字
//通过key获得value
let map = new Map([['tom',100], ['jack', 80], ['mike', 70]]);
console.log(map.get('tom'));
map.set('admin', 99);

//Set:无序不重复的集合
let set = new Set([2,3,45,12]);
set.add(4);
//iterator来遍历迭代
//通过for of实现
for (let x of map){
    console.log(x)
}