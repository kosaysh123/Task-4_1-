// a
let array=[];
for(let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 100));
  }
let z =0;
let u =0;
for(let i = 0;i<array.length;i++){
    if(array[i]%2==0){
         z = z + array[i];
    } 
}
for(let i = 0;i<array.length;i++){
    if(i<5){
        u = u + array[i]
        }
}
console.log("Array is :",array);
console.log("Sum of even numbers in a array :",z);
console.log("The sum of numbers whose index is less than 5",u);




// b
let object={
    name:"Kosay",
    age:22,
    number: 963936682515,
    email:"kosay.abd.sharouf@gmail.com"
}
//Full Printing
console.log(object);
//Print each item
console.log(object.name);
console.log(object.age);
console.log(object.number);
console.log(object.email);



// 10,85,5,58,6,22,74,99,36,61