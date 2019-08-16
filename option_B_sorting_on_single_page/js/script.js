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
		  // renderList.push(this);
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
			<a class="web-link" href="https://${this.webPage}" target="_blank">${this.webPage}</a>
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
// array of objects, created using the class constructors 
//=======================================================================================================
var renderList = [
	new Location("Hundertwasser House", "Vienna", "1030", "Kegelgasse 36-38", "img/place_hundertwasserhaus.jpg", `Mar 06 2012 16:00`),
	new Location("Sagrada Familia", "Barcelona", "8013", "Carrer de Mallorca, 401", "img/place_sagradafamilia.jpeg", `Mar 15 2012 10:00`),
	new Location("Atomic Bomb Dome", "Hiroshima", "730-0051", "1-10 Otemachi", "img/place_atomicbombdome.jpg", `Mar 03 2012 10:00`),
	new Location("Kiyomizu-dera Temple", "Kyoto", "605-0862", "294 Kiyomizu", "img/place_kiyomizu.jpg", `Mar 13 2012 10:00`),
	new Location("Fushimi Inari-taisha Shrine", "Kyoto", "612-0882", "68 Fukakusa Yabunouchicho", "img/place_fushimiinari.jpg", `Mar 26 2012 10:00`),
	new Location("Senso-ji Temple", "Tokyo", "111-0032", "2-3-1, Asakusa", "img/place_sensoji.jpg", `Mar 10 2012 10:00`),
	new Location("Semuc Champey", "Lanquín", "G2MR+F8", "San Agustín", "img/place_semuc_champey.jpg", `Mar 24 2012 10:00`),
	new Location("Winchester Mystery House", "San Jose", "CA 95128", "525 S Winchester Blvd", "img/place_winchester.jpg", `Mar 01 2012 10:00`),
	new Restaurant("Donburi", "Vienna", "1020", "Lassallestraße 6", "img/rest_asian.jpg", `May 21 2010 15:00`, "+43 1 7200034", "asian", "www.donburiasiacuisine.at"),
	new Restaurant("MAREDO", "Vienna", "1010", "Opernring 3/5", "img/rest_maredo.jpg", `May 05 2010 15:00`, "+43 1 5867722", "steakhouse", "www.maredo.at"),
	new Restaurant("Vapiano", "Vienna", "1100", "Triester Straße 64", "img/rest_vapiano.jpg", `May 30 2010 15:00`, "+43 1 6008282", "italian", "www.mjam.net"),
	new Restaurant("Sushi Cross", "Vienna", "1030", "Wien Mitte Mall", "img/rest_sushicross.jpg", `May 21 2010 10:00`, "+43 1 2121210", "asian", "www.sushi-cross.at"),
	new Restaurant("el Gaucho", "Vienna", "1020", "Praterstrasse 1", "img/rest_elgaucho.jpg", `May 21 2010 10:00`, "+43 680 2365804", "steakhouse", "www.elgaucho.at"),
	new Restaurant("Gasthaus Elsner", "Vienna", "1150", "Neumayrgasse 2", "img/rest_gasthaus.jpg", `May 21 2010 10:00`, "+43 1 4925596", "viennese", "www.mjam.net"),
	new Event("BonJovi", "Moscow", "123456", "Olympic Stadium, Olimpiyskiy Prospekt, 16", "img/event_bonjovi.jpg", `Feb 05 2018 12:00`, "31.05.2019", "19:00", "75 EUR"),
	new Event("Rammstein", "Vienna", "1020", "Ernst Happel Stadion Wien, Meiereistrasse 7", "img/event_rammstein.jpg", `Jan 09 2018 12:00`, "23.08.2019", "19:00", "101 EUR"),
	new Event("Lindsey Stirling", "Vienna", "1110", "Bank Austria Halle Gasometer, Guglgasse 8", "img/event_stirling.jpg", `Jun 12 2018 12:00`, "16.09.2019", "20:00", "55 EUR"),
	new Event("Deep Purple", "Klagenfurt", "9020", "Kärnten Halle - Messe Klagenfurt, Messeplatz 1", "img/event_deeppurple.jpg", `Jun 12 2018 12:00`, "01.12.2019", "18:00", "85 EUR"),
	new Event("Cats musical", "Vienna", "1010", "Ronacher Theater, Seilerstätte 9", "img/event_cats.jpg", `Feb 05 2018 12:00`, "15.10.2019", "18:30", "45 EUR"),
	new Event("Metallica", "Vienna", "1020", "Ernst Happel Stadion Wien, Meiereistrasse 7", "img/event_metallica.jpg", `Feb 05 2018 12:00`, "16.08.2019", "19:00", "150 EUR")
];

var renderListOriginal = renderList.slice(0); // clone original list to be able to display original order of objects after any sorting

//==============================================================================
// functions for rendering the objects from the array to display them in webpage - tested 16.08 / 10:00 working
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

function renderAll(item) {
	$("#all").append(item.display());
}

$(document).ready(renderListOriginal.forEach(render));
$(".initial-hide").hide();
//==============================================================================
// sorting functions (ascend, descend, a-z) 
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

function showPlacesOnly() {



}
//==============================================================================
// function on SEARCH button to focus(scroll to) particular section
//==============================================================================
$("#search-button").click(function(e){
	e.preventDefault();
	var focusTarget = $("#search-field").val()
	window.location.hash = `#${focusTarget}`;
})


//==============================================================================
// function to clean content befor new rendering
//==============================================================================
function clean() {
	$(".initial-show, .initial-show-header").show();
	$(".initial-show").empty();
	$(".initial-hide").hide();
}
//==============================================================================
// selector for triggering sorting function ascend / descend
// selector is checked upon page loading an renders page based on default selector
// initial selector is all and rendering is done based on initial renderList order
//==============================================================================
var displaySelector = $("#selector");

displaySelector.change(renderOption);

function renderOption() {
	if (displaySelector.val() == "asc") {
		renderList.sort(sortAscending);
		$(".initial-show, .initial-show-header").show();
		$(".initial-show").empty();
		$(".initial-hide").hide();
		renderList.forEach(render);

	} else if (displaySelector.val() == "desc") {
		renderList.sort(sortDescending);
		$(".initial-show, .initial-show-header").show();
		$(".initial-show").empty();
		$(".initial-hide").hide();
		renderList.forEach(render);

	} else if (displaySelector.val() == "a-z") {
		renderList.sort(sortAlphabetically);
		$(".initial-show, .initial-show-header").hide();
		$(".initial-hide").show();
		$("#all").empty();
		renderList.forEach(renderAll);

	} else if (displaySelector.val() == "places") {
		

	} else if (displaySelector.val() == "restaurants") {


	} else if (displaySelector.val() == "events") {


	} else {
		$(".initial-show, .initial-show-header").show();
		$(".initial-show").empty();
		$(".initial-hide").hide();
		renderListOriginal.forEach(render);
	}
		
}



						// <option value="all">Show entries as...</option>
						// <option value="asc">...oldest first</option>
						// <option value="desc">...newest first</option>
						// <option value="a-z">...A-Z</option>
						// <option value="places">...only Places</option>
						// <option value="restaurants">...only Restaurants</option>
						// <option value="events">...only Events</option>

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