const sentence = "hello there from the terrordrome";
const time = 50;
for(let char in sentence) {
  char = char*1;
  setTimeout(() => process.stdout.write(sentence[char]), time * (char));
}
setTimeout(() => {
  console.log('');
}, time * sentence.length);