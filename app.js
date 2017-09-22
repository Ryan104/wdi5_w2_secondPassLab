$(document).ready(function(){
console.log('READY!');

	function Ball(id, pos_x=0, pos_y=0) {
		this.id = id;
		this.pos_x = pos_x;
		this.pos_y = pos_y;
		this.$element = $('<div class="ball"></div>'); // include this.id
		this.self = this;
	}

	Ball.prototype = {
		createBall: function(){
			console.log('created ball');
			$('#playing-field').append(this.$element);
		},

		moveRight: function(){
			console.log('Im moving right!');
			let thisBall = this.$element
			this.pos_x += 10;
			this.$element.css('left', (this.pos_x + 'px'));
		},

		moveDown: function(){
			console.log('Im moving!');
			this.pos_y += 10;
			this.$element.css('top', (this.pos_y + 'px'));
		}

	}

	function startGame() {


		let allBalls = [];

		for (let i=0; i<10; i++){
			allBalls.push(new Ball(i));
			allBalls[i].createBall();
			window.setInterval(allBalls[i].moveRight.bind(allBalls[i].self), 1000);

		}

		console.log(allBalls);




	
	}

	startGame();
});
