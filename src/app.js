// Main app //
(function(){

	var elem = document.getElementById('space');
	var two = new Two({
		fullscreen : true
	}).appendTo(elem);

	function createGrid(gap, radius){
		var grid = [];
		var gap = gap+radius
		var maxRow = Math.round(this.innerWidth / gap);
		var maxCol = Math.round(this.innerHeight / gap);
		var currentRow = 0;

		for (var j = 0; j < maxRow; j++) {
			var currentCol = 0;
			currentRow += gap;
			for (var i = 0; i < maxCol; i++) {
				currentCol += gap;
				var circle = two.makeCircle(currentRow, currentCol, radius);
				circle.linewidth = 0;
				circle.fill = "#888";
				circle.dom = document.querySelector('#' + circle.id);
				grid.push(circle);
			};
		};
		two.update();
		return grid;
	}

	var grid = createGrid(50,20);

	grid.addEvent = (function(){

		for (var i = 0; i < this.length; i++) {
			this[i].dom = document.querySelector('#' + this[i].id);
			this[i].dom.addEventListener('mousedown',onClick.bind(this[i]));
		};

		function onClick(){
			requestAnimationFrame(onClick.bind(this));
			console.log(this)
			this.scale += 0.01
			two.update();
		}

		function animate(obj){
			requestAnimationFrame(animate)
			console.log(obj) 
		}

	}).bind(grid)();

})();