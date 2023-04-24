   const films = document.querySelectorAll(".films");
   const planets = document.querySelectorAll(".planets");
   const persons = document.querySelectorAll(".persons");
   const cards = document.querySelector('.cards');
   let activeElement = null;

   function clearCards() {
   cards.innerHTML = '';
   }

   persons.forEach((el, index) => {
   el.addEventListener("click", async () => {
      if (activeElement === el) {
         return; 
      }
      clearCards();
      activeElement = el;
      let clicked = false;
      index = 0;
      for (let j = 0; j <= 5; j++) {
         await getCharacterInfo(index + 1);
         index++;
      }   
   });
   });

   async function getCharacterInfo(id) {
   const request = await fetch(`https://swapi.dev/api/people/${id}`);
   const response = await request.json();
   console.log(response);
   $(".cards").append(`
      <div class="person-card">
         <img src="./img/${id}.webp" alt="">
         <p class="info">Name: ${response.name}</p>
         <p class="info">born: ${response.birth_year}</p>
         <p class="info">sex: ${response.gender}</p>
      </div>`);
   console.log(id);
   }

   films.forEach((el, index) => {
   el.addEventListener("click", async () => {
      if (activeElement === el) {
         return;
      }
      clearCards();
      activeElement = el;
      let clicked = false;
      index = 0;
      for (let j = 0; j <= 5; j++) {
         await getFilmsInfo(index + 1);
         index++;
      }   
   });
   });

   async function getFilmsInfo(id) {
   const request = await fetch(`https://swapi.dev/api/films/${id}`);
   const response = await request.json();
   console.log(response);
   $(".cards").append(`
      <div class="person-card">
         <img src="./img/${id}.jpg" alt="">
         <p class="info">${response.title}</p>
         <p class="info">Episode № ${response.episode_id}</p>
         <p class="info">Release date ${response.release_date}</p>
      </div>`);
   console.log(id);
   }


   planets.forEach((el, index) => {
   el.addEventListener("click", async () => {
      if (activeElement === el) {
         return;
      }
      clearCards();
      activeElement = el;
      let clicked = false;
      index = 0;
      for (let j = 0; j <= 5; j++) {
         await getPlanetsInfo(index + 1);
         index++;
      }   
   });
   });

   async function getPlanetsInfo(id) {
   const request = await fetch(`https://swapi.dev/api/planets/${id}`);
   const response = await request.json();
   console.log(response);
   $(".cards").append(`
      <div class="person-card">
         <img src="./img/0${id}.webp" alt="">
         <p class="info">${response.name}</p>
         <p class="info">Rotation period: ${response.rotation_period}</p>
         <p class="info">${response.climate}</p>
      </div>`);
   console.log(id);
   }

const filmInput = document.getElementById('film-input');
const filmButton = document.getElementById('film-show');

filmButton.addEventListener('click', async () => {
  const filmNumber = filmInput.value;
  if (filmNumber >= 1 && filmNumber <= 6) {
    clearCards();
    await getFilmsInfo(filmNumber);
  } else {
     alert("number 1 to 6")
  }
});