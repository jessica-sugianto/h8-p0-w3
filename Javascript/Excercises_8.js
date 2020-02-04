function pasanganTerbesar(num) {
  // you can only write your code here!
  var number = []
  var duaAngka
  num = String(num)

  for(var i = 0; i < num.length; i++){
    duaAngka = ''
    if(i + 1 < num.length){
      duaAngka = duaAngka + num[i] + num[i+1]
        number.push(duaAngka)
    }
  }
  var Terbesar= number[0]

  for(var count = 0; count <    number.length; count++){
    if(Terbesar < number[count]){
      Terbesar = number[count]
    }
  }
  return Terbesar
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99