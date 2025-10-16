const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// Exercise 1

const red_p = document.createElement("p")
red_p.style.color = "red"
red_p.textContent = "Hey I'm red!"

container.appendChild(red_p)

// Exercise 2

const blue_h3 = document.createElement("h3")
blue_h3.style.color = "blue"
blue_h3.textContent = "I'm a blue h3!"

container.appendChild(blue_h3)

// Exercise 3

const pink_box = document.createElement("div")
const another_h1 = document.createElement("h1")
const p_wants_to_be_a_heading = document.createElement("p")

pink_box.style.cssText = "border: 1px solid black; background-color: pink;"
another_h1.textContent = "I'm a div"
p_wants_to_be_a_heading.textContent = "ME TOO!"

pink_box.appendChild(another_h1)
pink_box.appendChild(p_wants_to_be_a_heading)

container.appendChild(pink_box)