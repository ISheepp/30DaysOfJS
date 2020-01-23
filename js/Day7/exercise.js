function fullName(){
    var name = prompt("please input your name:")
    console.log(name)
}

function Fullname(firstName, lastName){
    return `${firstName} ${lastName}`
}
function areaOfRectangle(length, width){
    var area = length * width
    return area
}
console.log(areaOfRectangle(3, 2))