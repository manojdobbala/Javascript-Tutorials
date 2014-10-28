//Creating an Array
var arr = new Array();

//or
var arr =[];

//defining properties over array
//arrays have properties based on indexes(zero based)
arr[0] = 'First';
arr[1] = 'two';
arr[100]= 'hundred';

//doing a for loop over an array
for(var i=0; i<arr.length; i++) {
//console.log(arr[i]);
}
//default tostring implementation in js array
//console.log(arr);

//concatination of arrays
var a = [1,2,3];
var b = ['a','b','c'];
var c= a.concat(b);
//console.log(c);

//Join in arrays appends each item at every index by some propery
var a = [1,2,3];
var b = ['a','b','c'];
var c= a.join(";");
//console.log(c);

//pop in arrays , removes the last item from the array and changes length
var a = [1,2,3];
var b = ['a','b','c'];
var c= a.pop();
//console.log(a);

//shift , removes item from first position


//push
var a = [1,2,3];
a.push(4,5,6);
//console.log(a);

//reverse
var a = [1,2,3];
a.reverse();
//console.log(a);

//slice return a sub-array. no change to original array.
var a = [1,2,3];
var c= a.slice(0,1);  //0 is start position , 1 is last postion of sub array
//console.log(c);

//splice (starpositions, how many elements to delete, elements to add)
var a = [1,2,3,4,5];
var c= a.splice(2, 0, 10);
//console.log(c);

// sort

var a =[3, 9 , 10 , 1]
var c = a.sort(desc);
console.log(c);





