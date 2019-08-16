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


//============================================================
// array of object, created using the above clss constructors
//============================================================
var renderList = [
	new Location("Location1", "Vienna", "1010", "Karlsplatz 1", "img/test_Karlsplatz.jpg", `Mar 12 2012 10:00`),
	new Location("Location2", "Vienna", "1010", "Karlsplatz 1", "img/test_Karlsplatz.jpg", `Mar 12 2012 10:00`),
	new Location("Location3", "Vienna", "1010", "Karlsplatz 1", "img/test_Karlsplatz.jpg", `Mar 12 2012 10:00`),
	new Location("Location4", "Vienna", "1010", "Karlsplatz 1", "img/test_Karlsplatz.jpg", `Mar 12 2012 10:00`),
	new Restaurant("Restaurant1", "Bagdad", "1150", "Kurbatra 3", "img/test_rest_sixta.png", `May 21 2010 15:00`, "phoneNumber", "cusineType", "webPage"),
	new Restaurant("Restaurant2", "Bagdad", "1150", "Kurbatra 3", "img/test_rest_sixta.png", `May 21 2010 15:00`, "phoneNumber", "cusineType", "webPage"),
	new Restaurant("Restaurant3", "Bagdad", "1150", "Kurbatra 3", "img/test_rest_sixta.png", `May 21 2010 15:00`, "phoneNumber", "cusineType", "webPage"),
	new Restaurant("Restaurant4", "Bagdad", "1150", "Kurbatra 3", "img/test_rest_sixta.png", `May 21 2010 15:00`, "phoneNumber", "cusineType", "webPage"),
	new Event("Event1", "Ernst Happel Stadion", "1020", "Stadionplatz 1", "img/test_zoo.jpg", `Jan 21 2019 12:00`, "17.07.2019", "19:00", "80 EUR"),
	new Event("Event2", "Ernst Happel Stadion", "1020", "Stadionplatz 1", "img/test_zoo.jpg", `Jan 21 2019 12:00`, "17.07.2019", "19:00", "80 EUR"),
	new Event("Event3", "Ernst Happel Stadion", "1020", "Stadionplatz 1", "img/test_zoo.jpg", `Jan 21 2019 12:00`, "17.07.2019", "19:00", "80 EUR"),
	new Event("Event4", "Ernst Happel Stadion", "1020", "Stadionplatz 1", "img/test_zoo.jpg", `Jan 21 2019 12:00`, "17.07.2019", "19:00", "80 EUR")
];
// console.log(renderList);

//==============================================================================
// function for rendering the objects from the array to display them in webpage
//==============================================================================
renderList.forEach(function(item) {
	$("#event").append(item.display());
});

//========================
// sorting functions
//========================
// var cloneList = renderList.slice(0); // clone original arry before it is sorted
// console.log(cloneList);

// renderList.sort(function(a,b) { //descending order
//   return new Date(b.timestamp) - new Date(a.timestamp);
// });

// console.log(renderList);
// renderList.forEach(function(item) {
// 	$("#event").append(item.display());
// });






// console.log(renderList);
// var cloneListDescending = renderList.slice(0);
// console.log(cloneListDescending);

// renderList.sort(function(a,b) { //descending order
//   return new Date(a.timestamp) - new Date(b.timestamp);
// });
// console.log(renderList);

