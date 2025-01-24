
// let str = "this is test world"
// let a = "test"
// let b = "best"
    
// for(let i=0 ; i<str.length ; i++){
//    let matchVal= str.slice(i , i +a.length)
//     if(matchVal===a){
//         var newStr = str.slice(0,i) + b + str.slice(i+a.length)
//     }
// }
// console.log(newStr);


let str = "this is test world"
let a = "test"
let b = "best"
    
for(let i=0 ; i<str.length ; i++){
   let matchVal= str.slice(i , i +a.length)
    if(matchVal===a){
        var newStr = str.slice(0,i) + b + str.slice(i+a.length)
    }
}
console.log(newStr);
