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