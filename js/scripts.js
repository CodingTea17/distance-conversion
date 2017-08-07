var kmToMi = function(distance){
  var answer_text = "The conversion from kilometers to miles is ";
  var answer = (((parseInt(distance)*1000*100))/2.54/12/5280).toFixed(2);
  alert(answer_text + answer);
};

var km = prompt("Enter the number of kilometers: ");

kmToMi(km);
