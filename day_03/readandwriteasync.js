import fs from "fs/promises";
console.log(fs);

//write
const writeFile = async(path,data) =>{
 try{
  await fs.writeFile(path,data);
  console.log("data has been written successfully...");
 } catch(error){
  console.log("unable to perform write functions");
 }
}
writeFile("./example.txt","this text has been written thorugh async fun");


//read
const readFile = async(path,data) =>{
 try{
  await fs.readFile(path,data);
  console.log("data has been read successfully...");
 } catch(error){
  console.log("unable to perform read functions");
 }
}
readFile("./example.txt","this text has been read thorugh async fun");



//append
const appendFile = async(path,data) =>{
 try{
  await fs.appendFile(path,data);
  console.log("data has been appended successfully...");
 } catch(error){
  console.log("unable to perform append functions");
 }
}
appendFile("./example.txt","this text has been appended thorugh async fun");

//async,await and try-catch se syntax hamesha sahi banega, error handling bhi sahi hoga, aur code bhi readable hoga. async await se asynchronous code ko synchronous jaisa likh sakte hai, jisse code samajhne me asani hoti hai. try-catch block se hum errors ko handle kar sakte hai, jisse program crash nahi hota aur user ko proper error message milta hai.
//package.json aur package lock json me yehy diff hota h ki package.json me hum apne project ke dependencies ko list karte hai, jabki package-lock.json me yeh dependencies ke exact versions ko lock karte hai. package-lock.json file automatically generate hoti hai jab hum npm install command chalate hai, aur yeh ensure karti hai ki har kisi ke paas same version of dependencies ho, jisse compatibility issues nahi hote.