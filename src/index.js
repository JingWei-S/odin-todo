import { nav_items } from "./modules";
import { nav_a } from "./modules";
import { create_nav } from "./modules";
import { add_project } from "./modules";

// this is for the DOM manipulation stuff page

// the body
const body = document.querySelector('body');

// the main content part
const content = document.querySelector('.content');

// add a header
const header = document.createElement('div');
// const h_text = document.createElement('p');
// h_text.textContent = 'My PhD To-Do Loooooooong List';
// header.appendChild(h_text);
header.classList.add('header');
body.insertBefore(header, content);


// add a footer
const footer = document.createElement('div');
footer.textContent = 'Made By Jing with PhD Regrets';
footer.classList.add('footer');
content.after(footer);

// add a navigation bar on the left
const nav_bar = document.createElement('div');
nav_bar.classList.add('nav');
// create the nav bar
const nav_project = document.createElement('div');
for (let i = 0; i < nav_items.length; i++) {
    const element = i === 0? create_nav(nav_items[i], 1) : create_nav(nav_items[i], 2);
    nav_project.appendChild(element);
}
nav_bar.appendChild(nav_project);

// create add option
const add_nav = create_nav('Add new +', 4);
nav_bar.appendChild(add_nav);

add_nav.addEventListener('click', () => {
    const element = add_project();
    nav_project.appendChild(element);
    console.log('test');
})

// nav items on the right
const nav_a_element = document.createElement('div');
for (let i = 0; i < 2; i++) {
    const element = create_nav(nav_a[i], 3);
    nav_a_element.appendChild(element);
}
nav_bar.appendChild(nav_a_element);
content.appendChild(nav_bar);




