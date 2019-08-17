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
		  this.timestamp = timestamp;
		  // renderList.push(this);
	}

	showAddress() {
		return `${this.address}, ${this.zipCode} ${this.city}`;
	}
	display() {
		return `<div class="col-12 col-md-6 col-lg-3 p-2">
			<div class="col-border">
				<img class="img-fluid img-thumbnail d-none d-md-block" src="${this.teaserImage}">
				<h4>${this.name}</h4>
				<p>Created: ${this.timestamp}</p>
				<div class="text-container d-none d-md-block">
					<p>${this.showAddress()}</p>
					<p></p>
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
		var htmlString = `${super.display()}`;
		return htmlString.replace("<p></p>", 
											`<p class="restaurant-color">${this.phoneNumber}</p>
											<p>${this.cusineType}</p>
											<a class="web-link" href="https://${this.webPage}" target="_blank">${this.webPage}</a>`);
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
		var htmlString = `${super.display()}`;
		return htmlString.replace("<p></p>", 
											`<p class="event-color">${this.date}</p>
											<p>${this.time}</p>
											<p>${this.ticketPrice}</p>`);
	}
}

//=======================================================================================================
// array of objects, created using the class constructors 
//=======================================================================================================
var renderList = [
	new Location("Hundertwasser House", "Vienna", "1030", "Kegelgasse 36-38", "img/place_hundertwasserhaus.jpg", `06 Jan 2018 23:18`),
	new Location("Sagrada Familia", "Barcelona", "8013", "Carrer de Mallorca, 401", "img/place_sagradafamilia.jpeg", `04 Jul 2017 02:18`),
	new Location("Atomic Bomb Dome", "Hiroshima", "730-0051", "1-10 Otemachi", "img/place_atomicbombdome.jpg", `14 Nov 2018 05:24`),
	new Location("Kiyomizu-dera Temple", "Kyoto", "605-0862", "294 Kiyomizu", "img/place_kiyomizu.jpg", `25 Feb 2018 02:10`),
	new Location("Fushimi Inari-taisha Shrine", "Kyoto", "612-0882", "68 Fukakusa Yabunouchicho", "img/place_fushimiinari.jpg", `17 Jun 2019 10:47`),
	new Location("Senso-ji Temple", "Tokyo", "111-0032", "2-3-1, Asakusa", "img/place_sensoji.jpg", `26 Jul 2019 01:21 debug`),
	new Location("Semuc Champey", "Lanquín", "G2MR+F8", "San Agustín", "img/place_semuc_champey.jpg", `20 May 2018 21:03`),
	new Location("Winchester Mystery House", "San Jose", "CA 95128", "525 S Winchester Blvd", "img/place_winchester.jpg", `02 Jul 2019 12:52`),
	new Restaurant("Donburi", "Vienna", "1020", "Lassallestraße 6", "img/rest_asian.jpg", `19 Apr 2018 19:11`, "+43 1 7200034", "asian", "www.donburiasiacuisine.at"),
	new Restaurant("MAREDO", "Vienna", "1010", "Opernring 3/5", "img/rest_maredo.jpg", `16 Apr 2018 22:13`, "+43 1 5867722", "steakhouse", "www.maredo.at"),
	new Restaurant("Vapiano", "Vienna", "1100", "Triester Straße 64", "img/rest_vapiano.jpg", `10 Dec 2018 20:01`, "+43 1 6008282", "italian", "www.mjam.net"),
	new Restaurant("Sushi Cross", "Vienna", "1030", "Wien Mitte Mall", "img/rest_sushicross.jpg", `04 Aug 2019 13:22`, "+43 1 2121210", "asian", "www.sushi-cross.at"),
	new Restaurant("el Gaucho", "Vienna", "1020", "Praterstrasse 1", "img/rest_elgaucho.jpg", `12 Jan 2019 06:26`, "+43 680 2365804", "steakhouse", "www.elgaucho.at"),
	new Restaurant("Gasthaus Elsner", "Vienna", "1150", "Neumayrgasse 2", "img/rest_gasthaus.jpg", `21 Jun 2018 14:25`, "+43 1 4925596", "viennese", "www.mjam.net"),
	new Event("BonJovi", "Moscow", "123456", "Olympic Stadium, Olimpiyskiy Prospekt, 16", "img/event_bonjovi.jpg", `26 Jan 2018 12:34`, "31.05.2019", "19:00", "75 EUR"),
	new Event("Rammstein", "Vienna", "1020", "Ernst Happel Stadion Wien, Meiereistrasse 7", "img/event_rammstein.jpg", `20 Oct 2018 22:52`, "23.08.2019", "19:00", "101 EUR"),
	new Event("Lindsey Stirling", "Vienna", "1110", "Bank Austria Halle Gasometer, Guglgasse 8", "img/event_stirling.jpg", `06 Apr 2018 13:36`, "16.09.2019", "20:00", "55 EUR"),
	new Event("Deep Purple", "Klagenfurt", "9020", "Kärnten Halle - Messe Klagenfurt, Messeplatz 1", "img/event_deeppurple.jpg", `20 Mar 2019 07:53`, "01.12.2019", "18:00", "85 EUR"),
	new Event("Cats musical", "Vienna", "1010", "Ronacher Theater, Seilerstätte 9", "img/event_cats.jpg", `27 Dec 2018 06:26`, "15.10.2019", "18:30", "45 EUR"),
	new Event("Metallica", "Vienna", "1020", "Ernst Happel Stadion Wien, Meiereistrasse 7", "img/event_metallica.jpg", `30 May 2018 06:33`, "16.08.2019", "19:00", "150 EUR")
];

//==============================================================================
// function for rendering the objects from the array to display them in webpage - tested 16.08 / 10:00 working
//==============================================================================
function render(item) {
	if (item.phoneNumber == undefined && item.date == undefined) {
		$(".place").append(item.display());
	} else if (item.date == undefined) {
		$(".restaurant").append(item.display());
		$(".restaurant-color").closest(".col-border").addClass("col-border-blue");
	} else {
		$(".event").append(item.display());
		$(".event-color").closest(".col-border").addClass("col-border-orange");
	}
}

//==============================================================================
// sorting functions (ascend, descend, a-z) 
// call for sorting and render function are in separate files = called upon page loading
// otherwise they interfer with one another and/or need a separate trigger to separate the function scopes
//==============================================================================

function sortAlphabetically(a,b) {
	return (a.name).localeCompare(b.name);
};

function sortAscending(a,b) {
	return new Date(a.timestamp) - new Date(b.timestamp);
};

function sortDescending(a,b) {
	return new Date(b.timestamp) - new Date(a.timestamp);
};

//==============================================================================
// function on SEARCH button to focus(scroll to) particular section
//==============================================================================
$("#search-button").click(function(e){
	e.preventDefault();
	var focusTarget = $("#search-field").val()
	window.location.hash = `#${focusTarget}`;
})







//===================================================================
// function to create random date for each object is not applicable,
// becuse dates will be randomly generated each time the page reloads
//===================================================================
