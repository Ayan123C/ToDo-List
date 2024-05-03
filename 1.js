let todoList = [];

// local storage
if (localStorage.getItem('todoList')) {
    todoList = JSON.parse(localStorage.getItem('todoList'));
    displayItems();
}

function addTodo() {
    //select the input tag using ID
    let inputElement = document.querySelector('#todo-input');
    let inputDate = document.querySelector('#todo-date');

    //get the value of the input
    let todoitem = inputElement.value;
    let tododate = inputDate.value;

    //push the value into a list
    // todoList.push(todoitem);
    todoList.push({ item: todoitem, dueDate: tododate });

    //reinitilize the value with '' such that the value dissappears after adding to the list
    inputElement.value = '';
    inputDate.value = '';

    //print the list
    // console.log(todoList);

    //enter an element and add to local storage
    localStorage.setItem('todoList', JSON.stringify(todoList));
    displayItems();
}

// function displayItems(){

//     //get the p tag
//     let displayElement=document.querySelector('#todo-Item');

//     //empty it before every print of innerText
//     displayElement.innerText='';

//     //display the list along with the prev innerText
//     for(let i=0;i<todoList.length;i++){
//         displayElement.innerText=displayElement.innerText+ "\n" +todoList[i];
//     }
// }



function displayItems() {
    //get the class container i.e innerHTML class
    let containerElement = document.querySelector('.todo-container');

    //make a variable for the div to use
    let newHTML = '';

    //loop through the list
    for (let i = 0; i < todoList.length; i++) {

        //keep the {item,dueDate} in variables to store
        // let item=todoList[i].item;
        // let date=todoList[i].dueDate;

        //destructuring
        let { item, dueDate } = todoList[i];

        //append the item & date with delete button as HTML
        newHTML += `
        
            <span>${item}</span>
            <span>${dueDate}</span>
            <!--<button onclick="todoList.splice(${i},1); displayItems();">Delete</button>-->
            <button onclick="deleteItems(${i}); displayItems();">Delete</button>
        
        `;
    }

    //change the HTML container's innerHTML every time add button is pressed.
    containerElement.innerHTML = newHTML;
}

function deleteItems(ind) {
    todoList.splice(ind, 1);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    displayItems();
}
