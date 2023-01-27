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

function handleFormSubmission(){
    const pizzaSize = document.getElementById("size").value;
}

window.addEventListener("load", function(event){
    event.preventDefault();
    document.querySelector("form#input-pizza").addEventListener("submit", handleFormSubmission)
})