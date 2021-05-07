var O_M = document.getElementById("convertO_M");
var M_O = document.getElementById("convertM_O");
var L_M = document.getElementById("convertL_M");
var M_L = document.getElementById("convertM_L");
var I_C = document.getElementById("convertI_C");
var C_I = document.getElementById("convertC_I");
var P_K = document.getElementById("convertP_K");
var K_P = document.getElementById("convertK_P");
var msg = document.getElementById("msg");
var clear = document.getElementById("clear");
var userInput = document.getElementById("userInput");

O_M.onclick = function () {
    var milliliter = 29.5735;
    var result = userInput.value * milliliter;
    msg.innerHTML = userInput.value + " ounces is " + result.toFixed(2) + " milliliters!";
    msg.style.color = "#1A936F";
};
M_O.onclick = function () {
    var ounce = 0.033814;
    var result = userInput.value * ounce;
    msg.innerHTML = userInput.value + " milliliters is " + result.toFixed(2) + " ounces!";
    msg.style.color = "#1A936F";
};
L_M.onclick = function () {
    var milliliter = 1000;
    var result = userInput.value * milliliter;
    msg.innerHTML = userInput.value + " liters is " + result.toFixed(2) + " milliliters!";
    msg.style.color = "#1A936F";
};
M_L.onclick = function () {
    var liter = 0.001;
    var result = userInput.value*liter;
    msg.innerHTML = userInput.value + " milliliters is "+result.toFixed(2)+" liters!";
    msg.style.color = "#1A936F";
};
I_C.onclick = function (){
    var centimeter = 2.54;
    var result = userInput.value*centimeter;
    msg.innerHTML = userInput.value+" inches is "+result.toFixed(2)+" centimeters!";
    msg.style.color = "#1A936F";
};
C_I.onclick = function(){
    var inche = 0.393701;
    var result = userInput.value*inche;
    msg.innerHTML = userInput.value+" centimeters is "+result.toFixed(2)+" inches!";
    msg.style.color = "#1A936F";
};
P_K.onclick = function(){
    var kilogram = 0.453592;
    var result = userInput.value*kilogram;
    msg.innerHTML = userInput.value+" pounds is "+result.toFixed(2)+" kilograms!";
    msg.style.color = "#1A936F";
};
K_P.onclick = function(){
    var pound = 2.20462;
    var result = userInput.value*pound;
    msg.innerHTML = userInput.value+" kilograms is "+result.toFixed(2)+" pounds!";
};
clear.onclick = function () {
    userInput.value = "";
    msg.innerHTML = "";
    userInput.focus();
};