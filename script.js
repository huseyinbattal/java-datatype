let piNumber=Math.PI;
console.log(piNumber);
console.log(Math.round(piNumber)); //en yakina
console.log(Math.floor(piNumber));// zemine
console.log(Math.ceil(piNumber)); //yukari
let randomNumber=Math.random();
console.log(randomNumber);
console.log((randomNumber*100));
console.log(Math.floor (randomNumber*100)+1);

let x=20;
let y=6;
console.log(--x);
console.log(++x);
console.log(x%y);
x+=y;
console.log(x);

let c=15
let d="15"
console.log(c===d)
console.log(c!==d)

let num1=11
let num2=11

console.log(num1>num2);
console.log(num1<num2);
console.log(num1>=num2);
console.log(num1<=num2);

console.log(false&&false)

console.log(true|| false)  //true
console.log(false|| false) //false
console.log(true|| true)  //true
console.log(false|| true)  //true


let isBig=num1>14;
console.log(isBig);
let isBigger= num1>18 ? "evet buyuk" : "hayir kucuk";
console.log(isBigger); 
num1=11;
let newd=null;
num1 > 18 ? newd=15 : newd=25;
console.log(newd);

let yen=47;
let tl=null;
yen===45 ? (tl=1) : (tl=2);
let usd=tl*13;
let eur=tl*15;
console.log(tl,usd,eur);