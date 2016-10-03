var data = [

	{
		"name": "Gods of Egypt",
		"date": "sep. 2014",
		"price": 15,
		"sold": false,
		"ticketleft": 3
		
	},

	{
		"name": "Crank: High Voltag",
		"date": "sep. 2015",
		"price": 10,	
		"sold": false,
		"ticketleft": 3

	},

	{
		"name": "The Grey",
		"date": "sep. 2016",
		"price": 16,
		"sold": false,
		"ticketleft": 3

	}
];

function buyTicket(i) {
	// console.log(i);
	
	// if (data[i].ticketleft > 1) {
	// 	data[i].ticketleft --;
	// 	loadData(data);

	// } 

	// else{

	// data[i].sold = true;
	// data[i].ticketleft --;
	// loadData(data);

	// } 

	data[i].ticketleft --;

	if (data[i].ticketleft ===0) {
		data[i].sold = true;
	}
	loadData(data);
}

function loadData (d) {

	$(".table-data").remove();

	for (var i = 0; i < d.length; i++) {

	if (d[i].price >= 10) {

		if (d[i].sold) {
	var button = "<button disabled>Sold Out</button>";
	} else {
	var button = "<button onClick='buyTicket(" + i + ")'>Purchase</button>";
	}	

	var tableRow = "<tr class='table-data'>" + 
					"<td>" + d[i].name + "</td>" + 
					"<td>" + d[i].date + "</td>" +
					"<td>" + d[i].price + "</td>" +
					"<td>" + button + "</td>"+
					"<td>" + d[i].ticketleft + "</td>"
			   "</tr>";

$('table tbody').append(tableRow);

    }

  }
}

loadData(data);





