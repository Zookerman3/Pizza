//Objects
function PizzaList(){
    this.listOfPizzas = {};
}

PizzaList.prototype.addPizza = function(pizza){
    this.listOfPizzas[pizza.firstTopping + " " + pizza.size + " inch pizza"] = pizza;
}

function Pizza(size, firstTopping, price){
    this.size = size
    this.firstTopping = firstTopping;
    this.price = price
}

function displayOrder(size, topping, price){
    let p = document.createElement("p")
    const orderDiv = document.querySelector("#order")
    orderDiv.after(p)
    p.innerText = topping + price
}


//UI Logic

let pizzaList = new PizzaList()

function handleFormSubmission(event){
    event.preventDefault();
    let pizzaPrice = 0
    const pizzaSize = document.getElementById("size").value;
    const firstPizzaTopping = document.getElementById("first-topping").value;
    let newPizza = new Pizza(pizzaSize, firstPizzaTopping, pizzaPrice)
    pizzaList.addPizza(newPizza);
    console.log(pizzaList);
    displayOrder(pizzaSize, firstPizzaTopping, pizzaPrice);
}

window.addEventListener("load", function(event){
    event.preventDefault();
    document.querySelector("form#input-pizza").addEventListener("submit", handleFormSubmission)
})