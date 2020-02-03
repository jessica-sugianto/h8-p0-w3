//input "hello world!"
//output
//"!dlrow olleh"

var word = 'hello world!'
var temp = ''

for(var count = word.length-1; count >= 0; count--){
    temp += word[count]
}

console.log(temp)