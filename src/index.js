import { nav_items } from "./modules";
import { nav_a } from "./modules";
import { create_nav } from "./modules";
import { add_project } from "./modules";
import { create_project_list } from "./modules";
import { taskObject } from "./tasks";
import { createTaskItem } from "./tasks";
import { handleCircleClick } from "./tasks";

// this is for the DOM manipulation stuff page

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
    console.log(nav_project.childNodes.length);
  }
});

// nav items on the right
const nav_a_element = document.createElement("div");
for (let i = 0; i < 2; i++) {
  const element = create_nav(nav_a[i], 3);
  nav_a_element.appendChild(element);
}
nav_bar.appendChild(nav_a_element);
content.appendChild(nav_bar);  // the top thing

// need to create the left columns
const list_bar = document.createElement('div');
list_bar.classList.add('list-bar');
const list = create_project_list('Time');
list_bar.appendChild(list);
const nav_group = document.querySelectorAll('.nav-item');
nav_bar.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    nav_group.forEach((nav_i) => {
      console.log(nav_i.classList.contains('active'));
      nav_i.classList.remove('active');
    });
    
    const nav_i = event.target;
    nav_i.classList.add('active');
    const list = create_project_list(nav_i.textContent);
    // this is to remove all the children nodes
    while (list_bar.firstChild) {
      list_bar.replaceChildren();
    }
    list_bar.appendChild(list);
  }
});

content.append(list_bar);


// initiate the task panel
const task_panel = document.createElement('div');
task_panel.classList.add('task-panel');
const task_title = document.createElement('div');
task_title.textContent = 'Tasks';
task_panel.appendChild(task_title);

const taskSamples = ['Sleep for 12 hours', 'Study for 24 hours', 'Hunting Alligators Non STOP'];

const taskSample1 = taskObject(taskSamples[0], '2021-02-02');
const taskSample2 = taskObject(taskSamples[1], '2021-02-02');
const taskSample3 = taskObject(taskSamples[2], '2021-02-02');

// real task list
const task_list = document.createElement('ul');
const task1 = createTaskItem(taskSample1);
task_list.appendChild(task1);
const task2 = createTaskItem(taskSample2);
task_list.appendChild(task2);
const task3 = createTaskItem(taskSample3);
task_list.appendChild(task3);

task_panel.appendChild(task_list);

// add to content
content.appendChild(task_panel);

// add the event listener to the circle
const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
  circle.addEventListener('click', () => {
    console.log('test')
    handleCircleClick(circle);
  });
});





