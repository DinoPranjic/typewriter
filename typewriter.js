//const sentence = "hello there from lighthouse labs";
const sentence = "Hello my name is Dino Pranjic and I am a student at Lighthouse Labs";
let timer = 0;

//loops through characters of string adding 50ms between each character
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += 50;

}

// Adds new line after length of string has been reached.
setTimeout(() => {
  process.stdout.write("\n");
}, sentence.length * 50);