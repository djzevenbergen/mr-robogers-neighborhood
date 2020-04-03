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

var changeArray = function (array) {
  var localArrays = array.slice();
  var newArray = [];

  localArrays.forEach(function (locArr) {
    var contains1 = false;
    var contains2 = false;
    var contains3 = false;
    var div3 = false;
    var lo = locArr.toString();
    var sp = lo.split('');

    for (i = 0; i < sp.length; i++) {

      if (sp[i] === '2') {
        contains2 = true;
      } else if (sp[i] === '1') {
        contains1 = true;
      }
    }


    if (contains2 === true) {
      newArray.push("Boop!")
    } else if (contains1 === true) {
      newArray.push("Beep!")

    } else {
      newArray.push(locArr);
    }
  });

  return newArray;

};






$(document).ready(function () {
  $("#userForm").submit(function (event) {
    event.preventDefault();
    var userNumber = parseInt($("#numberForm").val());
    var isReversed = document.getElementById("revCheckbox").checked;
    //alert(createArray(userNumber, isReversed));

    var userArray = createArray(userNumber, isReversed);

    alert(changeArray(userArray));


  });



});