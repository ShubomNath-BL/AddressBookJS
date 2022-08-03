const prompt = require("prompt-sync")();
console.log("Welcome to address book");
var firstName = RegExp("^[A-Z]{1}[a-z]{2,}$");
var firstNameTest = firstName.test("Shubom");
var lastName = RegExp("^[A-Z]{1}[a-z]{2,}$");
var lastNameTest = lastName.test("Nath");
var address = RegExp("^[a-z]{4,}$");
var addressTest = address.test("solung");
var city = RegExp("^[a-z]{4,}$");
var cityTest = city.test("pasighat");
var state = RegExp("^[a-z]{4,}$");
var stateTest = state.test("arunachal");
var zip = RegExp("^[0-9]{6}$");
var zipTest = zip.test("791102");
var phoneNumber = RegExp("^[0-9]{10}$");
var phoneNumberTest = phoneNumber.test("8288894252");
var email = RegExp("^[a-z0-9]{2,}(['.''\\-''+']?)([a-z0-9]*)+@[a-z]{2,}['.'][a-z]{2,}$");
var emailTest = email.test("shubom.nath88@gmail.com");
if(firstNameTest==true){
    console.log("First name is valid");
}else{
    console.log("First name is not valid");
}
if(lastNameTest==true){
    console.log("Last name is valid");
}else{
    console.log("Last name is not valid");
}
if(addressTest==true){
    console.log("Address is valid");
}else{
    console.log("Address is not valid");
}
if(cityTest==true){
    console.log("City is valid");
}else{
    console.log("City is not valid")
}
if(stateTest==true){
    console.log("State is valid");
}else{
    console.log("State is not valid")
}
if(zipTest==true){
    console.log("Zip code is valid");
}else{
    console.log("Zip code is not valid")
}
if(phoneNumberTest==true){
    console.log("Phone number is valid");
}else{
    console.log("Phone number is not valid")
}
if(emailTest==true){
    console.log("Email id is valid");
}else{
    console.log("Email id is Invalid");
}
