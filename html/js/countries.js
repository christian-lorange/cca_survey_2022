// Start of country
countries=["Afghanistan",
"Aland Islands",
"Albania",
"Algeria",
"American Samoa",
"Andorra",
"Angola",
"Anguilla",
"Antarctica",
"Antigua and Barbuda",
"Argentina",
"Armenia",
"Aruba",
"Australia",
"Austria",
"Azerbaijan",
"Bahamas",
"Bahrain",
"Bangladesh",
"Barbados",
"Belarus",
"Belgium",
"Belize",
"Benin",
"Bermuda",
"Bhutan",
"Bolivia",
"Bosnia and Herzegovina",
"Botswana",
"Bouvet Island",
"Brazil",
"British Virgin Islands",
"British Indian Ocean Territory",
"Brunei Darussalam",
"Bulgaria",
"Burkina Faso",
"Burundi",
"Cambodia",
"Cameroon",
"Canada",
"Cape Verde",
"Cayman Islands",
"Central African Republic",
"Chad",
"Chile",
"China",
"Hong Kong, SAR China",
"Macao, SAR China",
"Christmas Island",
"Colombia",
"Comoros",
"Democratic Republic of the Congo",
"Cook Islands",
"Costa Rica",
"Cote d'Ivoire",
"Croatia",
"Cuba",
"Cyprus",
"Czech Republic",
"Denmark",
"Djibouti",
"Dominica",
"Dominican Republic",
"Ecuador",
"Egypt",
"El Salvador",
"Equatorial Guinea",
"Eritrea",
"Estonia",
"Ethiopia",
"Faroe Islands",
"Fiji",
"Finland",
"France",
"French Guiana",
"French Polynesia",
"French Southern Territories",
"Gabon",
"Gambia",
"Georgia",
"Germany",
"Ghana",
"Gibraltar",
"Greece",
"Greenland",
"Grenada",
"Guadeloupe",
"Guam",
"Guatemala",
"Guernsey",
"Guinea",
"Guinea-Bissau",
"Guyana",
"Haiti",
"Honduras",
"Hungary",
"Iceland",
"India",
"Indonesia",
"Iran, Islamic Republic of",
"Iraq",
"Ireland",
"Isle of Man",
"Israel",
"Italy",
"Jamaica",
"Japan",
"Jersey",
"Jordan",
"Kazakhstan",
"Kenya",
"Kiribati",
"Korea (North)",
"Korea (South)",
"Kuwait",
"Kyrgyzstan",
"Lao PDR",
"Latvia",
"Lebanon",
"Lesotho",
"Liberia",
"Libya",
"Liechtenstein",
"Lithuania",
"Luxembourg",
"Macedonia, Republic of",
"Madagascar",
"Malawi",
"Malaysia",
"Maldives",
"Mali",
"Malta",
"Marshall Islands",
"Martinique",
"Mauritania",
"Mauritius",
"Mayotte",
"Mexico",
"Micronesia, Federated States of",
"Moldova",
"Monaco",
"Mongolia",
"Montenegro",
"Montserrat",
"Morocco",
"Mozambique",
"Myanmar",
"Namibia",
"Nauru",
"Nepal",
"Netherlands",
"Netherlands Antilles",
"New Caledonia",
"New Zealand",
"Nicaragua",
"Niger",
"Nigeria",
"Northern Mariana Islands",
"Norway",
"Oman",
"Pakistan",
"Palau",
"Palestinian Territory",
"Panama",
"Papua New Guinea",
"Paraguay",
"Peru",
"Philippines",
"Pitcairn",
"Poland",
"Portugal",
"Puerto Rico",
"Qatar",
"Romania",
"Russian Federation",
"Rwanda",
"Saint-Barthélemy",
"Saint Helena",
"Saint Kitts and Nevis",
"Saint Lucia",
"Saint-Martin (French part)",
"Saint Pierre and Miquelon",
"Saint Vincent and Grenadines",
"Samoa",
"San Marino",
"Sao Tome and Principe",
"Saudi Arabia",
"Senegal",
"Serbia",
"Seychelles",
"Sierra Leone",
"Singapore",
"Slovakia",
"Slovenia",
"Solomon Islands",
"Somalia",
"South Africa",
"South Sudan",
"Spain",
"Sri Lanka",
"Sudan",
"Suriname",
"Swaziland",
"Sweden",
"Switzerland",
"Syrian Arab Republic (Syria)",
"Taiwan, Republic of China",
"Tajikistan",
"Tanzania, United Republic of",
"Thailand",
"Timor-Leste",
"Togo",
"Tokelau",
"Tonga",
"Trinidad and Tobago",
"Tunisia",
"Turkey",
"Turkmenistan",
"Turks and Caicos Islands",
"Tuvalu",
"Uganda",
"Ukraine",
"United Arab Emirates",
"United Kingdom",
"United States of America",
"Uruguay",
"Uzbekistan",
"Vanuatu",
"Venezuela (Bolivarian Republic)",
"Viet Nam",
"Virgin Islands, US",
"Yemen",
"Zambia",
"Zimbabwe",
];

