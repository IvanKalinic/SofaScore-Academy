const pokedex = document.getElementById("pokedex");
// console.log(pokedex);
let allPokemons;

let perPage = 10;
let currentPage = 1;
let start = 0;
let end = perPage;

function getPokemon() {
  const promises = [];
  for (let i = 1; i <= 20; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }

  Promise.all(promises).then((results) => {
    allPokemons = results.map((data) => ({
      name: data.name,
      id: data.id,
      image: data.sprites["front_default"],
      type: data.types.map((type) => type.type.name).join(", "),
    }));
    displayPokemon(allPokemons);
  });
}

const displayPokemon = (pokemon) => {
  // console.log(pokemon);

  pokemon.map((poke) => {
    let pokeResult = `<div class="poke" id="delete">
        <img class="image-style" src="${poke.image}"/> 
        <h2>${poke.id}, ${poke.name}</h2>
        <p>Type:${poke.type}</p>
        <button class="button" id="btn${poke.id}">Delete</button>
     </div>`;
    if (poke.id > start && poke.id <= end) 
      pokedex.innerHTML += pokeResult;
    else return;

    setTimeout(() => {
      let button = document.getElementById(`btn${poke.id}`);
      button.addEventListener("click", (e) => {
        const id = poke.id;
        allPokemons = allPokemons.filter((pokemon) => {
          return pokemon.id !== id;
        });
        pokedex.innerHTML = "";
        displayPokemon(allPokemons);
      });
    }, 0);
  });
};

getPokemon();

// function pagination(){

const btnNext = document.querySelector(".btn-next");
btnNext.addEventListener("click", () => {
  if (end >= 20) {
    return pokedex.innerHTML;
  }
  pokedex.innerHTML = "";
  currentPage++;
  start = (currentPage - 1) * perPage ;
  end = currentPage * perPage;
  console.log(start, end);
  btnPrev.innerHTML = end / perPage - 1;
  btnNext.innerHTML = end / perPage + 1;
  displayPokemon(allPokemons);
  
});

const btnPrev = document.querySelector(".btn-prev");
btnPrev.addEventListener("click", () => {
  if (end <= perPage) {
    return pokedex.innerHTML;
  }
  pokedex.innerHTML = "";
  currentPage--;
  start = (currentPage - 1) * perPage ;
  end = currentPage * perPage;
  console.log(start, end);
  btnNext.innerHTML --;
  // btnNext.innerHtml = end / perPage ;
  btnPrev.innerHTML = end / perPage - 1;
  displayPokemon(allPokemons);
  console.log(end/perPage+1);
  
});
