const form = document.querySelector('#new-task-form');
const h1 = document.querySelector("h1");
const input = document.querySelector('#inputToDo');
const list = document.querySelector('#tasks');


form.addEventListener('submit', (e) =>{
    e.preventDefault();    
    const newTodo = input.value;

    if(input.value ===""){
        alert("You forgot your todo");
        
    }else{

    const newLi = document.createElement("div");
    newLi.classList.add('task');

    const newLiEl = document.createElement('div');
    newLiEl.classList.add('content');    
    newLi.append(newLiEl);
    list.appendChild(newLi);

    const newInputEl = document.createElement('input');
    newInputEl.classList.add("text");
    newInputEl.type = "text";
    newInputEl.value = newTodo;
    newInputEl.setAttribute("readonly", "readonly");
    newLiEl.appendChild(newInputEl);
    list.appendChild(newLi);

    const actions = document.createElement('div');
    actions.classList.add("actions");

    const buttonEdit = document.createElement("button");
    buttonEdit.classList.add("edit");
    buttonEdit.innerHTML = "Edit";

    const buttonDel = document.createElement("button");
    buttonDel.classList.add("delete")
    buttonDel.innerHTML = "Delete";
    
    actions.appendChild(buttonEdit);
    actions.appendChild(buttonDel);
    
    newLi.appendChild(actions);
    list.appendChild(newLi);
   
    buttonEdit.addEventListener("click", () =>{
        if(buttonEdit.innerText.toLowerCase() == "edit"){
        newInputEl.removeAttribute("readonly");
        newInputEl.focus();
        buttonEdit.innerText = "Save";
        }else{
            newInputEl.setAttribute("readonly", "readonly");
            buttonEdit.innerText = "Edit";
        }
    });
   
    input.value ="";
    h1.innerText= "What is your new ToDo";   

    buttonDel.addEventListener('click', () =>{
        newLi.remove();
        
    }) 
    }
   
})

input.addEventListener("input", function (e) {
    if (!this.value) {
        h1.innerText = "What is your new ToDo"
    } else {
        h1.innerText = `I'm gonna ${this.value}`;        
    }
})

