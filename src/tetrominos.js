export const TETROMINOS = {
 0: { shape: [[0]], color: '0,0,0'},
 I: { shape: [
              [0, 'I', 0, 0],
              [0, 'I', 0, 0],
              [0, 'I', 0, 0],
              [0, 'I', 0, 0]

 ],
color: '255, 20, 147'},

J: { shape: [
              [0, 'J', 0],
              [0, 'J', 0],
              ['J', 'J', 0]
       

 ],
color: '221,160,221'},

L: { shape: [
              [0, 'L', 0],
              [0, 'L', 0],
              [0, 'L', 'L']
       

 ],
color: '120, 200, 153'},

O: { shape: [
              ['O', 'O'],
              ['O', 'O']
              
       

 ],
color: '175,238,238'},

S: { shape: [
              [0, 'S', 'S'],
              ['S', 'S', 0],
              [0, 0, 0]
       

 ],
color: '148,148,211'},

T: { shape: [
              [0, 0, 0],
              ['T', 'T', 'T'],
              [0, 'T', 0]
       

 ],
color: '250, 128, 114'},

Z: {
 shape: [
             ['Z', 'Z', 0],
             [0, 'Z', 'Z'],
             [0, 0, 0],

 ], 
 color: '0, 191, 255'
}

}

export const randomTetromino = () => {
 const tetrominos = 'IJLOSTZ';
 const randTetromino = 
     tetrominos[Math.floor(Math.random() * tetrominos.length)]
 return TETROMINOS[randTetromino]
}

