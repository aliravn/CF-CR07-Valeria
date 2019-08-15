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
    	<img class="mr-3 w-25" src="${this.teaserImage}">
    	<div class="media-body">
    		<p class="m-0">${this.name}</p>
    		${this.showAddress()}
    	</div>`
    }
}

var place1 = new Location("Karlskirche", "Vienna", "1010", "Karlsplatz 1", "img/test_Karlsplatz.jpg")
$("#place").prepend(place1.display());

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
    	<img class="mr-3 w-25" src="${this.teaserImage}">
    	<div class="media-body">
    		<p class="m-0">${this.name}</p>
    		<p class="m-0">${this.showAddress()}</p>
    		<p class="m-0">${this.phoneNumber}</p>
    		<p class="m-0">${this.cusineType}</p>
    		<p class="m-0">${this.webPage}</p>
    		
    	</div>`
    }
}

var rest1 = new Restaurant("Lemontree", "Bagdad", "1150", "Kurbatra 3", "img/test_rest_sixta.png", "phoneNumber", "cusineType", "webPage")
$("#rest").prepend(rest1.display());

console.log(rest1.name);
console.log(rest1.showAddress());
console.log(rest1.teaserImage);
console.log(rest1.phoneNumber);