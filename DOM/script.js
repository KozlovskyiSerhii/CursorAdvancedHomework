 export function generateBlocksInterval() {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.width = "250px";
  container.style.margin = "50px auto";

  function getRandomColor() {
    const partOfHex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += partOfHex[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  for (let i = 0; i < 25; i++) {
    const blockElement = document.createElement("div");
    blockElement.style.width = "50px";
    blockElement.style.height = "50px";
    blockElement.style.backgroundColor = getRandomColor();
    container.appendChild(blockElement);
  }
  document.body.appendChild(container);

  setInterval(() => {
    const blocks = document.querySelectorAll("div > div");
    blocks.forEach((block) => {
      block.style.backgroundColor = getRandomColor();
    });
  }, 1000);
}


// generateBlocksInterval()


