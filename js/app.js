// import React from 'react';
// import { Route } from 'react-router-dom';
// import locationList from './data/locations';

// var locations = locationList.locations

  var map;
  // Create a new blank array for all the listing markers.
  var markers = [];
  function initMap() {
    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7413549, lng: -73.9980244},
      zoom: 13
    });
    // These are the restaurant listings that will be shown to the user.
    // Normally we'd have these in a database instead.
    var locations = [
        {
            location_name: 'Om Indian',
            location: {lat: 40.7757472, lng: -73.9556981},
            description: 'Indian Food',
            specialtiesDeals: "Amazing Lamb Vindaloo make sure to ask for it spicy.  You'll cry from the heat but love the flavor.  Their takeaway deal of $15 for an entree, apetizer, basmatti rice, and naan is enough for two people." ,
        },
        {
            location_name: 'Flex Muscles',
            location: {lat: 40.7763147, lng: -73.9586954},
            description: 'Seafood',
            specialtiesDeals: "So many great flavors of pots of muscles in the most creative and delicous broths. Save room for the doughnuts for desert, they are spectacular with the vanilla dipping sauce they come with." ,
        },
        {
            location_name: 'B Side Pizza & Wine Bar',
            location: {lat: 40.7638562, lng: -73.9903763},
            description: 'Pizza',
            specialtiesDeals: "Great brick oven pizza. But, what really sets them apart from all the other pizza places is their creative toppings such as Carbonara pizza" ,
        },
        {
            location_name: 'Agora Turkish',
            location: {lat: 40.774956, lng: -73.9563867},
            description: 'Mediterranian',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: '2 Bros',
            location: {lat: 40.7567791, lng: -73.9824086},
            description: 'Pizza',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Taqueria Diana',
            location: {lat: 40.728438, lng: -73.9902087},
            description: 'Mexican',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Cafe Ollin',
            location: {lat: 40.7911861, lng: -73.9415158},
            description: 'Mexican',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Coarse NY',
            location: {lat: 40.7391548, lng: -74.005815},
            description: 'Farm to Table',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Zest Sushi',
            location: {lat: 40.7179336, lng: -73.9920932},
            description: 'Sushi',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'JoJu',
            location: {lat: 40.740765, lng:-73.879255},
            description: 'Vietnameese',
            specialtiesDeals: "Get their bahn mi fries." ,
            address: '83-25 Broadway, Elmhurst, NY 11373'
        },
        {
            location_name: 'Yum Yum Too',
            location: {lat: 40.7609944, lng: -73.9926539},
            description: 'Thai',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Gaia Italian Cafè',
            location: {lat: 40.7216961, lng: -73.9875148},
            description: 'Italian',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: "Katz's Delicatessen",
            location: {lat: 40.722237, lng: -73.9896177},
            description: 'Jewish Delicatessen',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: "Vanessa's Dumpling House",
            location: {lat: 40.7183673, lng: -73.993907},
            description: 'Chineese',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Black Tap',
            location: {lat: 40.7238326, lng: -74.0064651},
            description: 'Milk Shakes',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Dominique Ansel Kitchen',
            location: {lat: 40.7348068, lng: -74.0040826},
            description: 'Pastries and Soft Serve',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Sushi Nakazawa',
            location: {lat: 40.7318055, lng: -74.0066793},
            description: 'Sushi',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Kashkaval Garden',
            location: {lat: 40.7667648, lng: -73.9883826},
            description: 'Mediterranian',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Peter Luger Steak House',
            location: {lat: 40.709823, lng: -73.9646557},
            description: 'Steak House',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Taqueria Tlaxcalli',
            location: {lat: 40.836269, lng: -73.8571387},
            description: 'Mexican',
            specialtiesDeals: "Get their meat sampler." ,
        },
        {
            location_name: 'Pick a Bagel',
            location: {lat: 40.771934, lng: -73.9586679},
            description: 'Bagels',
            specialtiesDeals: "Get their meat sampler." ,
        }
    ];

    var largeInfowindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();
    //get info from Foursquare api
    // var clientID ='SMMMQFPVXOQN05KSHJ0HNKXJKPVXVJQYL3AMCQ32U1JYCVYG';
    // var clientSecret ='QWHLGFNXDLNMVFGXNJ5PYUDYNEQYTPOUBZ4K1FBCH2PUICFP';

    var clientID = '5WBUCX0GYJPVUE2C5HUJFXIACLBKN3GOU2UP3ECYO2INBJCU';
    var clientSecret = '4LQSACSID2FNDFD0Q2HMLE1XXZZORO2AAXLPD5EWXIRMNDD1';


    var today = new Date();
    var todaydate = today.getDate();
    var todaydate = "" + todaydate;
    if (todaydate.length < 2) {
      todaydate = "0" + todaydate;
    }
    var date = today.getFullYear()+""+(today.getMonth()+1)+todaydate;

    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations.length; i++) {
      // Get the position from the location array.

      var position = locations[i].location;
      var title = locations[i].location_name;
      var description = locations[i].description;

      const specialtiesDeals = locations[i].specialtiesDeals;

      var address = locations[i].address;


       var lat = position.lat;
       var lng = position.lng;


      var url =  'https://api.foursquare.com/v2/venues/search?ll='+lat+','+lng+'&client_id='+clientID+'&client_secret='+clientSecret+'&v='+date+'&query='+title
      var results1 = null;
      // var venue = null;
      //var phone = null;

      $.getJSON(url).done(function(data) {
          var venue = data.response.venues[0]

          title = venue.name;
          position.lat = venue.location.lat;
          position.lng = venue.location.lng;
          description = venue.categories["0"].name
          address = venue.location.formattedAddress;



          //alert(position.lat + ' ' + position.lng)
          // Create a marker per location, and put into markers array.
          var marker = new google.maps.Marker({
            map: map,
            position: position,
            title: title,
            specialtiesDeals: specialtiesDeals,
            animation: google.maps.Animation.DROP,
            id: i,
            url: url,
            description: description,
            address: address,

          });
          //alert(marker)
          addULofRestaurant(marker)
          // Push the marker to our array of markers.
          markers.push(marker);


          // Create an onclick event to open an infowindow at each marker.
          marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
          });
        //   bounds.extend(markers[i].position);
        // });
        // // Extend the boundaries of the map for each marker
        // map.fitBounds(bounds);
      });



    }

    document.getElementById('show-restaurants').addEventListener('click', showRestaurants);
    document.getElementById('hide-restaurants').addEventListener('click', hideRestaurants);
    document.getElementById('searchButton').addEventListener('click', searchRestaurants);


    // document.getElementById('show-restaurants').addEventListener('click', showRestaurants);
    // document.getElementById('hide-restaurants').addEventListener('click', hideRestaurants);
  }
  // This function populates the infowindow when the marker is clicked. We'll only allow
  // one infowindow which will open at the marker that is clicked, and populate based
  // on that markers position.
  function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
      infowindow.marker = marker;
      infowindow.setContent('<div><h1>'+marker.title+'</h1>'
        + '<p> Type: '+marker.description +'</p>'+ '<p> Specialties/Deals: '+marker.specialtiesDeals
        // +'</p>'+ '<p> Foursquare number of checkins: '+marker.checkinsCount
        // +'</p>'+ '<p> Foursquare number of users currently there: '+marker.usersCount
        // +'</p>'+ '<p> Foursquare number of Tips: '+marker.tipcount
        +'</p>'+ '<p> Address: '+marker.address
        // +'</p>'+ '<p> Phone Number: '+marker.phone
        // +'</p>'+ '<p> Website: '+marker.url
        +'</p>' +'</div>');
      infowindow.open(map, marker);
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick',function(){
        infowindow.setMarker = null;
      });
    }
  }
  // This function will loop through the markers array and display them all.
  function showRestaurants() {
    var bounds = new google.maps.LatLngBounds();
    //Extend the boundaries of the map for each marker and display the marker
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
      bounds.extend(markers[i].position);
    }
    map.fitbounds(bounds);


  }
  // This function will loop through the listings and hide them all.
  function hideRestaurants() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
  }
