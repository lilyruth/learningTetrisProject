export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
	Array.from(Array(STAGE_HEIGHT), () =>
		new Array(STAGE_WIDTH).fill([0, 'clear'])
	)

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
	for (let y = 0; y < player.tetromino.length; y += 1) {
		for (let x = 0; x < player.tetromino[y].length; x += 1) {
			// check for tetromino cell
			if (player.tetromino[y][x] !== 0) {
				if(
				// check for move is inside the game area's height (y) & should not go outside of play area (x), check that it doesn't collide with anything else
				 !stage[y + player.pos.y + moveY] || !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] || stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
				) { return true }
			}
		}
	}
}