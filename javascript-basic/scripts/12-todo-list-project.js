/*****************Practice 1*********************/
/*

  Steps (Algorithm)
  
  1. Create array to store todos
  2. When we click "Add",
  3. Get text from textbox.
  4. Add it to array.
  5. console.log() the array

*/

//PRACTICE 2

const todoList = [{
  name:'make dinner', 
  dueDate: '2023-12-22'
},{ 
  name:'wash dishes',
  dueDate: '2023-12-22'
}]; 

//diplay todo list on the webpage
renderTodoList();

function renderTodoList (){
  //Accumulator Pattern to put the HTML on the webpage
  //create a variable to store the result.
  let todoListHTML = '';


  //ForEach method
  todoList.forEach((todoObject, index) => {
    //get the string for ech index above
    //const todoObject = todoList[i];

    //to get the name and due date of the object
      //const name = todoObject.name;
      //const dueDate = todoObject.dueDate;

    //Destructring = shortcut
    const { name, dueDate } = todoObject;

    //Create some HTML code for each todo
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="css-delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });

  
 

  //Put the HTML on the webpage
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;


  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => { //Closure
      deleteButton.addEventListener('click', () => {
        //console.log(index); Closure
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    addTodo();
  });



//PRACTICE 1

function addTodo(){
  const inputElements = document.querySelector('.js-name-input');

  const dateInputElements = document.querySelector('.js-due-date-input');

  //value property represents the text inside the textbox (input).
  const name = inputElements.value;
  const dueDate = dateInputElements.value;
  
  todoList.push({
    //name: name,
    //dueDate: dueDate

    //shortcut for the above code
    name,
    dueDate
  });
  

  //change the value property to reset the value inside the textbox
  inputElements.value = '';

  //everytime we add a todo to the list, we will also gonna display the list again.
  renderTodoList();

}