

// let str1 = "this is test world test "
// let oldWord = "test"
// let newWord = "best"
// for(let i=0 ; i<str1.length ; i++){
//     // console.log(`Index ${i}: ${str[i]}`);       
    
//    let matchVal= str1.slice(i , i +oldWord.length)
//     if(matchVal===oldWord){
//         str1 = str1.slice(0,i) + newWord + str1.slice(i+oldWord.length)
        
//     }   
// }
// console.log(str1);

let str = "this is test world"
let result=""
let a = "test"
let b = "best"
let temp=""
for(let i=0;i<=str.length;i++){
let  char= str[i];
    if(char === " " || char === "," || char === "." || char === ""){
        if(temp== a){
            result+=b
        }else{
            result+=temp
        }temp=""    
        result+= char
    }else{
        temp+= char
    }
}
console.log(result)

