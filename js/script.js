//Objects
function PizzaList(){
    this.listOfPizzas = {};
}

PizzaList.prototype.addPizza = function(pizza){
    this.listOfPizzas[pizza.firstTopping] = pizza;
}

function Pizza(size, firstTopping){
    this.size = size
    this.firstTopping = firstTopping;
}




//UI Logic

let pizzaList = new PizzaList()

function handleFormSubmission(event){
    event.preventDefault();
    const pizzaSize = document.getElementById("size").value;
    const firstPizzaTopping = document.getElementById("first-topping").value;
    let newPizza = new Pizza(pizzaSize, firstPizzaTopping)
    pizzaList.addPizza(newPizza);
    console.log(pizzaList);
}

window.addEventListener("load", function(event){
    event.preventDefault();
    document.querySelector("form#input-pizza").addEventListener("submit", handleFormSubmission)
})