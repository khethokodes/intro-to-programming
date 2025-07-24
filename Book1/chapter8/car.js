var dreamCar = {
  make: "",
  model: "98",
  color: "brown",
  year: 1983,
  bodyStyle: "Luxury Car",
  price: 4500,
  bonnet: "50px",
  height: "200px",
  width: "200px",
  backgroundColor: "yellow",
};

alert("The type of dreamCar is: " + typeof dreamCar);

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;

document.getElementById("frontwheel").style.backgroundColor = dreamCar.backgroundColor;
document.getElementById("backwheel").style.backgroundColor = dreamCar.backgroundColor;

document.getElementById("frontwheel").style.width = dreamCar.height;
document.getElementById("frontwheel").style.height = dreamCar.width;

document.getElementById("backwheel").style.width = "200px";
document.getElementById("backwheel").style.height = "200px";

document.getElementById("body").style.borderTopRightRadius = dreamCar.bonnet;
