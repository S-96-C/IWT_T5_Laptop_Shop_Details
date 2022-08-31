function loadDetails(btn)
{
	if(btn == "btn1")
	{
		document.getElementById("img1").src="images/DELL.jpg";
		document.getElementById("para1").innerHTML="new Dell laptop";
	}
	else if(btn == "btn2")
	{
		document.getElementById("img1").src="images/Asus.jpg";
		document.getElementById("para1").innerHTML="new Asus laptop";
	}
	else
	{
		alert("Invalid .....");
	}
	
}

//
function priceList()
{
	var prices = ["Dell = 80000/=", "Asus = 50000/=", "HP = 85000/=", "Mac = 150000/="];
	var list = "List of Laptops using a loop <br>"
	
	for(var x in prices)
	{
		//y = y + z -> y += z
		list += prices[x] + "<br>";
	}
	document.getElementById("img1").src="images/avg.PNG";
	document.getElementById("para1").innerHTML=list;
}

function priceHigher()
{
	var price = [];
	price["Dell"] = 80000;
	price["Asus"] = 50000;
	price["HP"] = 85000;
	price["Mac"] = 150000;
	
	
	var highPriceList = "list of high price laptops<br><br>";
	
	for(var y in price)
	{
		if(price[y] > 80000)
		{
			highPriceList += y + " = " +price[y] + "<br>";
		}
	}
	document.getElementById("img1").src="images/lap1.jpg";
	document.getElementById("para1").innerHTML=highPriceList;
}