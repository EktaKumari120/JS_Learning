const myName = "Robot"
const repocount = 6
// console.log(myName + repocount + "Value"); // old way and not preferred 

//String Interpolation
console.log(`My name is ${myName} and my repo count is ${repocount}`);


//String Methods
const gameName = new String("Pokemon Rangers");
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.charAt(6));
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('e'));

// const newName = gameName.substring(0,6)
// console.log(newName);
// const anotherName = gameName.slice(-7,12)
// console.log(anotherName);

const newstring = new String("       what          ")
console.log(newstring.trim())


const newStr = new String("learn/new/every/day")
console.log(newStr.split("/"))
console.log(newStr.replaceAll("/"," "))

console.log(newStr.includes("z"))
