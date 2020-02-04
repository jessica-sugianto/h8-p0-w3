function palindrome(kata) {
    // you can only write your code here!
    var temp = ''
    for( var count = kata.length-1; count >= 0; count--){
        temp += kata[count]
    }

    if(kata === temp){
        return true
    }else{
        return false
    }
}
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false