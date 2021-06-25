// @ts-nocheck
const formAddTask = document.querySelector('#form-add-task');
const taskList = document.querySelector('#task-list');
const taskListContainer = document.querySelector('#task-list-container');

formAddTask.addEventListener('submit', function(event) {
	event.preventDefault();

	const task = {
		title: this.children.title.value, // input value
		done: false,
		id: new Date().getTime()
	};

	addTask(task);

	localStorage.setItem(String(task.id), JSON.stringify(task));

	markContainer();
	countTasks();

	this.reset();
});

// read data
for (let key in localStorage) {
	if (localStorage.hasOwnProperty(key)) {
		const task = JSON.parse(localStorage[key]);
		addTask(task);
	}
}

taskList.addEventListener('click', event => {
	if (!event.target.classList.contains('btn-close')) return;

	// const parentNode = event.target.parentNode;
	const { parentNode } = event.target; // <li>

	const taskId = parentNode.getAttribute('data-id');
	localStorage.removeItem(taskId);
	parentNode.remove();

	markContainer();
	countTasks();
});

markContainer();
countTasks();

function addTask(task) {
	const listItem = document.createElement('li');
	listItem.innerText = task.title;
	listItem.classList.add('list-item');
	listItem.setAttribute('data-id', task.id);

	const btnDelete = document.createElement('button');
	btnDelete.classList.add('btn-close');
	btnDelete.innerHTML = '&times;';

	taskList.appendChild(listItem);
	listItem.appendChild(btnDelete);
}

function markContainer() {
	if (localStorage.length) {
		taskListContainer.classList.add('has-tickets');
	} else {
		taskListContainer.classList.remove('has-tickets');
	}
}

function countTasks() {
	const element = document.querySelector('#task-count');

	const values = Object.values(localStorage);

	element.innerText = values.filter(item => !JSON.parse(item).done).length;
}