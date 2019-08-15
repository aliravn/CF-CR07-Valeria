//===============================================
// class EVENT  + 1 instance created for testing
//===============================================
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
				<img class="img-fluid img-thumbnail col-border-thumbnail" src="${this.teaserImage}">
				<h4 class="">${this.name}</h4>
				<p class="">Created: ${this.timestamp}</p>
				<div class="text-container">
					<p class="">${this.showAddress()}</p>
					<p class="">${this.date}</p>
					<p class="">${this.time}</p>
					<p class="">${this.ticketPrice}</p>
				</div>
			</div>
		</div>`
	}
}


// var event1 = new Event("BonJovi", "Ernst Happel Stadion", "1020", "Stadionplatz 1", "img/test_zoo.jpg", "17.07.2019", "19:00", "80 EUR")
// $("#event").prepend(event1.display());
// console.log(event1.name);
// console.log(event1.showAddress());
// console.log(event1.teaserImage);
// console.log(event1.date, event1.time, event1.ticketPrice);