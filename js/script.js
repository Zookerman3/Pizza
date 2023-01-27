//Objects
function PizzaList(){
    this.listOfPizzas = {};
}

function Pizza(size, firstTopping){
    this.size = size
    this.firstTopping = firstTopping;
}

PizzaList.prototype.addPizza = function(pizza){
    this.listOfPizzas[pizza.firstTopping + " " + pizza.size + " inch pizza"] = pizza;
}

Pizza.prototype.calculatePizzaCost = function(size){
    let totalPrice = 0

    if(size === 8){
        totalPrice = 10.99
    } else if(size === 12){
        totalPrice = 14.99
    } else if(size === 16){
        totalPrice = 18.99
    }
    return totalPrice
}


//UI Logic

function displayOrder(){
    let p = document.createElement("p")
    const orderDiv = document.querySelector("#order")
    orderDiv.after(p)
    

}

let pizzaList = new PizzaList()

function handleFormSubmission(event){
    event.preventDefault();
    let pizzaPrice = 0
    const pizzaSize = document.getElementById("size").value;
    const firstPizzaTopping = document.getElementById("first-topping").value;
    let newPizza = new Pizza(pizzaSize, firstPizzaTopping)
    const totalPrice = newPizza.calculatePizzaCost(size)
    pizzaList.addPizza(newPizza);
    console.log(pizzaList);
    displayOrder(firstPizzaTopping, totalPrice);
}

window.addEventListener("load", function(event){
    event.preventDefault();
    document.querySelector("form#input-pizza").addEventListener("submit", handleFormSubmission)
})