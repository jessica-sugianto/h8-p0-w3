function targetTerdekat(arr) {
  // you can only write your code here!
    var temp = []
    var jarak = 0

    for(var i = 0 ; i <= arr.length; i++){
        if(arr[i] === 'x' || arr[i] === 'o'){
            temp.push(arr[i])
            if(temp[0] === temp[1]){
                temp.pop()
                jarak = 0
            }else{
                if(temp[0] === 'x' && temp[1] === 'o'){
                    jarak++
                    return jarak;
                }else if(temp[0] === 'o' && temp[1] === 'x'){
                    jarak++
                    return jarak;
                }
            }
        }else if(temp.length > 0){
            jarak++
        }
    }

    if(temp.length == 1){
        return 0
    }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2