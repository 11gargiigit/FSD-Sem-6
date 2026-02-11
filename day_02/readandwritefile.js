import fs from 'fs';
//import { fileURLToPath } from 'url';
//console.log(fs);
const writeFileSync = (file,data) => {
    try{
   fs.writeFileSync(file , data);
    console.log("file has been written successfully");
    }
    catch(error){
        console.log("some error occured");
    }
    
}
writeFileSync ("./example.txt" , "this data has been written through sync function 1");
writeFileSync ("./example.txt" , "this data has been written through sync function 2");
writeFileSync ("./example.txt" , "this data has been written through sync function 3");

