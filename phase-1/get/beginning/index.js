/*

Phase 1 -> GET
Updated April 25, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/
// create, read, update, delete
// get, post, patch, delete 

// A synchronous request to https://dog-api.kinduff.com/api/facts?number=1.
fetch("https://dog-api.kinduff.com/api/facts?number=1")
// converting the JSON into JS
.then((response) => {return response.json(); })
// Use the resulting JS!
.then((data) => {
    console.log(data);
    document.getElementById("dog").textContent = data.facts[0];
    // console.log(data.facts[0])
})
.catch(() => {console.log(error)});

// .json conversts json into javascript 

// A synchronous request to https://anapioficeandfire.com/api/books.

fetch("https://anapioficeandfire.com/api/books")
.then((resp) => { 
  return resp.json()
})
.then((books) => {
  // each li text should be a book title books[1]
  // capture ul, then create li for each book and append that to ul 
  let list = document.getElementById("got");
  for (let i = 0; i < books.length; i++) {
    let listItem = document.createElement("li");
    list.append(listItem);
    console.log(books[i])
    listItem.textContent = books[i]["name"];
    
  }
})
.catch(() => {console.log(error)});

// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"

async function getPokemon(name) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
    const pokemon = await response.json();
    // console.log(pokemon);
    document.querySelector("#pokemon").textContent =
      pokemon.name[0].toUpperCase() + pokemon.name.slice(1) + " (" + pokemon.id + ")";
  }
  getPokemon("ditto");

// ~ Challenge: Make a GET request to an API of your choice!

fetch("https://poetrydb.org/title/frost/lines")
.then((response) => {return response.json(); })
.then((poem) => {
    document.getElementById("poem").textContent = poem[0]["lines"];
    console.log(poem);
})
.catch(() => {console.log(error)});