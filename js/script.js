//Objects
function PizzaList(){
    this.listOfPizzas = {};
}

function Pizza(size, firstTopping){
    this.size = size;
    this.firstTopping = firstTopping;
}

PizzaList.prototype.addPizza = function(pizza){
    this.listOfPizzas[pizza.firstTopping + " " + pizza.size + " inch pizza"] = pizza;
}

Pizza.prototype.calculatePizzaCost = function(pizzaSize){
    let totalPrice = 0;
    if(pizzaSize === "8"){
        totalPrice = 10.99;
    } else if(pizzaSize === "12"){
        totalPrice = 14.99;
    } else if(pizzaSize === "16"){
        totalPrice = 18.99;
    }
    return totalPrice;
}


//UI Logic

function displayOrder(topping, totalPrice){
    let p = document.createElement("p");
    const orderDiv = document.querySelector("#order");
    orderDiv.after(p);
    p.innerText = "You Ordered: " + topping + " Pizza for $" + totalPrice;
    
}



function handleFormSubmission(event, pizzaList){
    event.preventDefault();
    let pizzaList = new PizzaList()
    const pizzaSize = document.getElementById("size").value;
    const firstPizzaTopping = document.getElementById("first-topping").value;
    let newPizza = new Pizza(pizzaSize, firstPizzaTopping);
    const totalPrice = newPizza.calculatePizzaCost(pizzaSize);
    console.log(totalPrice);
    pizzaList.addPizza(newPizza);
    console.log(pizzaList);
    displayOrder(firstPizzaTopping, totalPrice);
}

window.addEventListener("load", function(event){
    event.preventDefault();
    let pizzaList = new PizzaList()
    document.querySelector("form#input-pizza").addEventListener("submit", handleFormSubmission);
})