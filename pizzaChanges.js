
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt


function getReceipt() {
	
	var text1 = "<h3>You Ordered:<br></h3>";
	var text2 = "<h3>Subtotal:<br></h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large Pizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	text2 =(text2 + sizeTotal)+"<br>";
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("size text2: "+text2);
	console.log("subtotal: $"+runningTotal+".00");
	// All three of these variables will be passed on to each function
	getCrust(runningTotal,text1,text2); 
	 
	
};

	//This function calculates the crust total

function getCrust(runningTotal,text1,text2) {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for (var c = 0; c < crustArray.length; c++) {
		if (crustArray[c].checked) {
			var selectedCrust = crustArray[c].value;
			text1 = text1+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
	} else {
		crustTotal = 0;
	}
	
	
	runningTotal = (runningTotal + crustTotal);
	text2 = (text2 + crustTotal)+"<br>";
	console.log(selectedCrust+" = $"+crustTotal+".00");
	console.log("crust text1: "+text1);
	console.log("crust text2: "+text2);
	console.log("subtotal: $"+runningTotal+".00");
	getSauce(runningTotal,text1,text2);
};

	//This function records the type of sauce on the pizza
	
function getSauce(runningTotal,text1,text2) {
	var sauceTotal = 0;
	var sauceArray = document.getElementsByClassName("sauce");
	for (var s = 0; s < sauceArray.length; s++) {
		if (sauceArray[s].checked) {
			var selectedSauce = sauceArray[s].value;
			text1 = text1+selectedSauce+"<br>";
		}
	}
	
	
	runningTotal = (runningTotal + sauceTotal);
	text2 = (text2 + sauceTotal)+"<br>";
	console.log(selectedSauce+" = $"+sauceTotal+".00");
	console.log("sauce text1: "+text1);
	console.log("sauce text2: "+text2);
	console.log("subtotal: $"+runningTotal+".00");
	getCheese(runningTotal,text1,text2);
};
	
	//This function calculates an additional cheese charge if necessary

	
function getCheese(runningTotal,text1,text2) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var h = 0; h < cheeseArray.length; h++) {
		if (cheeseArray[h].checked) {
			var selectedCheese = cheeseArray[h].value;
			text1 = text1+selectedCheese+"<br>";
		}
	}
	if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	} else {
		cheeseTotal = 0;
	}
	
	
	runningTotal = (runningTotal + cheeseTotal);
	text2 = (text2 + cheeseTotal)+"<br>";
	console.log(selectedCheese+" = $"+cheeseTotal+".00");
	console.log("cheese text1: "+text1);
	console.log("cheese text2: "+text2);
	console.log("subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1,text2);
};
	
	
	//This function is calculating the meat selection

function getMeat(runningTotal,text1,text2) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatSubtotal = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			meatSubtotal.push(meatArray[j].length);
			console.log("selected meat item: ("+meatArray[j].value+")");
			console.log("selected meat price: ("+meatArray[j].length+")");
			text1 = text1+meatArray[j].value+"<br>";
			
			if (meatSubtotal.length <=1) {
				text2 = text2+0+"<br>";
			} else {
				text2 = text2+1+"<br>";
			}
		}
	}
		//This statement sets a value for confirmOrder and subTotal if no boxes are checked
		if (selectedMeat.length === 0) {
		text1 = text1+"No Meats"+"<br>";
		text2 = text2+0+"<br>";
		}		
	
	
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	
	
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("meat text2: "+text2);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	getVeggies(runningTotal, text1,text2);
};		
	
	//This function is calculating the vegetable selection

function getVeggies(runningTotal,text1,text2) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieSubtotal = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for (var v = 0; v < veggieArray.length; v++) {
		if (veggieArray[v].checked) {
			selectedVeggie.push(veggieArray[v].value);
			veggieSubtotal.push(veggieArray[v].length);
			console.log("selected veggie item: ("+veggieArray[v].value+")");
			console.log("selected veggie price: ("+veggieArray[v].length+")");
			text1 = text1+veggieArray[v].value+"<br>";
		
			if (veggieSubtotal.length <=1) {
				text2 = text2+0+"<br>";
			} else {
				text2 = text2+1+"<br>";
			}
		}
	}

	//This statement sets a value for confirmOrder and subTotal if no boxes are checked
		if (selectedVeggie.length === 0) {
			text1 = text1+"No Vegetables"+"<br>";
			text2 = text2+0+"<br>";
		}			
	
		
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
		
	} else {
		veggieTotal = 0;
	}
	
	
	runningTotal = (runningTotal + veggieTotal);
	console.log("total selected veggie items: "+veggieCount);
	console.log(veggieCount+" veggie - 1 free veggie = "+"$"+veggieTotal+".00");
	console.log("veggie text1: "+text1);
	console.log("veggie text2: "+text2);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("confirmOrder").innerHTML = text1;
	document.getElementById("subTotal").innerHTML = text2;
	document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};			

