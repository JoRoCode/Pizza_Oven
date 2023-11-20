var deep_meat = pizzaOven("deep dish", "traditional",["mozzarella"], ["pepperoni", "sausage"]);
var greek = pizzaOven("hand tossed", "marinara", ["mozzarella", "fetta"], ["mushrooms", "olives", "onions"]);
var italian_special = pizzaOven("garlic", "alfredo", ["mozzarella", "provolone"], ["pepperoni", "olives"]);
var spicy_hawiian = pizzaOven("thin", "traditional", ["mozzarella"], ["pineapple", "jalepenino"]);

function pizzaOven(crust, sauce, cheese, toppings) {
var pizza = {};
pizza.crust = crust;
pizza.sauce = sauce;
pizza.cheese = cheese;
pizza.toppings = toppings;
return pizza;
}

console.log(deep_meat)

function randompizza(crust,sauce,cheese,toppings,toppings2) {
    var crust = ["deep dish", "hand tossed", "garlic", "thin", "NY Style", "Chicago Style"],
    randomCrust = crust[Math.floor(Math.random() * crust.length)];
    var sauce = ["Traditional", "Marinara", "Creamy Alfredo", "Olive Oil", "No Sauce"],
    randomSauce = sauce[Math.floor(Math.random() * sauce.length)];
    var cheese = ["Mozzarella", "Feta", "Ricotta", "provolone", "Parmesan-Romano", "Goat Cheese"],
    randomCheese = cheese[Math.floor(Math.random() * cheese.length)];
    var toppings = ["Pepperoni", "Sausage", "Ham", "Bacon", "Lizard", "Mushrooms", "Olives", "Onions", "Pineapple", "Jalepenio", "Garlic", "Tomatoes", "Green Peppers", "Artichoke"],
    randomToppings = toppings[Math.floor(Math.random() * toppings.length)];
    var toppings2 = ["Pepperoni", "Sausage", "Ham", "Bacon", "Lizard", "Mushrooms", "Olives", "Onions", "Pineapple", "Jalepenio", "Garlic", "Tomatoes", "Green Peppers", "Artichoke"],
    randomToppings2 = toppings2[Math.floor(Math.random() * toppings2.length)];
    var randomPizza = [randomCrust, randomSauce, randomCheese, randomToppings, randomToppings2];
    return (randomPizza);
}


console.log(randompizza());
