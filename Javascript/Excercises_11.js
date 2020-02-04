function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var beda = []

    for(var i = 0; i < arr.length; i++){
        if(i + 1 < arr.length){
            beda.push(arr[i] - arr[i+1])
        }
    }

    var temp = beda[0]
    var deretAritmatika
    for(var j = 0; j < beda.length; j++){
        if(beda[j] == temp){
            deretAritmatika = true
        }else{
            deretAritmatika = false
        }
    }
    return deretAritmatika
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false