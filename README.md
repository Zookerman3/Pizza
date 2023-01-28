# Pizza Parlor Application

## This application takes a users input and displays what they ordered based on the size and topping they choose. It then will display the correct rpice for that pizza

## Set-up: Simply clone this github repo to your local machine and open index.html

## Technologies Used: HTML, CSS, Javascript

## Contributions by Stephen Zook


Copyright (c) 2023 Stephen Zook

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


# TDD Below:

Describe: addPizza()

Test: This function should return a pizza object with its size and one toppings as the objects properties
Code: const Pizza = new Pizza("small", "Sasusage")
Expected Result: Pizza {"small", "Sasusage"}

Test: This function should return the firstTopping as the name of the new object
Code: this.listOfPizzas[pizza.firstTopping] = pizza;
Expected Result: 1st pizza = "Sasusage";

Desribe: addPizzaToOrder()

Test: This function should display the options the user inputted and return the topping the user put on the pizza as well as the price
Code: pizzaList.addPizza(newPizza);
Expected Result: listOfPizzas:
pepperoni
Pizza {size: '8', firstTopping: 'pepperoni'}
sausage
Pizza {size: '12', firstTopping: 'sausage'}

Describe: displayOrder()

Test: This function should display each pizza the person orders
Code: displayPizzas(pizza)
Expected Result: "You ordered a 8 inch Pepperoni Pizza

Test: the function should take the size of the order and add +2 and $ to the order
Code:let totalPrice = 0 if(pizzaSize === "8"){totalPrice = 10.99}
Expected Result: totalPrice = 10.99