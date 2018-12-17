function firstTriangle() {
  var side1 = parseInt(document.getElementById("side1").value);
  var side2 = parseInt(document.getElementById("side2").value);
  var side3 = parseInt(document.getElementById("side3").value);

  if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    if (side1 === side2 && side1 === side3 && side2 === side3) {
      console.log(alert("This triangle is equilateral"));
    } else if (side1 === side2 && side1 !== side3 && side2 !== side3) {
      console.log(alert("This triangle is isosceles"));
    } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
      console.log(alert("This triangle is scalene"));
    }
  } else {
    console.log(alert("this is not a triangle"));
  }
}

var sides = ["side1", "side2", "side3"];
sides.forEach(function(side) {
  console.log("number of side " + side);
});
