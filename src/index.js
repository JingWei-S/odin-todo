// this is for the DOM manipulation stuff page

// the body
const body = document.querySelector('body');

// the main content part
const content = document.querySelector('.content');

// add a header
const header = document.createElement('div');
const h_text = document.createElement('p');
h_text.textContent = 'My PhD To-Do Loooooooong List';
header.appendChild(h_text);
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
// the items in the nav bar
const timespan = ['Today', 'This Week', 'This Month', 'This year'];
// I will allow add more customized projects
const projects = ['Research Ideas', 'Study Progress', 'Paper Writing'];
for (let i=0; i < timespan.length; i++) {
    const item = document.createElement('a');
    const image = document.createElement('img');
    image.src = '#';
    const item_p = document.createElement('span');
    item_p.textContent = timespan[i];
    item.appendChild(image);
    item.appendChild(item_p);
    item.classList.add('nav_item');
    nav_bar.appendChild(item);
}
content.appendChild(nav_bar);

