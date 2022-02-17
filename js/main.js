
let slider = $("#slider");
let fill = $(".bar .fill");

function setBar() {
	fill.css("width", (slider.val()*3) + "%");
}

slider.on("input", setBar);

setBar();


let val = document.querySelector('#rangeValue');
let pg = document.querySelector('#pageViewsNumbers');

function rangeSlide(value) {
  val.innerHTML = '$' + (Math.round(value * 100) / 100).toFixed(2);;

	if (value < 1) {
		pg.innerHTML = 5;
	} else if (value < 5) {
		pg.innerHTML = 20;
	} else if (value < 10) {
		pg.innerHTML = 40;
	} else if (value < 15) {
		pg.innerHTML = 65;
	} else if ( value < 20) {
		pg.innerHTML = 100;
	} else if (value < 25) {
		pg.innerHTML = 145;
	} else if (value < 30) {
		pg.innerHTML = 210;
	}
}
