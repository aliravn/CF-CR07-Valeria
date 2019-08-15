//===================================================================
// constructor for basic class Location + 1 instance testing created
//===================================================================
class Location {
	constructor(name, city, zipCode, address, image, timestamp) {
		  this.name = name;
		  this.city = city;
		  this.zipCode = zipCode;
		  this.address = address;    
		  this.teaserImage = image;
		  this.timestamp = timestamp
	}
	showAddress() {
		return `${this.address}, ${this.zipCode} ${this.city}`;
	}
	display() {
		return `<div class="col-12 col-md-6 col-lg-3 p-2">
			<div class="col-border">
				<img class="img-fluid img-thumbnail col-border-thumbnail" src="${this.teaserImage}">
				<h4 class="">${this.name}</h4>
				<p class="">Created: ${this.timestamp}</p>
				<div class="text-container">
					<p class="">${this.showAddress()}</p>
				</div>
			</div>	
		</div>`
	}
}

// var place1 = new Location("Karlskirche", "Vienna", "1010", "Karlsplatz 1", "img/test_Karlsplatz.jpg");
// $("#place").prepend(place1.display());
// console.log(place1.name);
// console.log(place1.showAddress());
// console.log(place1.teaserImage);