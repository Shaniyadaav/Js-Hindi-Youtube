const name = "hitesh"
const repocount = 50

console.log(name + repocount + "Value");

const gameName = new String('hitesh-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.lenght);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "     hitesh     "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('20%', '-'))
