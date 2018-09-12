// JavaScript Document

		// Declaration of Initial Variables

		var map;
		var northeast = 0;			
		var southeast = 0;
		var northwest = 0;
		var southwest = 0;	
		var markers = [];
		var lat;
		var lng;
		
		// Display initial quadrant variables in legend table
		
		document.getElementById("northeast").innerHTML = northeast;
		document.getElementById("southeast").innerHTML = southeast;
		document.getElementById("northwest").innerHTML = northwest;
		document.getElementById("southwest").innerHTML = southwest;		
		
		// Initial Map
		
		function initMap() {  
		var randomMarker = {lat: lat, lng: lng};
		
		 map = new google.maps.Map(document.getElementById('map'), {
			zoom: 2,
			center: {lat: 0, lng: 0},
			mapTypeId: 'terrain',
			disableDefaultUI: true,
			zoomControl: false,
			scrollwheel: false,
			draggable: false
			}); 		 	 			 	
		}
		
		// Adds a marker to the map and push to the array.
		
		function addMarker(location) {
			var location;			
			var url;
			var category;
			
			// For Northwest Quadrant
			if (location.lat >=0 && location.lat <= 90 && location.lng >= -180 && location.lng <= 0) {
            url="https://maps.google.com/mapfiles/ms/icons/blue.png";            
			northwest++
			document.getElementById("northwest").innerHTML = northwest;	
			category="northwest";

			// For Southwest Quadrant
			} else if ( location.lat <=0 && location.lat >= -90 && location.lng >= -180 && location.lng <= 0 ) {
            url="https://maps.google.com/mapfiles/ms/icons/yellow.png";
            southwest++
			document.getElementById("southwest").innerHTML = southwest;		
			category="southwest";

			// For Northeast Quadrant
	        } else if ( location.lat >=0 && location.lat <= 90 && location.lng >= 0 && location.lng <= 180 ) {
            url="https://maps.google.com/mapfiles/ms/icons/green.png";
            northeast++
			document.getElementById("northeast").innerHTML = northeast;			
			category="northeast";

			// For Southeast Quadrant
			} else if ( location.lat <=0 && location.lat >= -90 && location.lng >= 0 && location.lng <= 180 ) {
			  url="https://maps.google.com/mapfiles/ms/icons/red.png";
			  southeast++
			  document.getElementById("southeast").innerHTML = southeast;		
			  category="southeast";
			}
		  
		  var marker = new google.maps.Marker({											  
			position: location,			
			map: map,			
			icon: {
        		url: url,
				scaledSize: new google.maps.Size(22, 22)
    		},		
			category: category  		
		  });		
		  markers.push(marker);		  
		}	  				
	
		
		// Running random marker function 200 times in window.onload to ensure no google errors
		 
		 window.onload = function() {
 			 for (var i = 0; i < 2000; i++) {
				addMarker({lat: (Math.random() * (70 - -70) + -70).toFixed(7) * 1, lng: (Math.random() * (170 - -170) + -170).toFixed(7) * 1});				
			}	
		}
		
		// Sets the map on all markers in the array.
		
		function setMapOnAll(map) {
		  for (var i = 0; i < markers.length; i++) {
			markers[i].setMap(map);				
		  }		  
		}
		
		// Checkbox function for Northeast quadrant
		
		$('#neVisible').change(function(category) {			
			if (this.checked) {
				 for (i = 0; i < markers.length; i++) {
					marker = markers[i];					
					if (marker.category == "northeast" || marker.category == "southeast" || marker.category == "northwest" || marker.category == "southwest") {
					  marker.setVisible(true);
					}					
					else {
					  marker.setVisible(false);
					}
				  }							 				 
			} else {				
				  for (i = 0; i < markers.length; i++) {
					marker = markers[i];					
					if (marker.category == "northeast") {
					  marker.setVisible(false);
					}					
					else {
					  marker.setVisible(true);
					}
				  }								
			}
		});
		
		// Checkbox function for Southeast quadrant
		
		$('#seVisible').change(function(category) {			 
			if (this.checked) {
				 for (i = 0; i < markers.length; i++) {
					marker = markers[i];					
					if (marker.category == "northeast" || marker.category == "southeast" || marker.category == "northwest" || marker.category == "southwest") {
					  marker.setVisible(true);
					}					
					else {
					  marker.setVisible(false);
					}
				  }							 				 
			} else {				
				  for (i = 0; i < markers.length; i++) {
					marker = markers[i];					
					if (marker.category == "southeast") {
					  marker.setVisible(false);					  
					}					
					else {
					  marker.setVisible(true);
					}
				  }								
			}
		});
		
		// Checkbox function for Northwest quadrant
		
		$('#nwVisible').change(function(category) {			
			if (this.checked) {
				 for (i = 0; i < markers.length; i++) {
					marker = markers[i];					
					if (marker.category == "northeast" || marker.category == "southeast" || marker.category == "northwest" || marker.category == "southwest") {
					  marker.setVisible(true);
					}					
					else {
					  marker.setVisible(false);
					}
				  }							 				 
			} else {				
				  for (i = 0; i < markers.length; i++) {
					marker = markers[i];					
					if (marker.category == "northwest") {
					  marker.setVisible(false);					  
					}					
					else {
					  marker.setVisible(true);
					}
				  }								
			}
		});
		
		// Checkbox function for Northwest quadrant
		
		$('#swVisible').change(function(category) {			  
			if (this.checked) {
				 for (i = 0; i < markers.length; i++) {
					marker = markers[i];					
					if (marker.category == "northeast" || marker.category == "southeast" || marker.category == "northwest" || marker.category == "southwest") {
					  marker.setVisible(true);
					}					
					else {
					  marker.setVisible(false);
					}
				  }							 				 
			} else {				
				  for (i = 0; i < markers.length; i++) {
					marker = markers[i];					
					if (marker.category == "southwest") {
					  marker.setVisible(false);					  
					}					
					else {
					  marker.setVisible(true);
					}
				  }								
			}
		});
		
		// Page refresh function		
		
		function refreshPage() {
			window.location.reload();
		}