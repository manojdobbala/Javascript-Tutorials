//An Object is a simple collection of key value pairs
//Simple way of declaring obj as an object
var obj ={};

//declaring properties over the object obj
obj['name1']= 'javascript';

//this is the other way of declaring the property over the obj
obj.name='javascript';

//a function can also be put into an object
obj['key']= function(){
  console.log('this is a function');
}

//an object can also be put into other object
var obj2 = {'key':'value'};

obj['newobj'] =  obj2;

//an arry cab also be put into object
obj['array']=[1,2,3,4]

//output the obj property on the brower console, basically using for logging the values
console.log(obj.array.length);