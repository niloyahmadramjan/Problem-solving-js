const isPalindrome=(str)=>{
    const revStr = str.split("").reverse().join("")
   return  str === revStr?true:false;
}

console.log(isPalindrome("maam"))