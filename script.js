//your JS code here. If required.
// Select the main container
const container = document.querySelector(".container");

// Create a document fragment
const fragment = document.createDocumentFragment();

// Create 800 boxes
for (let i = 0; i < 800; i++) {

    const div = document.createElement("div");

    div.classList.add("box");

    // Mouse enter event
    div.addEventListener("mouseenter", (e) => {

        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        e.target.style.backgroundColor =
            `rgb(${red}, ${green}, ${blue})`;

        e.target.style.boxShadow = "1px 1px 1px black";
    });

    // Mouse out event
    div.addEventListener("mouseout", (e) => {

        setTimeout(() => {
            e.target.style.backgroundColor = "grey";
        }, 1000);

    });

    // Append div to fragment
    fragment.appendChild(div);
}

// Append fragment to container
container.append(fragment);
