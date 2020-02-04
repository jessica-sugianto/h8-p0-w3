function angkaPalindrome(num) {
    // you can only write your code here!
   var temp = num
   
   if(temp < 10){
       return (num + 1).toString();
   }else{
        var huruf = temp.toString()
        var palindrome

        do{
            palindrome = ''
            for(var i = huruf.length-1; i >= 0; i--){
                palindrome += huruf[i]
            }
            
            if(palindrome != huruf){
                huruf = (Number(huruf) + 1).toString()
            }else{
                return huruf
            }
        }while(palindrome != huruf)
   }

  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001