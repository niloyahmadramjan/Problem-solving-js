
// reverse a string without use reverse method
  function reverser (str){
     var rev = ""
      for(let i = str.length - 1; i >= 0; i--){
          rev += str[i]
      }
      return rev;
  }

  console.log(reverser('Hello javascripts'))

