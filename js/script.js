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

//===================================================================
// constructor for basic class Location + 1 instance testing created
//===================================================================
// class Location {
// 	constructor(name, city, zipCode, address, image, timestamp) {
// 		  this.name = name;
// 		  this.city = city;
// 		  this.zipCode = zipCode;
// 		  this.address = address;    
// 		  this.teaserImage = image;
// 		  this.timestamp = timestamp
// 	}
// 	showAddress() {
// 		return `${this.address}, ${this.zipCode} ${this.city}`;
// 	}
// 	display() {
// 		return `<div class="col-12 col-md-6 col-lg-3 p-2">
// 			<div class="col-border">
// 				<img class="img-fluid img-thumbnail col-border-thumbnail" src="${this.teaserImage}">
// 				<h4 class="">${this.name}</h4>
// 				<p class="">Created: ${this.timestamp}</p>
// 				<div class="text-container">
// 					<p class="">${this.showAddress()}</p>
// 				</div>
// 			</div>	
// 		</div>`
// 	}
// }

// var place1 = new Location("Karlskirche", "Vienna", "1010", "Karlsplatz 1", "img/test_Karlsplatz.jpg");
// $("#place").prepend(place1.display());
// console.log(place1.name);
// console.log(place1.showAddress());
// console.log(place1.teaserImage);

//====================================================
// class Restaurant  + 1 instance created for testing
//====================================================
// class Restaurant extends Location {
// 	constructor(name, city, zipCode, address, image, timestamp, phone, cusine, webPage) {
// 		  super(name, city, zipCode, address, image, timestamp);
// 		  this.phoneNumber = phone;
// 		  this.cusineType = cusine;
// 		  this.webPage = webPage;
// 	}
// 	showAddress() {
// 		return `${super.showAddress()}`;
// 	}
// 	display() {
// 		return `
// <div class="col-12 col-md-6 col-lg-3 p-2">
// 	<div class="col-border">
// 		<img class="img-fluid img-thumbnail col-border-thumbnail" src="${this.teaserImage}">
// 		<h4 class="">${this.name}</h4>
// 		<p class="">Created: ${this.timestamp}</p>
// 		<div class="text-container">
// 			<p class="">${this.showAddress()}</p>
// 			<p class="">${this.phoneNumber}</p>
// 			<p class="">${this.cusineType}</p>
// 			<p class="">${this.webPage}</p>
// 		</div>
// 	</div>
// </div>`
// 	}
// }

// var rest1 = new Restaurant("Lemontree", "Bagdad", "1150", "Kurbatra 3", "img/test_rest_sixta.png", "phoneNumber", "cusineType", "webPage")
// $("#rest").prepend(rest1.display());
// console.log(rest1.display());
// console.log(rest1.name);
// console.log(rest1.showAddress());
// console.log(rest1.teaserImage);
// console.log(rest1.phoneNumber, rest1.cusineType, rest1.webPage);

//===============================================
// class EVENT  + 1 instance created for testing
//===============================================
// class Event extends Location {
// 	constructor(name, city, zipCode, address, image, timestamp, date, time, ticketPrice) {
// 		  super(name, city, zipCode, address, image, timestamp);
// 		  this.date = date;
// 		  this.time = time;
// 		  this.ticketPrice = ticketPrice;
// 	}
// 	showAddress() {
// 		return `${super.showAddress()}`;
// 	}
// 	display() {
// 		return `<div class="col-12 col-md-6 col-lg-3 p-2">
// 			<div class="col-border">
// 				<img class="img-fluid img-thumbnail col-border-thumbnail" src="${this.teaserImage}">
// 				<h4 class="">${this.name}</h4>
// 				<p class="">Created: ${this.timestamp}</p>
// 				<div class="text-container">
// 					<p class="">${this.showAddress()}</p>
// 					<p class="">${this.date}</p>
// 					<p class="">${this.time}</p>
// 					<p class="">${this.ticketPrice}</p>
// 				</div>
// 			</div>
// 		</div>`
// 	}
// }


// var event1 = new Event("BonJovi", "Ernst Happel Stadion", "1020", "Stadionplatz 1", "img/test_zoo.jpg", "17.07.2019", "19:00", "80 EUR")
// $("#event").prepend(event1.display());
// console.log(event1.name);
// console.log(event1.showAddress());
// console.log(event1.teaserImage);
// console.log(event1.date, event1.time, event1.ticketPrice);


//============================================================
// array of object, created using the above clss constructors
//============================================================
var renderList = [
	new Location("Karlskirche", "Vienna", "1010", "Karlsplatz 1", "img/test_Karlsplatz.jpg", `Mar 12 2012 10:00`),
	new Restaurant("Lemontree", "Bagdad", "1150", "Kurbatra 3", "img/test_rest_sixta.png", `May 21 2010 15:00`, "phoneNumber", "cusineType", "webPage"),
	new Event("BonJovi", "Ernst Happel Stadion", "1020", "Stadionplatz 1", "img/test_zoo.jpg", `Jan 21 2019 12:00`, "17.07.2019", "19:00", "80 EUR")];
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

