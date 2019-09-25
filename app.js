// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = decodeURIComponent(window.location.href).slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
jQuery(document).ready(function() {
	
	$('.input_class_checkbox').each(function(){
		$(this).hide().after('<div class="class_checkbox" />');
	
	});
	
	$('.class_checkbox').on('click',function(){
		$(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'))
	});	
	var lists = {
		africa       : [ "AO","BF","BI","BJ","BW","CD","CF","CG","CI","CM","DJ","DZ","EG","ER","ET","GA","GH","GM","GN","GQ","GW","KE","LR","LS","LY","MA","MU","MG","ML","MR","MW","MZ","NA","NE","NG","RE","RW","SD","SL","SN","SO","SS","SZ","TD","TG","TN","TZ","UG","ZA","ZM","ZW","EH","KM","GO","JU","SH","ST","YT","BV","CV","SC" ],
		asia         : [ "AE","AF","BD","BN","IO","BT","CN","ID","IL","IN","IQ","IR","JO","JP","KG","KH","KP","KR","KW","KZ","LA","LB","LK","MO","MM","MN","MY","NP","OM","PH","PK","PS","QA","SA","SY","TH","TJ","TL","TM","TW","UZ","VN","YE","HK","MV","BH","SG" ],
		europe       : [ "AL","AM","AT","AZ","BA","BE","BG","BY","CH","CY","CZ","DE","DK","EE","ES","JE","FI","FR","GB","GE","GR","HR","HU","IE","IS","IT","LT","LU","LV","MD","ME","MK","NL","NO","PL","PT","RO","RS","SE","SI","SJ","SK","TR","UA","RU","VA","MT","MC","XK","LI","IM","GI","FO","AD","AX","GG","SM" ],
		northAmerica : [ "BS","BZ","CA","CR","CU","DO","GL","GT","HN","HT","JM","MX","NI","PA","PR","SV","US","AG","AW","BB","BL","GD","KN","LC","MQ","TC","VG","AI","BM","DM","PM","GP","KY","MF","MS","SX","TT","VC","VI","BQ","CW" ],
		southAmerica : [ "AR","BO","BR","CL","CO","EC","FK","GF","GY","PE","PY","SR","UY","VE","GS" ],
		oceania      : [ "AS","AU","UM-FQ","CC","CX","FJ","FM","GU","HM","UM-HQ","UM-DQ","UM-JQ","KI","MH","UM-MQ","MP","NC","NF","NR","NU","NZ","PG","PW","SB","TF","TK","TL","TO","TV","VU","UM-WQ","WF","WS","CK","PF","PN" ]
	};
	var names = {};

	// CREATE MAP
	map = AmCharts.makeChart("mapdiv", {
		type: "map",
		theme: "app",
		// addClassNames: true,
		zoomDuration: 0,

		backgroundColor: "#ffffff",
		backgroundAlpha: 1,

		projection: "mercator",

		zoomControl: {
			//panControlEnabled  : true,
			zoomControlEnabled : false
		},

		dataProvider     : {
			map             : "worldHigh",
			getAreasFromMap : true,
			areas           : []
		},

		areasSettings    : {
			autoZoom             : false,
            selectable           : true,
            color : "#E8EAF1",
            colorSolid : "#2BB031",
            selectedColor : "#2BB031",
            outlineColor : "#ffffff",
            rollOverColor : "#BFE7C1",
            rollOverOutlineColor : "#ffffff"
		},

		
	});
	map.updateSettings = function(fromMap) {
		// UPDATE MAP
		// map.backgroundColor                    = jQuery('.section-map-settings input[name=backgroundColor]').val();
		
		// map.areasSettings.color                = jQuery('.section-map-settings input[name=color]').val();
		// map.areasSettings.colorSolid           = jQuery('.section-map-settings input[name=colorSolid]').val();
		// map.areasSettings.selectedColor        = jQuery('.section-map-settings input[name=colorSolid]').val();
		// map.areasSettings.outlineColor         = jQuery('.section-map-settings input[name=outlineColor]').val();
		// map.areasSettings.rollOverColor        = jQuery('.section-map-settings input[name=rollOverColor]').val();
		// map.areasSettings.rollOverOutlineColor = jQuery('.section-map-settings input[name=rollOverOutlineColor]').val();
		
		// //map.zoomControl.panControlEnabled      = jQuery('.section-map-settings input[name=zoomControl]')[0].checked;
		// map.zoomControl.zoomControlEnabled     = jQuery('.section-map-settings input[name=zoomControl]')[0].checked;
		
		// if ( map.AmExport ) {
		// 	map.AmExport.imageBackgroundColor      = map.backgroundColor;
		// }

		// UPDATE WATER
		// jQuery(".section-map-panel").css({
		// 	backgroundColor: map.backgroundColor
		// });

		// UPDATE CODE
		
		var areas = map.updateSelection(true);

		// UPDATE HASH
		// map.updateHash();

		// UPDATE MAP
		if ( !fromMap ) {
			map.validateNow();
		}

		AmCharts.MEDIA_ID = undefined;
	}
	map.addListener("clickMapObject", function (event) {		
        if (event.mapObject.objectType !== "MapArea")
        return;
      
      var area = event.mapObject;
      
      // Toggle showAsSelected
      area.showAsSelected = !area.showAsSelected;
      event.chart.returnInitialColor(area);
      
      // Update the list
      var LIST = getSelectedCountries();
	  addCountriesChips(LIST);
	  map.updateSettings(true);
	  
    });
	map.updateSelection = function(gatherOnly) {
		var areas = [];
		jQuery("div.chip").each(function() {
			var CC = this.id;

			areas.push({
				id: CC,
				showAsSelected: true
			});
		});
		if ( !gatherOnly ) {
			map.dataProvider.areas = areas;
			map.validateData();
		
		}
		return areas;
	}

	
	


	


	// CREATE NAMEMAPPING
	// jQuery(AmCharts.maps.worldHigh.svg.g.path).each(function() {
	// 	if (this.title !== undefined)
	// 	  names[this.id] = this.title.replace(/x28/g,'(').replace(/x29/g,')').replace(/x2C/g,',');
	// });

	// CREATE LIST
	// jQuery(".section-map-list").each(function() {
	// 	jQuery.map(lists,function(list,name) {
	// 		var tbody = jQuery("#"+name).find("tbody");

	// 		// Order the list by alphabet
	// 		list.sort(
	// 			function( x, y ) {
	// 				var a = names[ x ].toLowerCase(),
	// 					b = names[ y ].toLowerCase();
	// 				if ( a > b )
	// 					return 1;
	// 				if ( a < b )
	// 					return -1;
	// 				return 0;
	// 			}
	// 		);

	// 		jQuery(list).each(function() {
	// 			var CC		 = String(this);
	// 			var row      = jQuery("<tr>").appendTo(tbody);
	// 			var col      = jQuery("<td>").appendTo(row);
	// 			var div		 = jQuery("<div>").appendTo(col).addClass("checkbox");
	// 			var label    = jQuery("<label>").appendTo(div).text(names[CC]);
	// 			var checkbox = jQuery("<input>").attr({
	// 				type: "checkbox",
	// 				name: "map",
	// 				value: this
	// 			}).prependTo(label);

	// 			row.on("click",function() {
	// 				checkbox.trigger("click");
	// 				map.updateSelection();
	// 				map.updateSettings();
	// 			});
	// 		});
	// 	});
	// });

	// // CREATE COLOR PICKER
	// jQuery(".input-colorpicker").each(function() {
	// 	var addon = jQuery(this).find(".input-group-addon");
	// 	var input = jQuery(this).find("input");

	//     jQuery(addon).ColorPicker({
	// 		color: jQuery(input).attr('value'),
	// 		onShow: function (colpkr) {
	// 			jQuery(colpkr).fadeIn(250);
	// 			return false;
	// 		},
	// 		onHide: function (colpkr) {
	// 			jQuery(colpkr).fadeOut(250);
	// 			return false;
	// 		},
	// 		onChange: function (hsb, hex, rgb) {
	// 			hex = ('#' + hex).toUpperCase();

	// 			// Water
	// 			if ( input.attr("name") == "backgroundColor" ) {
	// 				jQuery(".section-map-panel").css({
	// 					backgroundColor: hex
	// 				});
	// 			}

	// 			input.val(hex);
	// 			addon.css({
	// 				backgroundColor: hex
	// 			});

	// 			// UPDATE MAP
	// 			clearTimeout(map.timer);
	// 			map.timer = setTimeout(function() {
	// 				map.updateSettings();
	// 				if ( input.attr("name") == "color" ) {
	// 					map.updateSelection();
	// 				}
	// 			},100);
	// 		}
	//     });
	// });

	// OBSERVE INPUTS
	// jQuery(".section-map-settings input").on("change",function() {
	// 	var input = jQuery(this);
	// 	var prev = jQuery(this).prev();
	// 	var value = jQuery(this).val();

	// 	// COLORPICKER
	// 	if ( jQuery(prev).hasClass("input-group-addon") ) {
	// 		jQuery(prev).css({
	// 			backgroundColor: value
	// 		});
	// 	} else {

	// 	}

	// 	// SOME DELAY
	// 	clearTimeout(map.timer);
	// 	map.timer = setTimeout(function() {
	// 		map.updateSettings();
	// 		if ( input.attr("name") == "color" ) {
	// 			map.updateSelection();
	// 		}
	// 	},100);
	// });

	// OBSERVE RESET
	// jQuery(".btn-settings-reset").on("click",function(e) {
	// 	// jQuery(".section-map-list input").prop("checked",false);
	// 	jQuery(".section-map-settings input").each(function() {
	// 		jQuery(this).val(jQuery(this).attr("placeholder")).trigger("change");
	// 	});
	// 	map.updateSelection();
	// 	e.preventDefault();
	// });

	// APPLY HASH
	// if ( location.hash || getUrlVars()["cc"] ) {
	// 	var areas = (getUrlVars()["cc"]?getUrlVars()["cc"]:location.hash).replace("#","").split(",");
	// 	jQuery(areas).each(function() {
	// 		// jQuery(".section-map-list input[value="+this+"]").prop("checked",true);
	// 	});
	// 	map.updateSelection();
	// }
	// map.updateSettings();

	// // COPY PASTA CLIPBOARD
	// ZeroClipboard.config({
	// 	moviePath: './static/vendor/zeroclipboard/ZeroClipboard.swf',
	// 	hoverClass: 'hover',
	// 	activeClass: 'active'
	// });
	// new ZeroClipboard(jQuery('.btn-copypasta')).on('copy',function(e) {
	// 	jQuery(e.relatedTarget).addClass("focus");
	// 	setTimeout(function() {
	// 		jQuery(e.relatedTarget).removeClass("focus");
	// 	},300);
    // });

    function getSelectedCountries() {   
        var selected = [];
        for(var i = 0; i < map.dataProvider.areas.length; i++) {
          if(map.dataProvider.areas[i].showAsSelected)
            selected.push({id:map.dataProvider.areas[i].id,name:map.dataProvider.areas[i].enTitle});
        }
        return selected;
	  }
	  
	function addCountriesChips(list) {  
			var div = $('div#country_tags');
			document.getElementById('country_tags').innerHTML = '';   
					
			for(var i = 0; i < list.length; i++) {
				div.append('<div class="chip" id='+list[i].id+'>'+list[i].name+'<span class="chipClose" onclick="return this.parentNode.remove();"><img src="assets/close.svg"></span></div>');
			}       
	}
	  $( "div#country_tags" ).bind("DOMNodeRemoved",function( e ){
		     
			// map.updateSelection();
			// map.updateSettings();
			
		}
		);

	 
	
//-------form fields
$(function(){
	var countryData = window.intlTelInputGlobals.getCountryData();
	$.each(countryData, function(i, country) {
			country.name = country.name.replace(/[^a-zA-Z0-9 ]/g, "");
	});
	var intlPhoneNumber = window.intlTelInput($("#phone-number")[0], {
			initialCountry: "auto",
			preferredCountries : ["us","gb","ca","fr","au"],
			separateDialCode: true,
			// autoPlaceholder: "aggressive",
			formatOnDisplay: true,
			geoIpLookup: function(callback) {
					$.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
							var countryCode = (resp && resp.country) ? resp.country : "US";
							$('#country').val(countryCode);
							console.log(resp);
							callback(countryCode);
					});
			},
			utilsScript : "intl-tel-input-utils.js",
	});
	
	$("#phone-number").on("countrychange", function(e, countryData) {
			// $('#country').val(countryData.iso2);
			countryData = intlPhoneNumber.getSelectedCountryData();
			$('#phone-code').val(countryData.dialCode || '1');
			// $('#lp-pom-box-594').html('+'+countryData.dialCode);
			$("#phone-number").val('');
	});
	$('#phone-number').on('input', function() {
	  var c = this.selectionStart,
		  r = /[^0-9]/gi,
		  v = $(this).val();
	  if(r.test(v)) {
		$(this).val(v.replace(r, ''));
		c--;
	  }
	  this.setSelectionRange(c, c);
	});
	
	$("#name").focusout(function(){
			if($("#name").val() != ''){
if (/\w+\s+\w+/.test($("#name").val())) {} else {
									$("#name").closest('div').removeClass("form-success");
$("#name").closest('div').addClass("input-error");
}
}
	 });
	$('.contact-form').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200);
	//Push data to Google tag manager
	var trackConversion = function (event) {
			window.google_trackConversion({
					google_conversion_id: 997380994,
					google_conversion_label: 'gWu-CIKExngQgqfL2wM',
					google_remarketing_only: false
			});
	}
	$('#contact-form').on('submit', function(e){
			// var testcookie = [];
			// campaignFirstCookie = getCookie("campaign_first");
			// campaignLatestCookie = getCookie("campaign_latest");
			// campaignFirstCookie_json = JSON.parse(campaignFirstCookie);
			// $('#last_visited').val(getCookie("last_visited"));

			// if(campaignFirstCookie && campaignFirstCookie_json["utm_source"]) {
			// 		if (campaignFirstCookie_json["utm_source"] == "Google-Adwords") {
			// 				$('#lead_source').val('Web Paid - Google Adwords');
			// 		}

			// 		$.each($.parseJSON(campaignFirstCookie), function(k, v) {
			// 				$('#'+k).val(v);
			// 		});
			// 		$.each($.parseJSON(campaignLatestCookie), function(k, v) {
			// 				$('#'+k+'_2').val(v);
			// 		});
			// }
			var contactFormData = $.queryStringToJson($(this).serialize());
			var formatedNumber = '+'+contactFormData.phone_code + contactFormData.phone_number;
			formatedNumber = formatedNumber.replace(contactFormData.phone_code, '').trim();
			contactFormData.phone_number = formatedNumber;
			const scriptURL = 'https://script.google.com/macros/s/AKfycbyI5roYpx-5Jx_YUfNIlRWwTIrvHXMK2WmOmf2WJ7sMuXbS6GFH/exec';			
			const form = document.forms['contact-form'];
			e.preventDefault()
			fetch(scriptURL, { method: 'POST', body: new FormData(form),mode: 'no-cors' , })
			.then(response => console.log('Success!', response))
			.catch(error => console.error('Error!', error.message))	
			
			$('#contact-form').trigger("reset");	
			showSnackbar();		


	});
});
function getCookie(name) {
	var re = new RegExp(name + "=([^;]+)");
	var value = re.exec(document.cookie);
	return (value != null) ? unescape(value[1]) : null;
}
var queryString = window.location.search;//.slice(1).split('&');
var queryJson = $.queryStringToJson(queryString);
// variables
 baseDomain = '.plivo.com',
