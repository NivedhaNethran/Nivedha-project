// let marks=25;
// if(marks>=35){
//     console.log("You had passed this paper");
// }
// if(marks<=35){
//     console.log("Better luck next work hard")
// }


// let budget=10000;
// if(budget<=15000){
//     console.log("You can go for a Android mobile");
// }else{
//     console.log("You would think about iPhone");
// }
// let targetMilegae=34;
// if(targetMilegae<=15){
//     console.log("You can a TVS 50");
// }else if(targetMilegae<=35){
//     console.log("Scooter would be thebest choice");
// }else if(targetMilegae>=40){
//     console.log("Bike is the best option to attain your mileage");
// }else{
//     console.log("Then you may choose eco-friendly mode of transport");
// }
// let fruit="mango";
// switch(fruit){
//     case"apple":
//     console.log("This is an apple");break;
//     case"banana":
//     console.log("This ia banana");break;
//     default:
//     console.log("This is some other fruit");
// }
// let score=77;
// let grade;
// switch(true){
//     case(score>=90):grade="A";break;
//     case(score>=80):grade="B";break;
//     case(score>=70):grade="C";break;
//     case(score>=60):grade="D";break;
//     default:grade="F"
// }
// console.log("This grade is"+grade);
// let n=3;
// let result=n%2===0?"Given n is even number":"Given n is odd number";
// console.log(result);
// for (let i=0;i<3;i++)
// {
//     console.log("LEARNING JS");
// }
// let x=10;
// for(x=1;x<=10;x++){
//     console.log("Value of x:"+x);
// }
// let num=9;
// while(num>=1){
//     console.log(num);
//     num-=1;
// }
// let count=10;
// do{
//     console.log(count);
//     count++;
// }
// while(count<=16);
// let person={name:"Nivedha",age:"25",email:"abc@gmail.com"};
// for(let key in person){
//     console.log(key,person[key]);
// }
// let numbers=[1,2,3,4,5];
// for(const number of numbers){
//     if(number%3===0){
//         console.log(number);
//     }
// }
// let arr=["Nivedha","Suresh","Nethran"]
// console.log(arr);
// console.log(arr.sort());
// let numbers=[2,2.6,20,-100,30,0];
// function compare(a,b){
//     return a-b;
// }
// console.log(numbers.sort(compare));
let numbers=[1,2,3,4,5,6,7,8,9,10];
let evenNumbers=numbers.filter(number=>number%2===0);
console.log(evenNumbers);

