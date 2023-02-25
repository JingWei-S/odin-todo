import { insertTasks } from "./modules";
import { getEntry } from "./modules";


const taskObject = (taskContent, dueDate, entry) => {
  return {
    taskContent,
    dueDate,
    entry,
  };
};

const createTaskItem = (taskObject) => {
  const task_item_li = document.createElement("li");
  const task_item_whole = document.createElement("div");
  task_item_whole.classList.add("item-li");
  const task_item_circle = document.createElement("span");
  task_item_circle.classList.add("circle");
  task_item_whole.appendChild(task_item_circle);
  const task_item_desp = document.createElement("div");
  task_item_desp.textContent = taskObject.taskContent;
  task_item_whole.appendChild(task_item_desp);
  const task_item_due = document.createElement("div");
  task_item_due.textContent = taskObject.dueDate.toString();
  task_item_due.classList.add("due-date");
  task_item_whole.appendChild(task_item_due);
  const archive = document.createElement("img");
  archive.src = "./images/icons/archive-arrow-down-outline.svg";
  archive.classList.add("archive");
  task_item_whole.appendChild(archive);
  const achievement = document.createElement("img");
  achievement.src = "./images/icons/trophy.svg";
  achievement.classList.add("achivement");
  task_item_whole.appendChild(achievement);

  task_item_li.appendChild(task_item_whole);
  return task_item_li;
};

const createFinishedItem = (status, taskObject) => {
  const task_item_li = document.createElement("li");
  const task_item_whole = document.createElement("div");
  task_item_whole.classList.add("item-li");
  const task_item_circle = document.createElement("span");
  task_item_circle.classList.add("circle");
  task_item_circle.classList.add("checked");
  const check = document.createElement("span");
  check.textContent = "\u2713";
  check.classList.add("check");
  task_item_circle.appendChild(check);
  task_item_whole.appendChild(task_item_circle);
  const task_item_desp = document.createElement("div");
  console.log(taskObject);
  task_item_desp.textContent = taskObject.taskContent;
  task_item_whole.appendChild(task_item_desp);
  console.log(status);
  if (status.textContent === "Archived") {
    const archive = document.createElement("img");
    archive.src = "./images/icons/archive-arrow-down-outline.svg";
    archive.classList.add("archive");
    archive.style.marginLeft = "auto";
    task_item_whole.appendChild(archive);
  } else {
    const achievement = document.createElement("img");
    achievement.src = "./images/icons/trophy.svg";
    achievement.classList.add("achivement");
    achievement.style.marginLeft = "auto";
    task_item_whole.appendChild(achievement);
  }

  task_item_li.appendChild(task_item_whole);
  return task_item_li;
};

const handleCircleClick = (circle) => {
  if (circle.classList.contains("checked")) {
    circle.classList.remove("checked");
    // console.log(circle.firstChild);
    circle.removeChild(circle.firstChild);
    reverseText(circle.nextElementSibling);
  } else {
    const check = document.createElement("span");
    check.textContent = "\u2713";
    check.classList.add("check");
    circle.appendChild(check);
    circle.classList.add("checked");
    crossoverText(circle.nextElementSibling);
  }
};

const crossoverText = (desp) => {
  desp.classList.add("crossover");
};

const reverseText = (desp) => {
  desp.classList.remove("crossover");
};

// make task items disappear from the panel
const removeTaskItem = (task) => {
  const task_item = task.parentNode.parentNode;
  console.log(task.parentNode);
  task_item.remove();
};

const createTaskPanel = (task_storage) => {
  let task_panel = document.querySelector(".task-panel");
  if (task_panel) {
    task_panel.remove();
  }

  // console.log(left_button.textContent);
  // we can assume the format of task_storage
  task_panel = document.createElement("div");
  task_panel.classList.add("task-panel");
  const task_title = document.createElement("div");
  task_title.textContent = "Tasks";
  task_panel.appendChild(task_title);

  //   console.log(task_storage);
  //   const taskSample1 = taskObject(task_storage[0], left_button.textContent);
  //   const taskSample2 = taskObject(task_storage[1], top_button.textContent);
  //   const taskSample3 = taskObject(task_storage[2], "2021-02-02");

  // real task list
  const task_list = document.createElement("ul");
  if (task_storage) {
    for (let task of task_storage) {
      const task_i = createTaskItem(task);
      task_list.appendChild(task_i);
    }
  }

  //   const task1 = createTaskItem(task_storage);
  //   task_list.appendChild(task1);
  //   const task2 = createTaskItem(taskSample2);
  //   task_list.appendChild(task2);
  //   const task3 = createTaskItem(taskSample3);
  //   task_list.appendChild(task3);

  const add_task = document.createElement("button");
  add_task.textContent = "+ Add Task";
  add_task.setAttribute("id", "add-task");
  task_list.appendChild(add_task);
  task_panel.appendChild(task_list);

  const form_container = document.createElement("div");
  form_container.classList.add("form-container");
  const form = taskForm();
  form_container.appendChild(form);
  task_panel.appendChild(form_container);
  //   console.log("test");

  return task_panel;
};

