var createArray = function (number, rev) {
  var numArray = [];

  for (let i = 0; i <= number; i++) {
    numArray.push(i);
  }

  var intermediateArray = numArray.slice();

  if (rev === true) {
    intermediateArray.reverse();
    return intermediateArray;
  } else {
    return numArray;
  }



}





$(document).ready(function () {
  $("#userForm").submit(function (event) {
    event.preventDefault();
    var userNumber = parseInt($("#numberForm").val());
    var isReversed = document.getElementById("revCheckbox").checked;
    alert(createArray(userNumber, isReversed));


  });



});