country_code=["AFG",
"ALA",
"ALB",
"DZA",
"ASM",
"AND",
"AGO",
"AIA",
"ATA",
"ATG",
"ARG",
"ARM",
"ABW",
"AUS",
"AUT",
"AZE",
"BHS",
"BHR",
"BGD",
"BRB",
"BLR",
"BEL",
"BLZ",
"BEN",
"BMU",
"BTN",
"BOL",
"BIH",
"BWA",
"BVT",
"BRA",
"VGB",
"IOT",
"BRN",
"BGR",
"BFA",
"BDI",
"KHM",
"CMR",
"CAN",
"CPV",
"CYM",
"CAF",
"TCD",
"CHL",
"CHN",
"HKG",
"MAC",
"CXR",
"COL",
"COM",
"COD",
"COK",
"CRI",
"CIV",
"HRV",
"CUB",
"CYP",
"CZE",
"DNK",
"DJI",
"DMA",
"DOM",
"ECU",
"EGY",
"SLV",
"GNQ",
"ERI",
"EST",
"ETH",
"FRO",
"FJI",
"FIN",
"FRA",
"GUF",
"PYF",
"ATF",
"GAB",
"GMB",
"GEO",
"DEU",
"GHA",
"GIB",
"GRC",
"GRL",
"GRD",
"GLP",
"GUM",
"GTM",
"GGY",
"GIN",
"GNB",
"GUY",
"HTI",
"HND",
"HUN",
"ISL",
"IND",
"IDN",
"IRN",
"IRQ",
"IRL",
"IMN",
"ISR",
"ITA",
"JAM",
"JPN",
"JEY",
"JOR",
"KAZ",
"KEN",
"KIR",
"PRK",
"KOR",
"KWT",
"KGZ",
"LAO",
"LVA",
"LBN",
"LSO",
"LBR",
"LBY",
"LIE",
"LTU",
"LUX",
"MKD",
"MDG",
"MWI",
"MYS",
"MDV",
"MLI",
"MLT",
"MHL",
"MTQ",
"MRT",
"MUS",
"MYT",
"MEX",
"FSM",
"MDA",
"MCO",
"MNG",
"MNE",
"MSR",
"MAR",
"MOZ",
"MMR",
"NAM",
"NRU",
"NPL",
"NLD",
"ANT",
"NCL",
"NZL",
"NIC",
"NER",
"NGA",
"MNP",
"NOR",
"OMN",
"PAK",
"PLW",
"PSE",
"PAN",
"PNG",
"PRY",
"PER",
"PHL",
"PCN",
"POL",
"PRT",
"PRI",
"QAT",
"ROU",
"RUS",
"RWA",
"BLM",
"SHN",
"KNA",
"LCA",
"MAF",
"SPM",
"VCT",
"WSM",
"SMR",
"STP",
"SAU",
"SEN",
"SRB",
"SYC",
"SLE",
"SGP",
"SVK",
"SVN",
"SLB",
"SOM",
"ZAF",
"SSD",
"ESP",
"LKA",
"SDN",
"SUR",
"SWZ",
"SWE",
"CHE",
"SYR",
"TWN",
"TJK",
"TZA",
"THA",
"TLS",
"TGO",
"TKL",
"TON",
"TTO",
"TUN",
"TUR",
"TKM",
"TCA",
"TUV",
"UGA",
"UKR",
"ARE",
"GBR",
"USA",
"URY",
"UZB",
"VUT",
"VEN",
"VNM",
"VIR",
"YEM",
"ZMB",
"ZWE",
];


var input = document.getElementById("country_primary");
new Awesomplete(input, {list: countries});
document.getElementById('country_primary').addEventListener('awesomplete-selectcomplete',function(){
// Script to run after selection is made
});


