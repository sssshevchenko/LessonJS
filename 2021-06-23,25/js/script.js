const formAddTask = document.querySelector('#form-add-task');
const taskList = document.querySelector('#task-list');
const taskListContainer = document.querySelector('#task-list-container');

formAddTask.addEventListener('submit', function(event){
  event.preventDefault();

  //console.log(this.children.title.value);   //title - name of input
  const task = {
    title: this.children.title.value,
    done: false,
    id: new Date().getTime()
  };

  addTask(task);
  
  localStorage.setItem(String(task.id), JSON.stringify(task));

  this.reset();
});

function addTask(task){
  const listItem = document.createElement('li');
  listItem.innerText = task.title;
  listItem.classList.add('list-item');
  listItem.setAttribute('data-id', task.id);
  taskList.appendChild(listItem);
  //listItem.innerHTML = '<button class="btn-close">&times;</button>'
  const btnDelete = document.createElement('button');
  btnDelete.classList.add('btn-close');
  btnDelete.innerHTML = '&times;';
  listItem.appendChild(btnDelete);
}

function markContainer(){
  if(localStorage.length){
    taskListContainer.classList.add('has-tickets');
  } else{
    taskListContainer.classList.remove('has-tickets');
  }
}

markContainer();
//read data from localStorage
for(let key in localStorage){
  if(localStorage.hasOwnProperty(key)){
    const task = JSON.parse(localStorage[key]);
    addTask(task);
  };
}

taskList.addEventListener('click', (event) =>{
  if(!event.target.classList.contains('btn-close')) return;

  //const parentNode = event.target.parentNode;
  const {parentNode} = event.target;
  const taskId = parentNode.getAttribute('data-id');
  localStorage.removeItem(taskId);
  parentNode.remove();
})