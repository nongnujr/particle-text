var Arrow = function(two,mouse){
	var arrow = two.makePath(100, 0, 0, 10, 0, -10, false);
	arrow.linewidth = 0;
	arrow.fill = "#888";
	arrow.translation.x = window.innerWidth/2;
	arrow.translation.y = window.innerHeight/2;
	showMousePos()
	function showMousePos(){
		requestAnimationFrame(showMousePos);
		document.x !== void 0 ? console.log(document.x) : console.log();
	}
}
module.exports = Arrow;