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