const add_button_event_listener = () => {
  const add_task = document.querySelector("#add-task");
  add_task.addEventListener("click", (e) => {
    // make the button disappear first
    e.target.style.display = "none";
    // then make the form appear
    const form_container = document.querySelector(".form-container");
    form_container.style.display = "flex";
  });
};

const handle_cancel_button = () => {
  const cancel_btn = document.querySelector('input[type="button"]');
  cancel_btn.addEventListener("click", () => {
    form_reform();
  });
};

const form_reform = () => {
  // make the form disappear
  const form_container = document.querySelector(".form-container");
  form_container.style.display = "none";
  // then make the add button appear again
  const add_task = document.querySelector("#add-task");
  add_task.style.display = "block";
};

const taskForm = () => {
  const form = document.createElement("form");
  form.action = "#";
  //
  const task_div = document.createElement("div");
  const task_label = document.createElement("label");
  task_label.setAttribute("for", "task_desp");
  task_label.textContent = "To-do task:";
  const task_input = document.createElement("input");
  task_input.setAttribute("type", "text");
  task_input.setAttribute("name", "task_desp");
  task_input.setAttribute("id", "task_desp");
  task_input.setAttribute("placeholder", "Writing my thesis all day");
  task_div.appendChild(task_label);
  task_div.appendChild(task_input);
  //
  const date_div = document.createElement("div");
  const date_label = document.createElement("label");
  date_label.setAttribute("for", "task_due");
  date_label.textContent = "Due date:";
  const date_select = document.createElement("input");
  date_select.setAttribute("type", "date");
  date_select.setAttribute("name", "task_due");
  date_select.setAttribute("id", "task_due");
  date_div.appendChild(date_label);
  date_div.appendChild(date_select);
  // add two buttons
  const button_div = document.createElement("div");
  button_div.classList.add("button-group");
  const button_cancel = document.createElement("input");
  button_cancel.setAttribute("type", "button");
  button_cancel.setAttribute("value", "Cancel");
  const button_submit = document.createElement("input");
  button_submit.setAttribute("type", "submit");
  button_submit.setAttribute("value", "Add Task");
  button_div.appendChild(button_cancel);
  button_div.appendChild(button_submit);
  //
  form.appendChild(task_div);
  form.appendChild(date_div);
  form.appendChild(button_div);
  return form;
};

const handle_submit_button = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const task_desp = form.elements.task_desp.value;
    const task_due = form.elements.task_due.value;
    // need to save the new task to the storage
    const { top_button, left_button } = getEntry();
    const newTask = taskObject(task_desp, task_due, left_button.textContent);
    
    
    insertTasks(top_button.textContent, newTask);
    // but also create a new object and append to the list
    //
    const task_list = document.querySelector("ul");
    const task = createTaskItem(newTask);
    const add_task = document.querySelector("#add-task");
    task_list.insertBefore(task, add_task);
    form.reset();
    // make the button form disappear
    form_reform();
  });
};

const get_task_handlers = (() => {
  //   console.log("lol");
  // handle the circle click - this is only for DOM manipulation
  const handle_circle_click = () => {
    const circles = document.querySelectorAll(".circle");
    // console.log(document.querySelector("ul"));
    circles.forEach((circle) => {
      circle.addEventListener("click", () => {
        handleCircleClick(circle);
      });
    });
  };

  // manipulate achievements
  const handle_achivement = () => {
    const ach_icons = document.querySelectorAll(".achivement");
    ach_icons.forEach((ach) => {
      ach.addEventListener("click", () => {
        removeTaskItem(ach);
      });
    });
  };

  // manipulate archive
  const handle_archive = () => {
    const axv_icons = document.querySelectorAll(".archive");
    axv_icons.forEach((axv) => {
      axv.addEventListener("click", () => {
        removeTaskItem(axv);
      });
    });
  };

  return {
    handle_circle_click,
    handle_achivement,
    handle_archive,
  };
})();

const createDonePanel = (nav, task_storage) => {
  let task_panel = document.querySelector(".task-panel");
  if (task_panel) {
    task_panel.remove();
  }
  task_panel = document.createElement("div");
  task_panel.classList.add("task-panel");
  task_panel.classList.add("done");
  const task_title = document.createElement("div");
  task_title.textContent = nav.textContent + " Board";
  task_panel.appendChild(task_title);

  const taskSample1 = taskObject(task_storage[0], nav.textContent);
  const taskSample2 = taskObject(task_storage[1], nav.textContent);
  const taskSample3 = taskObject(task_storage[2], "2021-02-02");

  // real task list
  const task_list = document.createElement("ul");
  const task1 = createFinishedItem(nav, taskSample1);
  console.log(task1);
  task_list.appendChild(task1);
  const task2 = createFinishedItem(nav, taskSample2);
  task_list.appendChild(task2);
  const task3 = createFinishedItem(nav, taskSample3);
  task_list.appendChild(task3);
  task_panel.appendChild(task_list);

  return task_panel;
};

export {
  taskObject,
  createTaskItem,
  handleCircleClick,
  removeTaskItem,
  createTaskPanel,
  add_button_event_listener,
  handle_cancel_button,
  handle_submit_button,
  get_task_handlers,
  createDonePanel,
};
