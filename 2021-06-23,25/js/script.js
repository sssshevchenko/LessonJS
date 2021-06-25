// @ts-nocheck
import{
	formSubmitHandler,
	closeBtnHandler,
	markContainer,
	countTasks,
	addTask
} from './functions.js';

import {
	formAddTask,
	taskList
} from './vars.js';

formAddTask.addEventListener('submit', formSubmitHandler);
taskList.addEventListener('click', closeBtnHandler);
taskList.addEventListener('click', checkBtnHandler);

// read data
for (let key in localStorage) {
	if (localStorage.hasOwnProperty(key)) {
		const task = JSON.parse(localStorage[key]);
		addTask(task);
	}
}

markContainer();
countTasks();