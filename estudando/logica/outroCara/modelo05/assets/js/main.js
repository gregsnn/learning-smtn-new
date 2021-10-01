function tasks () {

  const INPUT_TASK = document.querySelector('.inputNewTask');
  const BTN_ADDTASK = document.querySelector('.btnAddTask');
  const TASKS = document.querySelector('.tasks');

  function createTask (inputText) {
    const LI = createLI();
    LI.innerHTML = inputText;
    TASKS.appendChild(LI);
    clearInput();
    createDelBtn(LI);
    saveTask();
  }

  function saveTask () {
    const LI_TASKS = TASKS.querySelectorAll('li');
    const TASKS_LIST = [];

    for (let task of LI_TASKS) {
      let textTask = task.innerText;
      textTask = textTask.replace(/Delete/gi, '');
      TASKS_LIST.push(textTask);
    }

    const TASKS_JSON = JSON.stringify(TASKS_LIST);
    localStorage.setItem('tasks', TASKS_JSON);
  }

  function addSavedTasks () {
    const TASKS = localStorage.getItem('tasks');
    const TASKS_LIST = JSON.parse(TASKS);

    for (let task of TASKS_LIST) {
      createTask(task);
    }
  }
  addSavedTasks();

  function createDelBtn (li) {
    const DEL_BUTTON = document.createElement('button');
    DEL_BUTTON.innerText = 'Delete';
    DEL_BUTTON.setAttribute('class', 'del');
    DEL_BUTTON.setAttribute('title', 'Delete task');
    li.appendChild(DEL_BUTTON);
  }

  function createLI () {
    const LI = document.createElement('li');
    return LI;
  }

  function clearInput () {
    INPUT_TASK.value = '';
  }

  INPUT_TASK.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
      if (!INPUT_TASK.value) return;
      createTask(INPUT_TASK.value);
    }
  });

  BTN_ADDTASK.addEventListener('click', function (e) {
    if (!INPUT_TASK.value) return;

    createTask(INPUT_TASK.value);
  });

  document.addEventListener('click', function (e) {
    const EL = e.target;

    if (EL.classList.contains('del')) {
      EL.parentElement.remove();
      saveTask();
    }
  });
}
tasks();