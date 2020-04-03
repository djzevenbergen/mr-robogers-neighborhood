var createArray = function (number) {
  var numArray = [];
  var intermediateArray = numArray.slice();

  for (let i = 0; i <= number; i++) {
    numArray.push(i);
  }

  return numArray;

}





$(document).ready(function () {
  $("#userForm").submit(function (event) {
    event.preventDefault();
    var userNumber = parseInt($("#numberForm").val());

    alert(createArray(userNumber));


  });



});