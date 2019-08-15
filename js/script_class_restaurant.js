//====================================================
// class Restaurant  + 1 instance created for testing
//====================================================
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
		<img class="img-fluid img-thumbnail col-border-thumbnail" src="${this.teaserImage}">
		<h4 class="">${this.name}</h4>
		<p class="">Created: ${this.timestamp}</p>
		<div class="text-container">
			<p class="">${this.showAddress()}</p>
			<p class="">${this.phoneNumber}</p>
			<p class="">${this.cusineType}</p>
			<p class="">${this.webPage}</p>
		</div>
	</div>
</div>`
	}
}

// var rest1 = new Restaurant("Lemontree", "Bagdad", "1150", "Kurbatra 3", "img/test_rest_sixta.png", "phoneNumber", "cusineType", "webPage")
// $("#rest").prepend(rest1.display());
// console.log(rest1.display());
// console.log(rest1.name);
// console.log(rest1.showAddress());
// console.log(rest1.teaserImage);
// console.log(rest1.phoneNumber, rest1.cusineType, rest1.webPage);