function searchRestaurants(){

  var searchRestaurant = document.getElementById("searchInput").value
  if (searchRestaurant === '') {
    window.alert('You must enter a city or a country');
  }
  else{

    for (var i = 0; i < markers.length; i++) {
      var starter = markers[i].title + markers[i].description + markers[i].address +  markers[i].specialtiesDeals

      var foundOrNot= starter.search(new RegExp(searchRestaurant, "i"));
      // alert(i + "   " + starter + "    " + result)

      if (foundOrNot<0){
        markers[i].setMap(null);
      }
      else{

        markers[i].setMap(map);
        markers[i].setAnimation(google.maps.Animation.BOUNCE);
        stopAnimations(markers[i]);




        // bounds.extend(markers[i].position);
        // map.fitbounds(bounds);
      }
    }
  }
}

function addULofRestaurant(currentMarker) {

    var btn = document.createElement("ul");
    btn.innerHTML  = currentMarker.title ;
    btn.setAttribute("class", "restaurantListUL");
    btn.setAttribute("onClick", 'searchRestaurantsSpecific("' +currentMarker.title+'")');
    document.getElementById("listOfRestaurantsUL").appendChild(btn);
}

function searchRestaurantsSpecific(RestaurantUL){
  document.getElementById("searchInput").value = RestaurantUL;
  searchRestaurants()
}

function stopAnimations(BouncingMarker) {
    setTimeout(function(){ setTimeout(function() {
        BouncingMarker.setAnimation(null);
    }, 3000);
});
}
