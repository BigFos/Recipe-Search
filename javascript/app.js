$(document).ready(function() {

    $('.dropdown-button').dropdown();

    // Initialize Firebase
var config = {
  apiKey: "AIzaSyDPfYzQy3MaKGqQbEUWplRbldAMNMTdIOo",
  authDomain: "recipe-search-ccf28.firebaseapp.com",
  databaseURL: "https://recipe-search-ccf28.firebaseio.com",
  projectId: "recipe-search-ccf28",
  storageBucket: "recipe-search-ccf28.appspot.com",
  messagingSenderId: "5834477742"
};
firebase.initializeApp(config);


var database=firebase.database();

    var ingredientArray = [];

 var querySearch = "";


    $("#ingredientAdd").on("click", function() {
        var input = $("#ingredientInput").val().trim();
        $("#ingredientList").append('<li class="chip green">' + input + '<i class="close material-icons">close</i></li>');
        ingredientArray.push(input);
        console.log($("#ingredientList").children());
        console.log(ingredientArray);
        $(".close").on("click",function(item){
        	var slice= ingredientArray.indexOf(item);
        	$(ingredientArray).splice(slice,);
        	console.log(ingredientArray);
        });


    });

    $("#recipeButton").on("click", function() {
    	$("#recipeCards").empty();


    	            for (i = 0; i < ingredientArray.length; i++) {

       querySearch += ingredientArray[i]+ ",+";
}
        var queryURLR = "https://api.edamam.com/search?q=" + querySearch  + "&app_id=38c12157&app_key=4a58a48eab717dc057b5c88ba03bb32f";

        $.ajax({
            url: queryURLR,
            Method: "GET"


        }).done(function(response) {
            for (i = 0; i < response.hits.length; i++) {
                $("#recipeCards").append('<div class="card">' + '<div class= "card-image">' + '<img src="' + response.hits[i].recipe.image + '"></div>' + '<div class="card-content">' + '<p>' + response.hits[i].recipe.label + '</p></div>' + '<div class=card-action>' + '<ul>'+ '<li>'+response.hits[i].recipe.ingredientLines +'</li>'+ '</ul>'+'<a id="list" href="'+response.hits[i].recipe.url+'">' + "Instructions" + '</a>' + '<input id="amazon" >' + "Buy Other items on Amazon" + '</input></div></div>');
                $("#hide").hide();
            }
             database.ref().push({
                	Ingredient: ingredientArray
                });
        });
        console.log(queryURLR);

    });
    $("#list").on("click",function(){
    	$("#hide").show();
    });

});





