//=======================================================================================================
// array to contain all created objects, that will be rendered with loop
//=======================================================================================================

var renderList = [];

//=======================================================================================================
// constructor for basic class LOCATION
//=======================================================================================================
class Location {
	constructor(name, city, zipCode, address, image, timestamp) {
		  this.name = name;
		  this.city = city;
		  this.zipCode = zipCode;
		  this.address = address;    
		  this.teaserImage = image;
		  this.timestamp = timestamp
		  renderList.push(this);
	}

	showAddress() {
		return `${this.address}, ${this.zipCode} ${this.city}`;
	}
	display() {
		return `<div class="col-12 col-md-6 col-lg-3 p-2">
			<div class="col-border">
				<img class="img-fluid img-thumbnail d-none d-md-block" src="${this.teaserImage}">
				<h4 class="">${this.name}</h4>
				<p class="">Created: ${this.timestamp}</p>
				<div class="text-container d-none d-md-block">
					<p class="">${this.showAddress()}</p>
				</div>
			</div>	
		</div>`
	}
}

//=======================================================================================================
// constructor for class Restaurant 
//=======================================================================================================
class Restaurant extends Location {
	constructor(name, city, zipCode, address, image, timestamp, phone, cusine, webPage) {
		  super(name, city, zipCode, address, image, timestamp);
		  this.phoneNumber = phone;
		  this.cusineType = cusine;
		  this.webPage = webPage;
	}
	showAddress() {
		return `${super.showAddress()}`;
	}
	display() {
		return `
<div class="col-12 col-md-6 col-lg-3 p-2">
	<div class="col-border">
		<img class="img-fluid img-thumbnail d-none d-md-block" src="${this.teaserImage}">
		<h4 class="">${this.name}</h4>
		<p class="">Created: ${this.timestamp}</p>
		<div class="text-container d-none d-md-block">
			<p class="">${this.showAddress()}</p>
			<p class="">${this.phoneNumber}</p>
			<p class="">${this.cusineType}</p>
			<p class="">${this.webPage}</p>
		</div>
	</div>
</div>`
	}
}

//=======================================================================================================
// constructor for class EVENT 
//=======================================================================================================
class Event extends Location {
	constructor(name, city, zipCode, address, image, timestamp, date, time, ticketPrice) {
		  super(name, city, zipCode, address, image, timestamp);
		  this.date = date;
		  this.time = time;
		  this.ticketPrice = ticketPrice;
	}
	showAddress() {
		return `${super.showAddress()}`;
	}
	display() {
		return `<div class="col-12 col-md-6 col-lg-3 p-2">
			<div class="col-border">
				<img class="img-fluid img-thumbnail d-none d-md-block" src="${this.teaserImage}">
				<h4 class="">${this.name}</h4>
				<p class="">Created: ${this.timestamp}</p>
				<div class="text-container d-none d-md-block">
					<p class="">${this.showAddress()}</p>
					<p class="">${this.date}</p>
					<p class="">${this.time}</p>
					<p class="">${this.ticketPrice}</p>
				</div>
			</div>
		</div>`
	}
}

//=======================================================================================================
// array of object, created using the class constructors in separate files
//=======================================================================================================
renderList = [
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

console.log(renderList);
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