const form = document.querySelector('form');
const h1 = document.querySelector("h1");
const input = document.querySelector('#inputToDo');
const list = document.querySelector('#newTodo');


form.addEventListener('submit', (e) =>{
    e.preventDefault();    
    const newTodo = input.value;

    if(input.value ===""){
        alert("You forgot your todo");
        
    }else{

    const newLi = document.createElement("LI");
   
    let newBtn = document.createElement("Button");
    
    newBtn.innerText= "Remove";
    newLi.innerText=newTodo;
    list.append(newLi);
    list.append(newBtn);
    input.value ="";
    h1.innerText= "What is your new ToDo";   

    newBtn.addEventListener('click', () =>{
        newLi.remove();
        newBtn.remove();
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

