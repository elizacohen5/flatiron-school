/*

Phase 1 -> Creating data with JSON Server and POST requests
Updated March 15, 2024
Created May 26, 2023
by Sakib Rasul

Objectives
1. Run an instance of JSON Server that hosts a dataset.
1. Make a GET request to display a dataset.
2. Make a POST request to add to that dataset.

*/


// GET request to show existing dog and cat data 
function fetchPetData(catsOrDogs) {
    fetch(`http://localhost:3000/${catsOrDogs}`)
    .then(response => response.json())
    .then(data => {
    data.forEach(pet => {
        if (catsOrDogs === "dogs") {
            const ul = document.querySelector("#dogs");
            const li = document.createElement("li");
            li.textContent = `${pet.name} (${pet.age})`;
            // console.log(pet.name)
            ul.append(li);
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "x";
            deleteButton.classList.add("delete");
            li.append(deleteButton)
            deleteButton.addEventListener("click", () => {
                li.remove();
                deletePet(pet.id, "dogs");
            })
        } else 
        if (catsOrDogs === "cats") {
            const li = document.createElement("li");
            li.textContent = `${pet.name} (${pet.age})`;
            const ul = document.querySelector("#cats");
            ul.append(li);
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "x";
            deleteButton.classList.add("delete");
            li.append(deleteButton)
            deleteButton.addEventListener("click", () => {
                li.remove();
                deletePet(pet.id, "cats");
            })
        }
    })
})
}

fetchPetData("dogs")
fetchPetData("cats")


// Now, let's trigger a POST request when the user submits the form,
// so that they can add data to the database! Remember to think about
// the event, the target, and the handler when planning a listener.


// makes a POST request to add pet data to the data base when the user submits a form 
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const animalType = event.target["type"].value;
    console.log(animalType);
    
    if (animalType === "dog") {
        const dogName = event.target["name"].value;
        const dogAge = event.target["age"].value;
        console.log(dogName +  " " + dogAge);

        fetch("http://localhost:3000/dogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: dogName,
                age: dogAge, 
                isGoodDog: true
            })
        })
        .then(response => response.json())
    } else 
    if (animalType === "cat") {
        const catName = event.target["name"].value;
        const catAge = event.target["age"].value;
        console.log(catName + " " + catAge);

        fetch("http://localhost:3000/cats", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: catName,
                age: catAge
            })
        })
        .then(response => response.json())
    }
})

// Create a DELETE request when the user selects the delete button from each pet 
function deletePet(id, catsOrDogs) {
    fetch(`http://localhost:3000/${catsOrDogs}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(pet => console.log(pet));
}

// ~ Challenges
// 1. There are a handful of awfully similar lines in our requests. Try abstracting them
//    into a function!
// 2. Try writing your own POST request.
// 2.5 Replace the forms with an "add a Pet" form where you can add a dog or a cat
// 3. Try writing PATCH and DELETE requests!

// function createPet(name, age) {
//     if ("dogs") {
//         const ul = document.querySelector("#dogs");
//     } else 
//     if ("cats") {
//         const ul = document.querySelector("#cats");
//     }
//     const li = document.createElement("li");
//     li.textContent = `${name} (${age})`;
//     ul.append(li);
// }

// newDog.name
// newDog.age