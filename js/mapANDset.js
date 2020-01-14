/*
Map是一组键值对的结构
*/
var m = new Map([['Michael',95], ['Bob', 75], ['Tracy',85]]);
m.get('Bob');
//Map的几个操作
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined
//一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值覆盖

/*
Set和Map类似，也是一组key的集合，但不存储value
由于key不能重复，所以，在Set中，没有重复的key
*/
var s1 = new Set(); // 空Set
var s2 = new Set([1, 2, 3]); // 含1, 2, 3