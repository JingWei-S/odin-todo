import { nav_items } from "./modules";
import { nav_a } from "./modules";
import { create_nav } from "./modules";
import { add_project } from "./modules";
import { create_project_list } from "./modules";
import { taskObject } from "./tasks";
import { createTaskItem } from "./tasks";
import { handleCircleClick } from "./tasks";
import { removeTaskItem } from "./tasks";
import { createTaskPanel } from "./tasks";
import { left_nav_selection } from "./modules";
import { add_button_event_listener } from "./tasks";


// this is for the DOM manipulation stuff page

// initiate the task panel temporarily
const taskSamples = [
  "Sleep for 12 hours",
  "Study for 24 hours",
  "Hunting Alligators Non STOP",
];

// the body
const body = document.querySelector("body");

// the main content part
const content = document.querySelector(".content");

// add a header
const header = document.createElement("div");
// const h_text = document.createElement('p');
// h_text.textContent = 'My PhD To-Do Loooooooong List';
// header.appendChild(h_text);
header.classList.add("header");
body.insertBefore(header, content);

// add a footer
const footer = document.createElement("div");
footer.textContent = "Made By Jing with PhD Regrets";
footer.classList.add("footer");
content.after(footer);

// add a navigation bar on the top
const nav_bar = document.createElement("div");
nav_bar.classList.add("nav");
// create the nav bar
const nav_project = document.createElement("div");
for (let i = 0; i < nav_items.length; i++) {
  const element =
    i === 0 ? create_nav(nav_items[i], 1) : create_nav(nav_items[i], 2);
  nav_project.appendChild(element);
}
nav_bar.appendChild(nav_project);

// create add option
const add_nav = create_nav("Add new +", 4);
nav_bar.appendChild(add_nav);

add_nav.addEventListener("click", () => {
  // we do not allow appending new projects indefinitely
  if (nav_project.childNodes.length < 6) {
    const element = add_project();
    nav_project.appendChild(element);
    
  }
});

// nav items on the right
const nav_a_element = document.createElement("div");
for (let i = 0; i < 2; i++) {
  const element = create_nav(nav_a[i], 3);
  nav_a_element.appendChild(element);
}
nav_bar.appendChild(nav_a_element);
content.appendChild(nav_bar); // the top thing

// need to create the left columns
const list_bar = document.createElement("div");
list_bar.classList.add("list-bar");
const list = create_project_list("Time");
list_bar.appendChild(list);
const nav_group = document.querySelectorAll(".nav-item");
nav_bar.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    nav_group.forEach((nav_i) => {
      nav_i.classList.remove("active");
    });

    const nav_i = event.target;
    nav_i.classList.add("active");
    const list = create_project_list(nav_i.textContent);
    // this is to remove all the children nodes
    while (list_bar.firstChild) {
      list_bar.replaceChildren();
    }
    list_bar.appendChild(list);
    const task_panel = createTaskPanel(taskSamples);
    content.appendChild(task_panel);
    left_nav_selection(list_bar);
  }
});

content.append(list_bar);
left_nav_selection(list_bar);
const task_panel = createTaskPanel(taskSamples);


// add to content
content.appendChild(task_panel);

// add button listener
add_button_event_listener();


// add the event listener to the circle
const circles = document.querySelectorAll(".circle");
circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    handleCircleClick(circle);
  });
});

// manipulate achievements
const ach_icons = document.querySelectorAll(".achivement");
ach_icons.forEach((ach) => {
  ach.addEventListener("click", () => {
    removeTaskItem(ach);
  });
});

// manipulate archive
const axv_icons = document.querySelectorAll(".archive");
axv_icons.forEach((axv) => {
  axv.addEventListener("click", () => {
    removeTaskItem(axv);
  });
});
