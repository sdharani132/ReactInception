const heading = document.createElement('h2');

heading.innerText = "This is heading";

const uo_list = document.createElement('ul');
const lists = ['list1', 'list2', 'list3'];
lists.forEach((value) => {
    const list = document.createElement('li');
    list.innerText = value;
    uo_list.appendChild(list);
});

const root = document.querySelector('body');
root.appendChild(heading);
root.appendChild(uo_list);