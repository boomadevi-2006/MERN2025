var a; //declaration
var a=10; //initialization redeclaration
a=15;
console.log(a);
let b=20;
b=30;
console.log(b)
const c=40;
console.log(c);
function sum(){
    var a=10;
    var b=20;
    console.log(a+b);
}
var n=15;
r=(n%2===0)?"even":"odd";
console.log(r);

//spread operator(...)
var arr=[10,20,30];
var arr2=[...arr,40];
console.log(arr);
console.log(arr2);

//destructuring operator
var marks=[90,98,97,100,99]
var [m1,m2,m3,m4,m5]=marks;
console.log(marks);
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);

function demo(){
    console.log("hello from demo");
}
var callback=(func)=>{
    console.log("hello from callback");
    func();
    demo();
}
callback(demo);

//map
var arr=[1,2,3,4,5];
var double=arr.map(num => num*2)
console.log(double);

//filter
var odd=arr.filter(num => num%2!==0 )
console.log(odd)

//reduce
var total=double.reduce((val,num)=> val+num,0);
console.log(total);



//sample program
var arr=[1,2,3,4,5]
var arr2=arr.map(num => num*2);
var arr3=arr2.filter(num => num>=5);
var t=arr3.reduce((val,num)=>val+num,0);
console.log(t);

var t=arr.map(num => num*2).filter(num => num>=5).reduce((val,num)=>val+num,0);
console.log(t);

