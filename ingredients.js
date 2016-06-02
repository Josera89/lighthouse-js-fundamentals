var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var repeat = 0;
var i = 0;
while (repeat < ingredients.length) {
	console.log(ingredients[i]);
	repeat++;
	i++;
}


for (var repeat = 0; repeat < ingredients.length; repeat++) {
	i = repeat;
	console.log(ingredients[i]);
	
}	


for (var repeat = ingredients.length; repeat >= 0; repeat--) {
	i = repeat;
	console.log(ingredients[i]);
}
