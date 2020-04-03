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
    var contains = false;
    //alert(locArr);
    var lo = locArr.toString();
    var sp = lo.split('');
    //alert(locArr.toString());
    for (i = 0; i < sp.length; i++) {
      //alert(locArr);
      if (sp[i] === '1') {
        contains = true;
      }
      if (contains === true) {
        newArray.push("Beep!")
        //alert("hi");

      } else {
        newArray.push(locArr);
      }
    };



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
    alert(userArray);

    alert(changeArray(userArray));


  });



});