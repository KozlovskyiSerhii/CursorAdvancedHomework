function* newFontGenerator(startSize) {
   let fontSize = startSize;
   while (true) {
      const direction = yield fontSize;
      if (direction === "up") {
         if (fontSize >= 64 ) {
            fontSize = startSize;
         }
         fontSize += 2;
      } else if (direction === "down") {
         if (fontSize <= 0 ) {
            fontSize = startSize;
         }
         fontSize -= 2;
      }
   }
}
  const fontGenerator = newFontGenerator(16);

document.getElementById("up").addEventListener("click", () => {
  const { value } = fontGenerator.next("up");
   document.getElementById("text").style.fontSize = `${value}px`;
   document.getElementById("text").innerHTML = `${value}px`
   
});

document.getElementById("down").addEventListener("click", () => {
  const { value } = fontGenerator.next("down");
   document.getElementById("text").style.fontSize = `${value}px`;
   document.getElementById("text").innerHTML = `${value}px`
});



function* createIdGenerator() {
  let id = 1;
  while (true) {
    yield id;
    id++;
  }
}

const idGenerator = createIdGenerator();