$(document).ready(function() {

    $('.dropdown-button').dropdown();

   var ingredientArray=[];




    $("#ingredientAdd").on("click", function() {
        var input = $("#ingredientInput").val().trim();
        $("#ingredientList").append('<li class="chip green">' + input + '<i class="close material-icons">close</i></li>');
        ingredientArray.push(input);
        console.log($("#ingredientList").children());
        console.log(ingredientArray);
    });

$("#recipeButton").on("click", function() {
// var querySearch =
var queryURLR = "https://api.edamam.com/search?q=" + "chicken" + "&app_id=38c12157&app_key=4a58a48eab717dc057b5c88ba03bb32f";

$.ajax({
    url: queryURLR,
    Method: "GET"


}).done(function(response) {
    for (i = 0; i < response.hits.length; i++) {
$("#recipeCards").append('<div class="card">'+ '<div class= "card-image">'+'<img src="'+response.hits[i].recipe.image + '"></div>'+'<div class="card-content">'+'<p>'+ response.hits[i].recipe.label + '</p></div>'+ '<div class=card-action>' + '<a href="#">'+ "More info" + '</a>' + '<a href="#">' + "Buy Other items on Amazon" + '</a></div></div>');



    }
});
});

});


// <div id="recipeCards" class="card">
//                     <div class="card-image">
//                         <img src="https://static-communitytable.parade.com/wp-content/uploads/2015/08/Grilled-Chicken-1240.jpg">
//                     </div>
//                     <div class="card-content">
//                         <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
//                     </div>
//                     <div class="card-action">
//                         <a href="#">More Info</a>
//                         <a href="#">Buy remaining items on amazon</a>
//                     </div>
//                 </div>


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
