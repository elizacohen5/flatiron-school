/*

Phase 1 -> DOM Events
by Sakib Rasul
Updated April 24, 2024
Created September 13, 2023

Objectives
1. Do something when an event fires on an element.
2. Handle a form submission by reading its input.

Takeaways
- "click" and "submit" events
- `event.preventDefault()`
- `[form].[input].value`

*/

// ~ the "click" event
const today = document.querySelector("#today");
today.addEventListener('click', (event) => {
    console.log(event.target)
});

// ~ the "submit" event

document.querySelector("form").addEventListener("submit", (event) => {
    // since the deault behavior of submit is to redirect the page to a backend app, let's prevent that! 
    event.preventDefault();
    // Take the date that was inputted by the user and set it as the text of #somtime
    const sometime = document.querySelector("#sometime");
    sometime.textContent = event.target["date"].value;
    console.log(event.target["date"].value);
})

// ~ challenges
// 1. [easy] Add another click event handler.
// 2. [medium] Add some non-click, non-submit event listener to the page.

document.querySelector("h1").addEventListener('mouseover', (event) => {
    console.log(event);
    const title = document.querySelector("h1");
    title.textContent = "Cool DOM Events"
})

document.querySelector("h1").addEventListener('mouseout', (event) => {
    console.log(event);
    const title = document.querySelector("h1");
    title.textContent = "DOM Events"
})

// 3. [hard] Add an image, and a form with one text input to the page.
//    On submit, have the image change to the URL specified in the text input.

document.getElementById("image-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const image = document.querySelector("img");
    imageInput = event.target["image-input"].value;
    console.log(imageInput);
    

    if (imageInput.length > 0) {
        image.src = imageInput;
    } else 
    if (imageInput.length === 0) {
        image.src = "./pink-smiley.jpeg";
    }
    // sample url: https://www.svgheart.com/wp-content/uploads/2023/02/smiley_431-430-min.png
})

// document.getElementById("image-form").addEventListener("submit", (event) => {
//     event.preventDefault();
//     const image = document.querySelector("img");
//     imageInput = event.target["image-input"].value
//     console.log(imageInput);
//     image.src = imageInput;
//     // image.src = "./pink-smiley.jpeg";
// })


// 4. [bonus] Add an event handler to #today so that whenever some or all of its text is copied,
//    that text is set as the content of #sometime.