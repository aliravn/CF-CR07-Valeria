

// object LOcation created and dislayed
class Location {
    constructor(name, city, zipCode, address, image) {
          this.name = name;
          this.city = city;
          this.zipCode = zipCode;
          this.address = address;    
          this.teaserImage = image;
    }
    showAddress() {
        return `${this.address}, ${this.zipCode} ${this.city}`;
    }
    display() {
    	return `
    	<img class="mr-3 col-3" src="${this.teaserImage}">
    	<div class="media-body col-9">
    		<p class="m-0">${this.name}</p>
    		${this.showAddress()}
    	</div>`
    }
}

var place1 = new Location("Karlskirche", "Vienna", "1010", "Karlsplatz 1", "img/test_Karlsplatz.jpg");
// $("#place").prepend(place1.display());

console.log(place1.name);
console.log(place1.showAddress());
console.log(place1.teaserImage);

// object Restaurant
class Restaurant extends Location {
    constructor(name, city, zipCode, address, image, phone, cusine, webPage) {
          super(name, city, zipCode, address, image);
          this.phoneNumber = phone;
          this.cusineType = cusine;
          this.webPage = webPage;
    }
    showAddress() {
        return `${super.showAddress()}`;
    }
    display() {
    	return `
    	<img class="mr-3 col-3" src="${this.teaserImage}">
    	<div class="media-body col-9">
    		<p class="m-0">${this.name}</p>
    		<p class="m-0">${this.showAddress()}</p>
    		<p class="m-0">${this.phoneNumber}</p>
    		<p class="m-0">${this.cusineType}</p>
    		<p class="m-0">${this.webPage}</p>   		
    	</div>`
    }
}

var rest1 = new Restaurant("Lemontree", "Bagdad", "1150", "Kurbatra 3", "img/test_rest_sixta.png", "phoneNumber", "cusineType", "webPage")
// $("#rest").prepend(rest1.display());

console.log(rest1.name);
console.log(rest1.showAddress());
console.log(rest1.teaserImage);
console.log(rest1.phoneNumber, rest1.cusineType, rest1.webPage);



// object Event
class Event extends Location {
    constructor(name, city, zipCode, address, image, date, time, ticketPrice) {
          super(name, city, zipCode, address, image);
          this.date = date;
          this.time = time;
          this.ticketPrice = ticketPrice;
    }
    showAddress() {
        return `${super.showAddress()}`;
    }
    display() {
    	return `
    	<img class="mr-3 col-3" src="${this.teaserImage}">
    	<div class="media-body col-9">
    		<p class="m-0">${this.name}</p>
    		<p class="m-0">${this.showAddress()}</p>
    		<p class="m-0">${this.date}</p>
    		<p class="m-0">${this.time}</p>
    		<p class="m-0">${this.ticketPrice}</p>  		
    	</div>`
    }
}

var event1 = new Event("BonJovi", "Ernst Happel Stadion", "1020", "Stadionplatz 1", "img/test_zoo.jpg", "17.07.2019", "19:00", "80 EUR")
// $("#event").prepend(event1.display());

console.log(event1.name);
console.log(event1.showAddress());
console.log(event1.teaserImage);
console.log(event1.date, event1.time, event1.ticketPrice);



var renderList = [
	new Location("Karlskirche", "Vienna", "1010", "Karlsplatz 1", "img/test_Karlsplatz.jpg"),
	new Location("Stephansdom", "Vienna", "1010", "Karlsplatz 1", "img/test_Karlsplatz.jpg"),
	new Restaurant("Lemontree", "Bagdad", "1150", "Kurbatra 3", "img/test_rest_sixta.png", "phoneNumber", "cusineType", "webPage"),
	new Restaurant("Tremble", "Bagdad", "1150", "Kurbatra 3", "img/test_rest_sixta.png", "phoneNumber", "cusineType", "webPage"),
	new Event("BonJovi", "Ernst Happel Stadion", "1020", "Stadionplatz 1", "img/test_zoo.jpg", "17.07.2019", "19:00", "80 EUR"),
	new Event("Rammstein", "Ernst Happel Stadion", "1020", "Stadionplatz 1", "img/test_zoo.jpg", "17.07.2019", "19:00", "80 EUR")
];

console.log(renderList);

renderList.forEach(function(item) {
	$("#event").prepend(item.display());
});
