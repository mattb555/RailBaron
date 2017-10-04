var RegionEnum = {
	NORTHEAST		: 0,
	SOUTHEAST		: 1,
	NORTH_CENTRAL	: 2,
	SOUTH_CENTRAL	: 3,
	PLAINS			: 4,
	NORTHWEST		: 5,
	SOUTHWEST		: 6
};

var CityEnum = {
	ALBANY			: {value: 0, name: "Albany"},
	BALTIMORE		: {value: 1, name: "Baltimore"},
	BOSTON			: {value: 2, name: "Boston"},
	BUFFALO			: {value: 3, name: "Buffalo"},
	NEW_YORK		: {value: 4, name: "New York"},
	PHILADELPHIA	: {value: 5, name: "Philadelphia"},
	PITTSBURGH		: {value: 6, name: "Pittsburgh"},
	PORTLAND_ME		: {value: 7, name: "Portland, ME"},
	WASHINGTON		: {value: 8, name: "Washington"},
	ATLANTA			: {value: 9, name: "Atlanta"},
	CHARLESTON		: {value: 10, name: "Charleston"},
	CHARLOTTE		: {value: 11, name: "Charlotte"},
	CHATTANOOGA		: {value: 12, name: "Chattanooga"},
	JACKSONVILLE	: {value: 13, name: "Jacksonville"},
	KNOXVILLE		: {value: 14, name: "Knoxville"},
	MIAMI			: {value: 15, name: "Miami"},
	MOBILE			: {value: 16, name: "Mobile"},
	NORFOLK			: {value: 17, name: "Norfolk"},
	RICHMOND		: {value: 18, name: "Richmond"},
	TAMPA			: {value: 19, name: "Tampa"},
	CHICAGO			: {value: 20, name: "Chicago"},
	CINCINANTTI		: {value: 21, name: "Cincinatti"},
	CLEVELAND		: {value: 22, name: "Cleveland"},
	COLUMBUS		: {value: 23, name: "Columbus"},
	DETROIT			: {value: 24, name: "Detroit"},
	INDIANAPOLIS	: {value: 25, name: "Indianapolis"},
	MILWAUKEE		: {value: 26, name: "Milwaukee"},
	ST_LOUIS		: {value: 27, name: "St. Louis"},
	BIRMINGHAM		: {value: 28, name: "Birmingham"},
	DALLAS			: {value: 29, name: "Dallas"},
	FORT_WORTH		: {value: 30, name: "Fort Worth"},
	HOUSTON			: {value: 31, name: "Houston"},
	LITTLE_ROCK		: {value: 32, name: "Little Rock"},
	LOUISVILLE		: {value: 33, name: "Louisville"},
	MEMPHIS			: {value: 34, name: "Memphis"},
	NASHVILLE		: {value: 35, name: "Nashville"},
	NEW_ORLEANS		: {value: 36, name: "New Orleans"},
	SAN_ANTONIO		: {value: 37, name: "San Antonio"},
	SHREVEPORT		: {value: 38, name: "Shreveport"},
	DENVER			: {value: 39, name: "Denver"},
	DES_MOINES		: {value: 40, name: "Des Moines"},
	FARGO			: {value: 41, name: "Fargo"},
	KANSAS_CITY		: {value: 42, name: "Kansas City"},
	MINNEAPOLIS		: {value: 43, name: "Minneapolis"},
	OKLAHOMA_CITY	: {value: 44, name: "Oklahoma City"},
	OMAHA			: {value: 45, name: "Omaha"},
	PUEBLO			: {value: 46, name: "Pueblo"},
	ST_PAUL			: {value: 47, name: "St. Paul"},
	BILLINGS		: {value: 48, name: "Billings"},
	BUTTE			: {value: 49, name: "Butte"},
	CASPER			: {value: 50, name: "Casper"},
	POCATELLO		: {value: 51, name: "Pocatello"},
	PORTLAND_OR		: {value: 52, name: "Portland, OR"},
	RAPID_CITY		: {value: 53, name: "Rapid City"},
	SALT_LAKE_CITY	: {value: 54, name: "Salt Lake City"},
	SEATTLE			: {value: 55, name: "Seattle"},
	SPOKANE			: {value: 56, name: "Spokane"},
	EL_PASO			: {value: 57, name: "El Paso"},
	LAS_VEGAS		: {value: 58, name: "Las Vegas"},
	LOS_ANGELES		: {value: 59, name: "Los Angeles"},
	OAKLAND			: {value: 60, name: "Oakland"},
	PHOENIX			: {value: 61, name: "Phoenix"},
	RENO			: {value: 62, name: "Reno"},
	SACRAMENTO		: {value: 63, name: "Sacramento"},
	SAN_DIEGO		: {value: 64, name: "San Diego"},
	SAN_FRANCISCO	: {value: 65, name: "San Francisco"},
	TUCUMCARI		: {value: 66, name: "Tucumcari"},
};

