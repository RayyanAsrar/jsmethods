
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
result=""
let a = "test"
let b = "best"
let temp=""
for(let i=0;i<str.length;i++){
    if(str[i]===" "){
        if(temp== a){
            result+=b
        }else{
            result+=temp
        }temp=""
        result+=str[i]
    }else{
        temp+=str[i]
    }
}
console.log(result)
