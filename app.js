$(document).ready(function(){
console.log('READY!');

	function Ball(id, pos_x=300, pos_y=300) {
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

		moveSomewhere: function(direction){
			console.log('Im moving' + direction);
			switch (direction){
				case 'up':
					console.log('Im moving up!');
					this.pos_y -= 10;
					break;
				case 'down':
					console.log('Im moving down!');
					this.pos_y += 10;
					break;
				case 'left':
					console.log('Im moving right!');
					this.pos_x += 10;
					break;
				case 'right':
					console.log('Im moving right!');
					this.pos_x -= 10;
					break;
			}

			this.$element.css('top', (this.pos_y + 'px'));
			this.$element.css('left', (this.pos_x + 'px'));
		},

		moveDown: function(){
			console.log('Im moving down!');
			this.pos_y += 10;
			this.$element.css('top', (this.pos_y + 'px'));
		},

		moveBall: function(){
			console.log(this);
			let rand = Math.random();
			if (rand > 0.75){
				this.moveSomewhere('right');
			} else if (rand > 0.5) {
				this.moveSomewhere('down');
			} else if (rand > 0.25) {
				this.moveSomewhere('left');
			} else {
				this.moveSomewhere('up');
			}
		}

	}

	function startGame() {


		let allBalls = [];

		for (let i=0; i<10; i++){
			allBalls.push(new Ball(i));
			allBalls[i].createBall();
			window.setInterval(allBalls[i].moveBall.bind(allBalls[i].self), 1000);

		}




	
	}

	startGame();
});
