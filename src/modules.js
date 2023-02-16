// the items in the nav bar
let nav_items = ['Time', 'Research', 'Life'];   // the nav_items can be appended
// const new_items can be added
const nav_a = ['Achievements', 'Archived'];

// n: 1 - 'Time', 2 - 'Research' deletable, 3 - 'Achievements' non deletable but different colors
const create_nav = (nav_name, n) => {
    const element = document.createElement('button');
    element.classList.add('nav-item');
    element.textContent = nav_name;
    if (n === 2) {
        const del_sign = document.createElement('span');
        del_sign.textContent = 'x';
        element.appendChild(del_sign);
        element.classList.add('nav-deletable');
    } else if (n === 3) {
        element.classList.add('nav-color');
    } else if (n === 4) {
        //  this is add a new project option
        element.classList.add('nav-add');
    } else if (n === 1) {
        element.classList.add('active');
    }
    return element;
};

const add_project = () => {
    return create_nav('Test', 2);
};

const select_project = (target) => {
    target.classList.add('active');
};

// this is the left info bar
let info = {
    'Time': ['Today', 'Week', 'Month'],
};

const create_project_list = (nav_name) => {
    const list_div = document.createElement('div');
    const list = info[nav_name];
    for (let i = 0; i < list.length; i++) {
        const element = document.createElement('button');
        element.textContent = list[i];
        list_div.appendChild(element);
    }
    return list_div
}; 


export {
    nav_items,
    nav_a,
    create_nav,
    add_project,
    select_project,
    create_project_list
}