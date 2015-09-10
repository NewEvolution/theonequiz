var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

// Basics #######################################

// 7
var domTarget = document.getElementById("vanilla_output");
domTarget.innerHTML = "This content generated with vanilla JavaScript";

// 8
$("#jquery_output").html("This content generated with jQuery");

// Functions and operators ######################

// 1
function modulus(arg1, arg2) {
  var remainder = arg1 % arg2;
  return remainder;
}

// 2
function doMath(integer1, integer2, mathFunction) {
  return mathFunction(integer1, integer2);
}

function add(integer1, integer2) {
  return integer1 + integer2;
}

function subtract(integer1, integer2) {
  return integer1 - integer2;
}

// Arrays #######################################

// 1
function sortedPlanets() {
  var sortedArray = Planets.sort();
  return sortedArray;
}

// 2
function reversedPlanets() {
  var reversedArray = [];
  for (var i = 0; i < Planets.length; i++) {
    var planetLetters = Planets[i].split("");
    planetLetters.reverse();
    var backwardsPlanet = planetLetters.join("");
    reversedArray[reversedArray.length] = backwardsPlanet;
  }
  return reversedArray;
}

// 3
function longPlanets() {
  var longArray = [];
  for (var i = 0; i < Planets.length; i++) {
    if (Planets[i].charAt(6) !== "") {
      longArray.push(Planets[i]);
    }
  }
  return longArray;
}

// XHR ##########################################

// 1
function getAnimals() {
  $.ajax({
    url: "../data/animals.json"
  }).done(function(data) {
    console.log("animals", data.animals);
  });
}