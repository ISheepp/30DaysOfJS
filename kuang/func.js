function abs(x) {
    console.log("x=>" +x);

    //arguments关键字代表传递进来的所有的参数，是一个数组！
    for (let i = 0; i <arguments.length; i++){
        console.log(arguments[i]);
    }
    if (x >= 0){
        return x;
    }else{
        return -x;
    }

}
//rest获取除了已经定义的参数之外的所有参数
function aaa(a, b,...rest) {
    console.log("a=>"+a);
    console.log("b=>"+b);
    console.log(rest);
}