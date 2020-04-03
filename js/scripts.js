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

var changeArray = function (array, name) {
  var localArrays = array.slice();
  var newArray = [];

  localArrays.forEach(function (locArr) {
    var contains1 = false;
    var contains2 = false;
    var contains3 = false;
    var div3 = false;
    var lo = locArr.toString();
    var sp = lo.split('');
    var greeting = "Won't you be my neighbor, " + name + "?";

    for (i = 0; i < sp.length; i++) {

      if (locArr % 3 === 0) {
        if (locArr > 0) {
          div3 = true;
        }
      } else if (sp[i] === '3') {
        contains3 = true;
      } else if (sp[i] === '2') {
        contains2 = true;
      } else if (sp[i] === '1') {
        contains1 = true;
      }
    }

    if (div3 === true) {
      newArray.push(greeting);
    } else if (contains3 === true) {
      newArray.push("Won't you be my neighbor?")
    } else if (contains2 === true) {
      newArray.push("Boop!")
    } else if (contains1 === true) {
      newArray.push("Beep!")

    } else {
      newArray.push(locArr);
    }
  });
  return newArray;
};

var printLine = function (final) {
  $("#output").html("");
  for (let i = 0; i < final.length; i++) {
    $("#output").append("<p>" + final[i] + "</p>");

  }
}




//User interface


$(document).ready(function () {
  $("#userForm").submit(function (event) {
    event.preventDefault();
    var userNumber = parseInt($("#numberForm").val());
    var isReversed = document.getElementById("revCheckbox").checked;
    var userName = $("#textForm").val();

    var userArray = createArray(userNumber, isReversed);
    var finalArray = changeArray(userArray, userName);


    printLine(finalArray);
    //$("#output").text(finalArray);
    $("#resultBox").fadeIn();
    $("#again").slideDown();
    $("#again").click(function () {
      window.location.reload();

    });



  });



});