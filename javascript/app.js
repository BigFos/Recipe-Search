$(document).ready(function(){

    $('.dropdown-button').dropdown();
    
  });


// Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyDPfYzQy3MaKGqQbEUWplRbldAMNMTdIOo",
  //   authDomain: "recipe-search-ccf28.firebaseapp.com",
  //   databaseURL: "https://recipe-search-ccf28.firebaseio.com",
  //   projectId: "recipe-search-ccf28",
  //   storageBucket: "recipe-search-ccf28.appspot.com",
  //   messagingSenderId: "5834477742"
  // };
  // firebase.initializeApp(config);

var userSearchR = $("#").val().trim();
var userSearchA = $("#").val().trim();
var queryURLR = "https://api.edamam.com/search?q=" + userSearchR + "&app_id=38c12157&app_key=4a58a48eab717dc057b5c88ba03bb32f";
var queryURLA = ""