
const taskObject = (taskContent, dueDate) => {
    return {
        taskContent,
        dueDate,
        isCompleted: false,
        curState: null
    }
};


const createTaskItem = (taskObject) => {
    const task_item_li = document.createElement('li');
    const task_item_whole = document.createElement('div');
    task_item_whole.classList.add('item-li');
    const task_item_circle = document.createElement('span');
    task_item_circle.classList.add('circle');
    task_item_whole.appendChild(task_item_circle);
    const task_item_desp = document.createElement('div');
    task_item_desp.textContent = taskObject.taskContent;
    task_item_whole.appendChild(task_item_desp);
    const task_item_due = document.createElement('div');
    task_item_due.textContent = taskObject.dueDate.toString();
    task_item_due.classList.add('due-date');
    task_item_whole.appendChild(task_item_due);
    const archive = document.createElement('img');
    archive.src = './images/icons/archive-arrow-down-outline.svg';
    task_item_whole.appendChild(archive);
    const achievement = document.createElement('img');
    achievement.src = './images/icons/trophy.svg';
    task_item_whole.appendChild(achievement);
    
    task_item_li.appendChild(task_item_whole);
    return task_item_li
}

export {
    taskObject,
    createTaskItem
}