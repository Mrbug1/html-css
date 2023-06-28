const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds')
const audio_mamamia = new Audio('audios/mamamia.mp3'); 
const audio_jump = new Audio('audios/jump.mp3'); 
var score = document.getElementById("pontos")

const jump = () => {
    mario.classList.add('jump');
    audio_jump.play();
    

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = window.getComputedStyle(clouds).bottom.replace('px', '');


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        
        mario.src = './imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px' 
        
               
        audio_mamamia.play();
        clearInterval(loop);
    }
}, 10);


let timeout;

function myFunction() {
  timeout = setTimeout(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");
}


    /*if (pipe.style.animation != 'none')
        setTimeout(function pontos() {
            var pontuacao = Number(score.value)
            pontuacao = pontuacao + 4
            res.innerHTML = `${pontuacao}`    
        }, 10);*/
 
function reiniciarJogo() {
    location.reload();
}

document.getElementById("btn-reiniciar").addEventListener("click", reiniciarJogo);
document.addEventListener('keydown', jump); 