var region = [
				[null, null, RegionEnum.PLAINS, RegionEnum.SOUTHEAST, RegionEnum.SOUTHEAST, RegionEnum.SOUTHEAST, RegionEnum.NORTH_CENTRAL, RegionEnum.NORTH_CENTRAL, RegionEnum.NORTHEAST, RegionEnum.NORTHEAST, RegionEnum.NORTHEAST, RegionEnum.NORTHEAST, RegionEnum.NORTHEAST],
				[null, null, RegionEnum.SOUTHWEST, RegionEnum.SOUTH_CENTRAL, RegionEnum.SOUTH_CENTRAL, RegionEnum.SOUTH_CENTRAL, RegionEnum.SOUTHWEST, RegionEnum.SOUTHWEST, RegionEnum.PLAINS, RegionEnum.NORTHWEST, RegionEnum.NORTHWEST, RegionEnum.PLAINS, RegionEnum.NORTHWEST]
			];
			
var city = [
				[
					[null, null, CityEnum.NEW_YORK, CityEnum.NEW_YORK, CityEnum.NEW_YORK, CityEnum.ALBANY, CityEnum.BOSTON, CityEnum.BUFFALO, CityEnum.BOSTON, CityEnum.PORTLAND_ME, CityEnum.NEW_YORK, CityEnum.NEW_YORK, CityEnum.NEW_YORK],
					[null, null, CityEnum.NEW_YORK, CityEnum.WASHINGTON, CityEnum.PITTSBURGH, CityEnum.PITTSBURGH, CityEnum.PHILADELPHIA, CityEnum.WASHINGTON, CityEnum.PHILADELPHIA, CityEnum.BALTIMORE, CityEnum.BALTIMORE, CityEnum.BALTIMORE, CityEnum.NEW_YORK]
				],
				[
					[null, null, CityEnum.CHARLOTTE, CityEnum.CHARLOTTE, CityEnum.CHATTANOOGA, CityEnum.ATLANTA, CityEnum.ATLANTA, CityEnum.ATLANTA, CityEnum.RICHMOND, CityEnum.KNOXVILLE, CityEnum.MOBILE, CityEnum.KNOXVILLE, CityEnum.MOBILE],
					[null, null, CityEnum.NORFOLK, CityEnum.NORFOLK, CityEnum.NORFOLK, CityEnum.CHARLESTON, CityEnum.MIAMI, CityEnum.JACKSONVILLE, CityEnum.MIAMI, CityEnum.TAMPA, CityEnum.TAMPA, CityEnum.MOBILE, CityEnum.NORFOLK]
				],
				[
					[null, null, CityEnum.CLEVELAND, CityEnum.CLEVELAND, CityEnum.CLEVELAND, CityEnum.CLEVELAND, CityEnum.DETROIT, CityEnum.DETROIT, CityEnum.INDIANAPOLIS, CityEnum.MILWAUKEE, CityEnum.MILWAUKEE, CityEnum.CHICAGO, CityEnum.MILWAUKEE],
					[null, null, CityEnum.CINCINANTTI, CityEnum.CHICAGO, CityEnum.CINCINANTTI, CityEnum.CINCINANTTI, CityEnum.COLUMBUS, CityEnum.CHICAGO, CityEnum.CHICAGO, CityEnum.ST_LOUIS, CityEnum.ST_LOUIS, CityEnum.ST_LOUIS, CityEnum.CHICAGO]
				],
				[
					[null, null, CityEnum.MEMPHIS, CityEnum.MEMPHIS, CityEnum.MEMPHIS, CityEnum.LITTLE_ROCK, CityEnum.NEW_ORLEANS, CityEnum.BIRMINGHAM, CityEnum.LOUISVILLE, CityEnum.NASHVILLE, CityEnum.NASHVILLE, CityEnum.LOUISVILLE, CityEnum.MEMPHIS],
					[null, null, CityEnum.SHREVEPORT, CityEnum.SHREVEPORT, CityEnum.DALLAS, CityEnum.NEW_ORLEANS, CityEnum.DALLAS, CityEnum.SAN_ANTONIO, CityEnum.HOUSTON, CityEnum.HOUSTON, CityEnum.FORT_WORTH, CityEnum.FORT_WORTH, CityEnum.FORT_WORTH]
				],
				[
					[null, null, CityEnum.KANSAS_CITY, CityEnum.KANSAS_CITY, CityEnum.DENVER, CityEnum.DENVER, CityEnum.DENVER, CityEnum.KANSAS_CITY, CityEnum.KANSAS_CITY, CityEnum.KANSAS_CITY, CityEnum.PUEBLO, CityEnum.PUEBLO, CityEnum.OKLAHOMA_CITY],
					[null, null, CityEnum.OKLAHOMA_CITY, CityEnum.ST_PAUL, CityEnum.MINNEAPOLIS, CityEnum.ST_PAUL, CityEnum.MINNEAPOLIS, CityEnum.OKLAHOMA_CITY, CityEnum.DES_MOINES, CityEnum.OMAHA, CityEnum.OMAHA, CityEnum.FARGO, CityEnum.FARGO]
				],
				[
					[null, null, CityEnum.SPOKANE, CityEnum.SPOKANE, CityEnum.SEATTLE, CityEnum.SEATTLE, CityEnum.SEATTLE, CityEnum.SEATTLE, CityEnum.RAPID_CITY, CityEnum.CASPER, CityEnum.BILLINGS, CityEnum.BILLINGS, CityEnum.SPOKANE],
					[null, null, CityEnum.SPOKANE, CityEnum.SALT_LAKE_CITY, CityEnum.SALT_LAKE_CITY, CityEnum.SALT_LAKE_CITY, CityEnum.PORTLAND_OR, CityEnum.PORTLAND_OR, CityEnum.PORTLAND_OR, CityEnum.POCATELLO, CityEnum.BUTTE, CityEnum.BUTTE, CityEnum.PORTLAND_OR]
				],
				[
					[null, null, CityEnum.SAN_DIEGO, CityEnum.SAN_DIEGO, CityEnum.RENO, CityEnum.SAN_DIEGO, CityEnum.SACRAMENTO, CityEnum.LAS_VEGAS, CityEnum.PHOENIX, CityEnum.EL_PASO, CityEnum.TUCUMCARI, CityEnum.PHOENIX, CityEnum.PHOENIX],
					[null, null, CityEnum.LOS_ANGELES, CityEnum.OAKLAND, CityEnum.OAKLAND, CityEnum.OAKLAND, CityEnum.LOS_ANGELES, CityEnum.LOS_ANGELES, CityEnum.LOS_ANGELES, CityEnum.SAN_FRANCISCO, CityEnum.SAN_FRANCISCO, CityEnum.SAN_FRANCISCO, CityEnum.SAN_FRANCISCO]
				]
			];
			
