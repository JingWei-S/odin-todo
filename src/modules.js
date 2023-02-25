import { createTaskPanel } from "./tasks";
import { add_button_event_listener } from "./tasks";
import { handle_cancel_button } from "./tasks";
import { handle_submit_button } from "./tasks";
import { get_task_handlers } from "./tasks";
import { taskObject } from "./tasks";

// initiate the task panel temporarily
const taskSamples = [
  "Sleep for 12 hours",
  "Study for 24 hours",
  "Hunting Alligators Non STOP",
];

const taskSampleArray = [
  taskObject(taskSamples[0], "2023-12-31", "Today"),
  taskObject(taskSamples[1], "1996-03-17", "Week"),
  taskObject(taskSamples[2], "2021-02-02", "Month"),
];

//

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
      const { top_button, left_button } = getEntry();
      const tasks = getTasks(top_button.textContent, left_button.textContent);
      const task_panel = createTaskPanel(tasks);
      content.appendChild(task_panel);
      // add button listener
      add_button_event_listener();
      // here I can set up the cancel button and submit button feature
      handle_cancel_button();
      handle_submit_button();
      get_task_handlers.handle_achivement();
      get_task_handlers.handle_archive();
      get_task_handlers.handle_circle_click();
    }
  });
};

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

if (storageAvailable("localStorage")) {
  console.log("Testing local storage!");
} else {
  console.log("Bad bad bad");
}

const saveTasks = (entry, taskObject) => {
  localStorage.setItem(entry, JSON.stringify(taskObject));
};

const removeTask = (entry, taskObject) => {
  const task_storage = localStorage.getItem(entry);
  if (task_storage !== null) {
    const tasks = JSON.parse(task_storage);
    const index = tasks.findIndex(
      (t) =>
        (t.taskContent === taskObject.taskContent &&
        t.dueDate === taskObject.dueDate) && (
            t.entry === taskObject.entry
        )
    );
    
    if (index !== -1) {
        tasks.splice(index, 1);
        saveTasks(entry, tasks);
    } 
  }

};

const getTasks = (entry, select = null) => {
  const task_storage = localStorage.getItem(entry);
  if (task_storage !== null) {
    const tasks = JSON.parse(task_storage);
    if (select !== null) {
      const selected_tasks = tasks.filter((t) => t.entry === select);
      return selected_tasks;
    } else {
      return tasks;
    }
  }
};

const insertTasks = (entry, task) => {
  const og_task_storage = localStorage.getItem(entry);
  const og_tasks = og_task_storage === null ? [] : JSON.parse(og_task_storage);
  
  og_tasks.push(task);
  saveTasks(entry.toString(), og_tasks);
//   console.log(typeof(entry));
};

// this is key to store the data locally :)
for (let task of taskSampleArray) {
    insertTasks("Time", task);
}


export {
  nav_items,
  nav_a,
  create_nav,
  add_project,
  select_project,
  create_project_list,
  getEntry,
  left_nav_selection,
  taskSamples,
  getTasks,
  insertTasks,
  removeTask
};