var search_box = document.getElementById("country_search"); 
var c = new Awesomplete(search_box, {list: countries});
    document.getElementById('country_search').addEventListener('awesomplete-selectcomplete',async function(){
    // We do these steps after someone clicks on search bar
    var a = countries.indexOf(document.getElementById("country_search").value); //find index of the selected store
    document.getElementById(country_code[a]).checked = true 
    c.close();
    c.close();
    c.close();
    c.close();
    c.close();
    c.close();
    c.close();
    c.close();
    c.close();

    // Load countries in table on click
    prep_table()

});

var search_box = document.getElementById("country_stove_sales"); 
var c = new Awesomplete(search_box, {list: countries});
    document.getElementById('country_stove_sales').addEventListener('awesomplete-selectcomplete',async function(){
    // We do these steps after someone clicks on search bar
    var a = countries.indexOf(document.getElementById("country_stove_sales").value); //find index of the selected store
    document.getElementById("stove_sales_"+country_code[a]).checked = true 
    c.close();
    c.close();
    c.close();
    c.close();
    c.close();
    c.close();
    c.close();
    c.close();
    c.close();

    // Load countries in table on click
    prep_table()
    country_sales_details()

    document.getElementById("country_stove_sales").value=""

});


var search_box = document.getElementById("country_fuel_sales"); 
var c = new Awesomplete(search_box, {list: countries});
    document.getElementById('country_fuel_sales').addEventListener('awesomplete-selectcomplete',async function(){
    // We do these steps after someone clicks on search bar
    var a = countries.indexOf(document.getElementById("country_fuel_sales").value); //find index of the selected store
    document.getElementById("fuel_sales_"+country_code[a]).checked = true 
    c.close();
    c.close();
    c.close();
    c.close();
    c.close();
    c.close();
    c.close();
    c.close();
    c.close();

    // Load countries in table on click
    prep_table()

    document.getElementById("country_fuel_sales").value=""

});




function countries_data(){
 setTimeout(function() {
    for (let i = 0; i < countries.length; i++) {
    // Loop through stores in list and create checkboxs
    var checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.value = i.toString();
	checkbox.id = country_code[i];
	
	// load table on checkbox click
	checkbox.classList.add("country_chbx");
	checkbox.onclick = function(){prep_table()};

	var label = document.createElement('label')
	var t_span=document.createElement('span');
	t_span.innerHTML=countries[i] + "<span class='close'>  X  </span>";
	label.appendChild(checkbox);
	label.appendChild(t_span)
	var cont = document.createElement('div')
	cont.id="ck-button";
	cont.appendChild(label)
	document.getElementById("country_chbx").appendChild(cont)

    // Loop through stores in list and create checkboxs
    var checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.value = i.toString();
	checkbox.id = "stove_sales_"+country_code[i];
	
	// load table on checkbox click
	checkbox.classList.add("country_sales_chbx");
	checkbox.onclick = function(){prep_table()};

	var label = document.createElement('label')
	var t_span=document.createElement('span');
	t_span.innerHTML=countries[i] + "<span class='close'>  X  </span>";
	label.appendChild(checkbox);
	label.appendChild(t_span)
	var cont = document.createElement('div')
	cont.id="ck-button";
	cont.appendChild(label)
	document.getElementById("country_stove_sales_chbx").appendChild(cont)




	// Loop through stores in list and create checkboxs
    var checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.value = i.toString();
	checkbox.id = "fuel_sales_"+country_code[i];
	
	// load table on checkbox click
	checkbox.classList.add("country_fuel_sales_chbx");
	checkbox.onclick = function(){prep_table()};

	var label = document.createElement('label')
	var t_span=document.createElement('span');
	t_span.innerHTML=countries[i] + "<span class='close'>  X  </span>";
	label.appendChild(checkbox);
	label.appendChild(t_span)
	var cont = document.createElement('div')
	cont.id="ck-button";
	cont.appendChild(label)
	document.getElementById("country_fuel_sales_chbx").appendChild(cont)
} 
}, 1);
}


function prep_table(){
	// Going through and determing what countries the group works in
	var array_country_status =[];
	var checked_true = document.getElementsByClassName('country_chbx');
	for(var index=0;index < checked_true.length;index++){
		if(checked_true[index].checked){
			temp = true;
		}	
		else {
			temp = false;
		}
      array_country_status.push(temp)
   }
}


setTimeout(function() {
    prep_table();
    countries_data();
}, 100);



countries_data();