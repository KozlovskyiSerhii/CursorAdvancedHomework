const buttons = document.querySelectorAll("button");

buttons.forEach((el, index) => {
  el.addEventListener("click", () => {
     getCharacterInfo1(index + 1);
     getCharacterInfo(index + 1)
     console.log(index+1);
  });
});

function getCharacterInfo(id) {
  fetch(`https://swapi.dev/api/people/${id}`)
    .then((res) => res.json())
    .then((res) => {
      console.log({ res });
    });
}

async function getCharacterInfo1(id) {
  const request = await fetch(`https://swapi.dev/api/people/${id}`);
  const response = await request.json();
  console.log({ response });
}