//now setup cookie
document.cookie="utm_paramstest=" + "These Cookies automatically will remove after 60 days" +"; domain=" + baseDomain + "; path=/";
var testcookie = getCookie("utm_params");
if(testcookie != null){
	document.cookie="utm_params2=" + JSON.stringify(queryJson) +"; domain=" + baseDomain + "; path=/";
}
else{
	document.cookie="utm_params=" + JSON.stringify(queryJson) +"; domain=" + baseDomain + "; path=/";
}


	//--------------------------new sliderlet tooltip;
const slider = document.querySelector('[type="range"]');
const output = document.querySelector('[data-output]');
rangeSlider.create(slider, {onSlide: (val) => {
  console.log(val);
  output.textContent = val;
  calculatePrices(val);
  if(val>2000){
	$("#view_pricing").hide();
	$("#con_sal").show();
	addformDetails();
	
	  }
	  else{
		$("#view_pricing").show();
		$("#con_sal").hide();
		$("#div_contact_sales").hide();

	  }
}});

// $.getJSON("inbound.json", function(json) {
// 	console.log(json); // show the JSON file content into console
// });

var outbound_json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'json/outboundSmsRates.json',
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
	});
	// console.log(json);
    return json;
})(); 

var inbound_json =  (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'json/inboundSmsRates.json',
        'dataType': "json",
        'success': function (data) {

            json = data;
        }
	});
	// console.log(json)
    return json;
})();
        var outboundPriceList= {};
		var inboundPriceList= {};
		//funtion for suming up of prices of all the repeated entries
		function prepareJsonVariables(){
		// console.log(inbound_json);
		// console.log(outbound_json);

		var stopdublicacy = '';
		

		$.each(outbound_json, function(k, v) {
			var out_sum = 0;
			if(v["Country ISO"] != stopdublicacy){
			$.each(outbound_json, function(key, val) {
				if( v["Country ISO"] == val["Country ISO"]){
					out_sum += val["Rate in USD"];
				}
			});
			outboundPriceList[v["Country ISO"]] = out_sum;
			stopdublicacy = v["Country ISO"];
			}

		});
		console.log(outboundPriceList);

		$.each(inbound_json, function(k, v) {
			var in_sum = 0;
			if(v["Country ISO"] != stopdublicacy){
			$.each(inbound_json, function(key, val) {
				if( v["Country ISO"] == val["Country ISO"] && val["Inbound SMS Price / Msg"] != 'NA'){
					in_sum += val["Inbound SMS Price / Msg"];
				}
			});
			inboundPriceList[v["Country ISO"]] = in_sum;
			stopdublicacy = v["Country ISO"];
			}

		});
		console.log(inboundPriceList);
		}
		prepareJsonVariables();

	var send_receiveCheckbox = [];
	var selected_countries  = [];
	
	//function to check for the input and outbound checkboxes
	function checkforInAndOutboundCheckbox() {
		$("div.class_checkbox").each(function() {
			if($(this).hasClass("checked") == true){
				if(send_receiveCheckbox.indexOf(this.previousSibling.id) == -1){
				 send_receiveCheckbox.push(this.previousSibling.id);

				 if(this.previousSibling.id == 'outbound'){
					$('#col-one').show();
					
				}
				if(this.previousSibling.id == 'inbound'){
					$('#col-two').show();
					$("#send_price").css("border-right","1px solid lightgrey");
					
				}}
				}
			else{
				if(send_receiveCheckbox.length != 0)
				{  var comp = this.previousSibling.id;
					send_receiveCheckbox = send_receiveCheckbox.filter(function(a){return a !== comp });

					if(this.previousSibling.id == 'outbound'){
						$('#col-one').hide();
						
					}
					if(this.previousSibling.id == 'inbound'){
						$('#col-two').hide();
						$("#send_price").css('border','');
						
					}
							
				}
			}
			
		});
		console.log(send_receiveCheckbox);
	}
	function checkSelectedCountries(){

		var country_tags = document.getElementById("country_tags").hasChildNodes();
		if(country_tags){
			selected_countries = [];
			$( "div#country_tags div.chip" ).each(function( i ) {
				if(selected_countries.indexOf(this.id) == -1){
					selected_countries.push(this.id)
				}				
			  });
			  console.log(selected_countries);
		}

	}
	var inboundRecevMsgPrices;
	var outboundSendMsgPrices;
	

	function calculatePrices(quantity = 1){
		if(send_receiveCheckbox.length == 0)
			return 0;
		if(selected_countries.length == 0)
			return 0;
		if(quantity == 1){
			var outbound_sum = 0;
			for(i in selected_countries ){
				var country = selected_countries[i];
				outbound_sum += (outboundPriceList[country] == undefined ? 0 : outboundPriceList[country]);
			}
			outboundSendMsgPrices = outbound_sum/selected_countries.length;

			var inbound_sum = 0;
			for(i in selected_countries ){
				var country = selected_countries[i];				
				inbound_sum += (inboundPriceList[country] == undefined ? 0 : inboundPriceList[country]);
			}
			inboundRecevMsgPrices = inbound_sum/selected_countries.length;
			
		if(send_receiveCheckbox.length == 2){
			var total_price = outboundSendMsgPrices+inboundRecevMsgPrices;
			outboundSendMsgPrices = 0.70*total_price;
			inboundRecevMsgPrices = 0.30*total_price;
		}
		}
		else
		{
			var equal_distribute = quantity/selected_countries.length;
			var outbound_sum = 0;
			for(i in selected_countries ){
				var country = selected_countries[i];	
				outbound_sum += (outboundPriceList[country] == undefined ? 0 : outboundPriceList[country])*equal_distribute;
			}
			outboundSendMsgPrices = outbound_sum/selected_countries.length;

			var inbound_sum = 0;
			for(i in selected_countries ){
				var country = selected_countries[i];	
				inbound_sum += (inboundPriceList[country] == undefined ? 0 : inboundPriceList[country])*equal_distribute;
			}
			inboundRecevMsgPrices = inbound_sum/selected_countries.length;
			
		if(send_receiveCheckbox.length == 2){
			var total_price = outboundSendMsgPrices+inboundRecevMsgPrices;
			outboundSendMsgPrices = 0.70*total_price;
			inboundRecevMsgPrices = 0.30*total_price;
		}

		}

	
		$( "#reciev_at" ).text('$'+inboundRecevMsgPrices.toFixed(4));
		$( "#send_at" ).text('$'+outboundSendMsgPrices.toFixed(4));

	}
	$("#con_sal").click(function(){
		$("#div_contact_sales").show();
	});

	

	$("#get_estimate").click(function(){
			$("#div_estimate_prices").show();
			$("#div_contact_viewPrice").show();
			checkforInAndOutboundCheckbox();
			checkSelectedCountries();
			calculatePrices();
	});
	$("div.class_checkbox").click(function(){
			checkforInAndOutboundCheckbox();		
	});
	$("#div_estimate_prices").hide();
	$("#div_contact_viewPrice").hide();
	$("#div_contact_sales").hide();
	$("#con_sal").hide();
	$("input[type=range]").val(1);
	
	function showSnackbar(param) {
		var snackbarHTML = document.querySelectorAll(".snackbar"),
			element;
		for (element of snackbarHTML) {
			// Check if param is an Event or string
			if (param instanceof Event && param.currentTarget.hasAttribute("data-text")) {
				element.innerHTML = param.currentTarget.getAttribute("data-text");
			} else if (typeof param == "string" && !Utils.is_empty(param)) {
				element.innerHTML = param;
			}
	
			element.classList.add("snackbar-show");
	
			setTimeout(function() {
				element.classList.remove("snackbar-show");
			}, 3000);
		}
	}

	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://api.fullcontact.com/v3/person.enrich",
		"method": "POST",
		"headers": {
		  "authorization": "Bearer LCE4PK8Z1psssW4QiIFAdCqLdOeR3fgn",
		  "content-type": "application/json",
		  "cache-control": "no-cache",
		  "postman-token": "de0a9b6d-c413-00bd-6143-3b3b811ce795"
		},
		"processData": false,
		"data": "{ \"email\": \"bill.gates@microsoft.com\"}\n"
	  }

	 function addformDetails(){
		$.ajax(settings).done(function (response) {
			var name = response.fullName;
			var email = "bill.gates@microsoft.com";
			var organisation = response.organization;
			$('#name').val(name);
			$('#company-name').val(organisation);
			$('#company_email').val(email);
			
		});

	  }


	 

	
});

$.queryStringToJson = function (querystring, name) {
if (querystring) {
	return (/^[?#]/.test(querystring) ? querystring.slice(1) : querystring)
		.split('&')
		.reduce((params, param) => {
			let [key, value] = param.split('=');
			params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
			return params;
		}, {});
}
}
window.onload = function () {
		try {
				function getCookie(name) {
						var re = new RegExp(name + "=([^;]+)");
						var value = re.exec(document.cookie);
						return (value != null) ? unescape(value[1]) : null;
				}
				//console.log(getCookie("utm_params"));
				//setup object with utm params to send to form
				var result = {};
				result = getCookie("utm_params");
				if (result == null || result == undefined || result == '{}') {
						// if organic
						result = {};
				} else {
						// if SEM
						result = JSON.parse(result);
				}
				result.original_referrer = 'https://www.plivo.com/contact/sales/';
				
		} catch (e) {
				console.log('error in fething utm_params');
		}
}