var payouts = [
				[0],
				[3.5, 0],
				[2, 4, 0],
				[3, 4, 5, 0],
				[1.5, 2, 2.5, 4, 0],
				[2.5, 1, 3, 4, 1, 0],
				[5.5, 3.5, 6.5, 2.5, 4.5, 3.5, 0],
				[3, 5.5, 1, 6, 3.5, 4.5, 8, 0],
				[3.5, 5, 4.5, 4.5, 2, 1.5, 3, 5.5, 0],
]

// Sourced from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getLocations() {
	var cities = [];
	for (var i in CityEnum) {
		cities.push(CityEnum[i].name);
	}
	cities = cities.sort();
	var clist = document.getElementById('StartList');
	var clist2 = document.getElementById('EndList');
	var optioned;
	for (var i = 0; i < cities.length; i++) {
		optioned = document.createElement('option');
		optioned.innerHTML = cities[i];
		optioned.value = cities[i];
		clist.appendChild(optioned);
		optioned = document.createElement('option');
		optioned.innerHTML = cities[i];
		optioned.value = cities[i].value;
		clist2.appendChild(optioned);
	}
}

function randomDestination() {
	var redDie = getRandomInt(0, 2);
	var whiteDie1 = getRandomInt(1, 7);
	var whiteDie2 = getRandomInt(1, 7);
	var regionSelected = region[redDie][whiteDie1 + whiteDie2];
	redDie = getRandomInt(0, 2);
	whiteDie1 = getRandomInt(1, 7);
	whiteDie2 = getRandomInt(1, 7);
	var citySelected = city[regionSelected][redDie][whiteDie1 + whiteDie2];
	$( "#Dest" ).html("You are traveling from " + $( "#StartList option:selected" ).text() + " to " + citySelected.name);
}

function getPayout(city1, city2) {
	if (city1 > city2) {
		var temp = city1;
		city1 = city2;
		city2 = temp;
	}
	return payouts[city1][city2];
}

function set_up() {
	getLocations();
    document.getElementById('NewDest').onclick = randomDestination;
}

window.onload = set_up;