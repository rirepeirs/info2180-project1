


document.getElementsByClassName("btn").onclick = function() {myFunction()};


function myFunction() {
    var x = document.getElementsByClassName("form-group");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += "Thank you! Your email address" + x.elements[i].value + "has been added to our mailing list";
    }
    alert(text);
  }
  