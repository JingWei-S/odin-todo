import { getEntry } from "./modules";

const taskObject = (taskContent, dueDate) => {
  return {
    taskContent,
    dueDate,
    isCompleted: false,
    curState: null,
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
  archive.classList.add('archive');
  task_item_whole.appendChild(archive);
  const achievement = document.createElement("img");
  achievement.src = "./images/icons/trophy.svg";
  achievement.classList.add('achivement');
  task_item_whole.appendChild(achievement);

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
    task_item.remove();
    // console.log(task.parentNode);
    // console.log(task.parentNode.parentNode);
}

const createTaskPanel = (task_storage) => {
    let task_panel = document.querySelector('.task-panel');
    if (task_panel) {
        task_panel.remove();
    }
    const { top_button, left_button } = getEntry();
    // console.log(left_button.textContent);
    // we can assume the format of task_storage
    task_panel = document.createElement('div');
    task_panel.classList.add('task-panel');
    const task_title = document.createElement('div');
    task_title.textContent = 'Tasks';
    task_panel.appendChild(task_title);

    // console.log(task_storage);
    const taskSample1 = taskObject(task_storage[0], left_button.textContent);
    const taskSample2 = taskObject(task_storage[1], top_button.textContent);
    const taskSample3 = taskObject(task_storage[2], '2021-02-02');

    // real task list
    const task_list = document.createElement('ul');
    const task1 = createTaskItem(taskSample1);
    task_list.appendChild(task1);
    const task2 = createTaskItem(taskSample2);
    task_list.appendChild(task2);
    const task3 = createTaskItem(taskSample3);
    task_list.appendChild(task3);

    task_panel.appendChild(task_list);

    return task_panel
}



export { taskObject, createTaskItem, handleCircleClick, removeTaskItem, createTaskPanel };
