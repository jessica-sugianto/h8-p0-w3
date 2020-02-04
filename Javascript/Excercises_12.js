function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var beda = []

    for(var i = 0; i < arr.length; i++){
        if(i + 1 < arr.length){
            beda.push(arr[i] / arr[i+1])
        }
    }

    var temp = beda[0]
    var deretGeometri
    for(var j = 0; j < beda.length; j++){
        if(beda[j] == temp){
            deretGeometri = true
        }else{
            deretGeometri = false
        }
    }
    return deretGeometri
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false