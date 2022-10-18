const player = document.getElementById('player');
const ground = document.getElementById('ground');
let dx = 0;
let dy = 0;
let acceleration = 0.1;
let index = 0;

const animate = () => {

   /* Animation part of the image */
   if (dx !== 0) {
      player.style.backgroundImage = `url('img/Run__00${index++}.png')`; //Run\ \(${index++}\).png
   } else if (dy > 0.5 || dy < 0) {
      player.style.backgroundImage = `url('img/Jump__00${index++}.png')`; //Jump\ \(${index++}\).png
   } else {
      player.style.backgroundImage = `url('img/Idle__00${index++}.png')`; //Idle\ \(${index++}\).png
   }
   if (index > 8) index = 1;



   if (((player.offsetLeft + player.offsetWidth + dx) >= innerWidth)) {
      dx = 0;
      player.style.left = `${innerWidth - player.offsetWidth}px`;
   } else if (player.offsetLeft < 0) {
      dx = 0;
      player.style.left = '0';
   }

   if ((player.offsetTop + player.offsetHeight) > ground.offsetTop) {
      dy = 0;
      player.style.top = `${ground.offsetTop - player.offsetHeight}px`
   }

   dy += acceleration;

   player.style.left = `${player.offsetLeft + dx}px`;
   player.style.top = `${player.offsetTop + dy}px`;
   requestAnimationFrame(animate);
}

addEventListener('keydown', ({ key }) => {
   if (key === 'ArrowRight') {
      index = 1;
      player.classList.remove('turn');
      dx = 10;
   } else if (key == 'ArrowLeft') {
      index = 1;
      player.classList.add('turn');
      dx = -10;
   } /* else if (key == 'ArrowUp'){
        dy = -7;
    } */
});

addEventListener('keypress', ({ key }) => {
   index = 1;
   if (key === ' ') {
      dy = -7;
   }
});

addEventListener('keyup', ({ key }) => {
   if (key === 'ArrowRight' || key == 'ArrowLeft') {
      dx = 0;
   }
});


requestAnimationFrame(animate);


let j = 0;
function repaint(){
   // console.log('panted :'+j++,);
   requestAnimationFrame(repaint);

}
requestAnimationFrame(repaint);