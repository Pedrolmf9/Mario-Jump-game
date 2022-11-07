const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameover = document.querySelector('.gameover');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);

    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
        const cloudsPosition = clouds.offsetLeft;




        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;  
            
            clouds.style.animation = 'none';
            clouds.style.left = `${cloudsPosition}px`;

            mario.src = './images/game-over.png';
            mario.style.width = '75px'
            mario.style.marginLeft= '50px'
            gameover.style.opacity= 100


            clearInterval(loop);
        
        }

    }, 10);
    
}

document.addEventListener('keydown', jump);