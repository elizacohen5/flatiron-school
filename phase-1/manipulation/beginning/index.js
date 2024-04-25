/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`
// Application Programming Interface: manupulate another data source 
// Create, Read, Update, Delete data in external data sources
document 


// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.
console.log(document.querySelector("h1")) // read by tag name 
console.log(document.querySelector("#today")) // read by id 
console.log(document.querySelector(".address")) // read by class
console.log(document.querySelectorAll("p")); // read multiple elements
console.log(document.querySelector("#today").textContent)
const p = document.querySelector("#today")
console.log(p.textContent)


// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation

document.querySelector("#forever").textContent = "April 24, 2024"

// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.

document.querySelector("#forever").remove();

// ~ Create + Append a node

const newH2 = document.createElement("h2");
// parent.append(newChild); ---> syntax for creating a new element by appending the element child as a child of the element "parent"
newH2.textContent = "Sometime in the future..."
document.querySelector("body").append(newH2)

// -> createElement(), append()

// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining

function displayList(name, arr) {

    const booksHeader = document.createElement("h3");
    booksHeader.textContent = name;
    document.querySelector("#dates").append(booksHeader);

    const bookUl = document.createElement("ul");
    document.querySelector("h3").append(bookUl);

    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement("li");
        li.textContent = arr[i];
        document.querySelector("ul").append(li);
    }
}

console.log(displayList('Scary Books', ['The Shining', 'Dracula']))

// 2. Replace the <strong> element with a newly created one.

// remove strong element 
document.querySelector("strong").remove()

//create strong element
const newStrong = document.createElement("strong")

//add text content to newStrong


// add a new strong element
document.querySelector("address").append()

 // remove and add 

