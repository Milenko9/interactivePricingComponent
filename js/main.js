
let slider = $("#slider");
let fill = $(".bar .fill");

function setBar() {
	fill.css("width", slider.val() + "%");
}

slider.on("input", setBar);

setBar();


let val = document.querySelector('#rangeValue');

function rangeSlide(value) {
  val.innerHTML = value;
}
