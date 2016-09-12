// Code goes here

var thisProduct = {}; // Your Scope or Custom object that you want to populate

var obj = {
  "name": "khan",
  "price":29.99,
  "jobs": [{"company": "Telco"}, {"company": "Skynet"}],
  "banks": [{"bank1": "chase"}],
  "Colors": []
};


AutoMap_JsonToObject(obj, thisProduct);
console.log(thisProduct) // its mapped with JSON now




function AutoMap_JsonToObject(jsonObj, product) {

    for (prop in jsonObj) {
      if (Object.prototype.toString.call(jsonObj[prop]) === '[object Array]') {
        product[prop] = [];
      }
    };
  

    for (prop in jsonObj) {
      if (Object.prototype.toString.call(jsonObj[prop]) === '[object Array]') {
        for (var j = 0; j < jsonObj[prop].length; j++) {
          product[prop].push(jsonObj[prop][j])
        }
      } else {
        product[prop] = jsonObj[prop]
      }
    };
  

};