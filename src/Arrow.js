var Arrow = function(two,mouse){

	var arrow = two.makePath(100, 0, 0, 10, 0, -10, false);
	arrow.linewidth = 0;
	arrow.fill = "#888";
	arrow.translation.x = window.innerWidth/2;
	arrow.translation.y = window.innerHeight/2;
    arrow.wave = Event.wave;
    return arrow;
}

module.exports = Arrow;