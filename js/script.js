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
	new Location("bLocation1", "City", "PLZ", "Address", "img/test_Karlsplatz.jpg", `Mar 12 2012 16:00`),
	new Location("fLocation2", "City", "PLZ", "Address", "img/test_Karlsplatz.jpg", `Mar 15 2012 10:00`),
	new Location("aLocation3", "City", "PLZ", "Address", "img/test_Karlsplatz.jpg", `Mar 03 2012 10:00`),
	new Location("zLocation4", "City", "PLZ", "Address", "img/test_Karlsplatz.jpg", `Mar 12 2012 10:00`),
	new Restaurant("rRestaurant1", "City", "PLZ", "Address", "img/test_rest_sixta.png", `May 21 2010 15:00`, "phoneNumber", "cusineType", "webPage"),
	new Restaurant("tRestaurant2", "City", "PLZ", "Address", "img/test_rest_sixta.png", `May 05 2010 15:00`, "phoneNumber", "cusineType", "webPage"),
	new Restaurant("dRestaurant3", "City", "PLZ", "Address", "img/test_rest_sixta.png", `May 30 2010 15:00`, "phoneNumber", "cusineType", "webPage"),
	new Restaurant("sRestaurant4", "City", "PLZ", "Address", "img/test_rest_sixta.png", `May 21 2010 10:00`, "phoneNumber", "cusineType", "webPage"),
	new Event("hEvent1", "City", "PLZ", "Address", "img/test_zoo.jpg", `Feb 05 2018 12:00`, "eventDate", "eventTime", "price"),
	new Event("iEvent2", "City", "PLZ", "Address", "img/test_zoo.jpg", `Jan 09 2018 12:00`, "eventDate", "eventTime", "price"),
	new Event("aEvent3", "City", "PLZ", "Address", "img/test_zoo.jpg", `Jun 12 2018 12:00`, "eventDate", "eventTime", "price"),
	new Event("aEvent3", "City", "PLZ", "Address", "img/test_zoo.jpg", `Jun 12 2018 12:00`, "eventDate", "eventTime", "price")
];

//==============================================================================
// function for rendering the objects from the array to display them in webpage - tested 16.08 / 10:00 working
//==============================================================================
function render(item) {
	if (item.phoneNumber == undefined && item.date == undefined) {
		$(".place").append(item.display());
	} else if (item.date == undefined) {
		$(".restaurant").append(item.display());
	} else {
		$(".event").append(item.display());
	}
}

//==============================================================================
// sorting functions (ascend, descend, a-z) and call for render function are in separate files
// otherwise they interfer with one another and/or need a separate trigger to separate the function scopes
//==============================================================================


//==============================================================================
// function on SEARCH button to focus(scroll to) particular section
//==============================================================================
$("#search-button").click(function(e){
	e.preventDefault();
	var focusTarget = $("#search-field").val()
	window.location.hash = `#${focusTarget}`;
})