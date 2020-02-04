function groupAnimals(animals) {
    // you can only write your code here!
    var huruf
    var kamus = 'abcdefghijklmnopqrstuvwxyz'
    var kelompok = []


    for(var i = 0; i < kamus.length; i++){
        huruf = []
        for(var j = 0; j < animals.length; j++){
            if(kamus[i] === animals[j][0]){
                huruf.push(animals[j])
            }
        }
        if(huruf.length != 0){
            kelompok.push(huruf)
        }
    }
    
    return kelompok
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]