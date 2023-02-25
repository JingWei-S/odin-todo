import { nav_items } from "./modules";
import { nav_a } from "./modules";
import { create_nav } from "./modules";
import { add_project } from "./modules";
import { create_project_list } from "./modules";
import { get_task_handlers } from "./tasks";
import { createTaskPanel } from "./tasks";
import { left_nav_selection } from "./modules";
import { add_button_event_listener } from "./tasks";
import { handle_cancel_button } from "./tasks";
import { handle_submit_button } from "./tasks";
import { createDonePanel } from "./tasks";

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
footer.textContent = "Made By Jing";
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
    if (
      (nav_i.textContent != "Achievements") &
      (nav_i.textContent != "Archived")
    ) {
      list_bar.style.display = 'flex';
      const list = create_project_list(nav_i.textContent);
      // this is to remove all the children nodes
      while (list_bar.firstChild) {
        list_bar.replaceChildren();
      }
      list_bar.appendChild(list);
      const task_panel = createTaskPanel(taskSamples);
      content.appendChild(task_panel);
      left_nav_selection(list_bar);
      // add button listener
      add_button_event_listener();
      // here I can set up the cancel button and submit button feature
      handle_cancel_button();
      handle_submit_button();
      get_task_handlers.handle_achivement();
      get_task_handlers.handle_archive();
      get_task_handlers.handle_circle_click();
    } else {
      while (list_bar.firstChild) {
        list_bar.replaceChildren();
      }
      const text = document.createElement('div');
      text.textContent = `See What You've Finished!`;
      text.style.fontSize = '36px';
      text.style.textAlign = 'center';
      list_bar.appendChild(text);
      list_bar.style.alignContent = 'center';
      const done_board = createDonePanel(nav_i, taskSamples);
      // console.log(nav_i.textContent)
      content.appendChild(done_board);
    }
  }
});

content.append(list_bar);
left_nav_selection(list_bar);
const task_panel = createTaskPanel(taskSamples);

// add to content
content.appendChild(task_panel);

// add button listener
add_button_event_listener();
// here I can set up the cancel button and submit button feature
handle_cancel_button();
handle_submit_button();

get_task_handlers.handle_achivement();
get_task_handlers.handle_archive();
get_task_handlers.handle_circle_click();
