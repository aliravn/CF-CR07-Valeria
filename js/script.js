//===================================================================
// function to create random date for each object
//===================================================================
// var start = new Date(2015, 0, 1); // year, month (as index), date
// var end = new Date(); // current date
// function randomDate(start, end) {
//   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
//   console.log(randomDate);
//   return `${randomDate.getDate()}.${randomDate.getMonth()+1}.${randomDate.getFullYear()} ${randomDate.getHours()}:${randomDate.getMinutes()}`;
// }
// console.log(randomDate(start, end));


//===========================================================================
// array of object, created using the class constructors in separate files
//===========================================================================
var renderList = [
	new Location("Location1", "City", "PLZ", "Address", "img/test_Karlsplatz.jpg", `Mar 12 2012 10:00`),
	new Location("Location2", "City", "PLZ", "Address", "img/test_Karlsplatz.jpg", `Mar 12 2012 10:00`),
	new Location("Location3", "City", "PLZ", "Address", "img/test_Karlsplatz.jpg", `Mar 12 2012 10:00`),
	new Location("Location4", "City", "PLZ", "Address", "img/test_Karlsplatz.jpg", `Mar 12 2012 10:00`),
	new Restaurant("Restaurant1", "City", "PLZ", "Address", "img/test_rest_sixta.png", `May 21 2010 15:00`, "phoneNumber", "cusineType", "webPage"),
	new Restaurant("Restaurant2", "City", "PLZ", "Address", "img/test_rest_sixta.png", `May 21 2010 15:00`, "phoneNumber", "cusineType", "webPage"),
	new Restaurant("Restaurant3", "City", "PLZ", "Address", "img/test_rest_sixta.png", `May 21 2010 15:00`, "phoneNumber", "cusineType", "webPage"),
	new Restaurant("Restaurant4", "City", "PLZ", "Address", "img/test_rest_sixta.png", `May 21 2010 15:00`, "phoneNumber", "cusineType", "webPage"),
	new Event("Event1", "City", "PLZ", "Address", "img/test_zoo.jpg", `Jan 21 2019 12:00`, "eventDate", "eventTime", "price"),
	new Event("Event2", "City", "PLZ", "Address", "img/test_zoo.jpg", `Jan 21 2019 12:00`, "eventDate", "eventTime", "price"),
	new Event("Event3", "City", "PLZ", "Address", "img/test_zoo.jpg", `Jan 21 2019 12:00`, "eventDate", "eventTime", "price"),
	new Event("Event4", "City", "PLZ", "Address", "img/test_zoo.jpg", `Jan 21 2019 12:00`, "eventDate", "eventTime", "price")
];
// console.log(renderList);

//==============================================================================
// function for rendering the objects from the array to display them in webpage - tested 16.08 / 10:00 working
//==============================================================================
renderList.forEach(render);

function render(item) {
	if (item.phoneNumber == undefined && item.date == undefined) {
		$("#place").append(item.display());
	} else if (item.date == undefined) {
		$("#restaurant").append(item.display());
	} else {
		$("#event").append(item.display());
	}
}
//========================
// sorting functions
//========================
// var renderListAscend = renderList.slice(0); // clone original array before it is sorted
// var renderListDescend = renderList.slice(0);
// console.log(renderList);
// console.log(renderListAscend);
// console.log(renderListDescend);

// renderListDescend.sort(function(a,b) { //descending order
// 	return new Date(b.timestamp) - new Date(a.timestamp);
// });

// renderListDescend.forEach(function(item) { // rendering objects in new order
// // 	$("#event").append(item.display());
// // });






// console.log(renderList);
// var cloneListDescending = renderList.slice(0);
// console.log(cloneListDescending);

// renderList.sort(function(a,b) { //descending order
//   return new Date(a.timestamp) - new Date(b.timestamp);
// });
// console.log(renderList);

