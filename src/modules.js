import { createTaskPanel } from "./tasks";

// initiate the task panel temporarily
const taskSamples = [
  "Sleep for 12 hours",
  "Study for 24 hours",
  "Hunting Alligators Non STOP",
];

const content = document.querySelector(".content");
// the items in the nav bar
let nav_items = ["Time", "Research", "Life"]; // the nav_items can be appended
// const new_items can be added
const nav_a = ["Achievements", "Archived"];

// n: 1 - 'Time', 2 - 'Research' deletable, 3 - 'Achievements' non deletable but different colors
const create_nav = (nav_name, n) => {
  const element = document.createElement("button");
  element.classList.add("nav-item");
  element.textContent = nav_name;
  if (n === 2) {
    const del_sign = document.createElement("span");
    del_sign.textContent = "x";
    element.appendChild(del_sign);
    element.classList.add("nav-deletable");
  } else if (n === 3) {
    element.classList.add("nav-color");
  } else if (n === 4) {
    //  this is add a new project option
    element.classList.add("nav-add");
  } else if (n === 1) {
    element.classList.add("active");
  }
  return element;
};

const add_project = () => {
  return create_nav("Test", 2);
};

const select_project = (target) => {
  target.classList.add("active");
};

// this is the left info bar
let info = {
  Time: ["Today", "Week", "Month"],
  Researchx: ["Study", "Paper", "Thesis", "Others"],
  Lifex: ["Grocery", "Chores", "Utility", "Others"],
};

const create_project_list = (nav_name) => {
  const list_ul = document.createElement("div");
  const list = info[nav_name];
  for (let i = 0; i < list.length; i++) {
    const element = document.createElement("button");
    element.classList.add("specific-choice");
    if (i === 0) {
      element.classList.add("entry-select");
    }
    element.textContent = list[i];
    list_ul.appendChild(element);
  }
  return list_ul;
};

// I need to get current selected top nav and left nav
const getEntry = () => {
  const top_button = document.querySelector(".nav-item.active");
  const left_button = document.querySelector(".specific-choice.entry-select");

  return { top_button, left_button };
};

const left_nav_selection = (list_bar) => {
  // add the event listener to the left nav bar
  const all_list_item = document.querySelectorAll(".specific-choice");
  list_bar.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      all_list_item.forEach((li) => {
        li.classList.remove("entry-select");
      });

      const selected_li = event.target;
      selected_li.classList.add("entry-select");
      const task_panel = createTaskPanel(taskSamples);
      content.appendChild(task_panel);
    }
  });
};

export {
  nav_items,
  nav_a,
  create_nav,
  add_project,
  select_project,
  create_project_list,
  getEntry,
  left_nav_selection,
};
