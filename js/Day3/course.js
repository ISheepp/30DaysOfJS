/*
All numbers(positive and negative) are truthy except zero
All strings are truthy
The boolean true
*/
let empty = null;
console.log(empty);
let isRaining = false
isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')//三元运算符

let number = 5
number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)


const now = new Date();
console.log(now) //获得当前时间
console.log(now.getFullYear())//获得当前年份 January is 0
console.log(now.getMonth())//获得当前月份
console.log(now.getDate())//获得当前日期
console.log(now.getDay())//获得星期几
console.log(now.getHours()+'点')
console.log(now.getMinutes()+'分')
console.log(now.getSeconds()+'秒')

const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true
console.log(timeInSeconds)
