const input = document.querySelector('.input-tesk');
const button = document.querySelector('.button-add');
const listTasks = document.querySelector('.tasks');

const myListOfItens = [];

const addTask = () => {
     myListOfItens.push({
          task: input.value,
          completed: false,
     });

     input.value = '';
     showTask();
}

const showTask = () => {
     let newLi = '';

     myListOfItens.forEach((item, posicao) => {
          newLi = newLi + 
           `
          <li class="task ${item.completed && 'check'}">
               <span class="material-symbols-outlined done" onclick="completedTesk(${posicao})">
                    check_circle
               </span>
               <p>${item.task}</p>
               <span class="material-symbols-outlined delete" onclick="deletTask(${posicao})">
                    cancel
               </span>
          </li>
          `;
     });

     listTasks.innerHTML = newLi;
};

const completedTesk = (posicao) => {
     myListOfItens[posicao].completed = !myListOfItens[posicao].completed

     showTask();
}

const deletTask = (posicao) => {
     myListOfItens.splice(posicao, 1);

     showTask();
}

button.addEventListener('click', addTask);