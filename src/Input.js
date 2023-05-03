class InputHandler {
	constructor(game) {
		this.game = game
		this.keys = []
		window.addEventListener('keydown', e => {
			if((e.key === 'ArrowDown' ||
			 e.key === 'ArrowUp' ||
			 e.key === 'ArrowRight' || 
			 e.key === 'ArrowLeft' ||
			 e.key === 'Enter')
			  && this.keys.indexOf(e.key) === -1){
				this.keys.push(e.key)
			} else if(e.key === 'd') this.game.debug = !this.game.debug
		})
		// jika tombol dilepas
		window.addEventListener('keyup', e => {
			if(e.key === 'ArrowDown' ||
			 e.key === 'ArrowUp' ||
			 e.key === 'ArrowRight' || 
			 e.key === 'ArrowLeft' ||
			 e.key === 'Enter') {
				this.keys.splice(this.keys.indexOf(e.key), 1)
			}
		})
	}
}