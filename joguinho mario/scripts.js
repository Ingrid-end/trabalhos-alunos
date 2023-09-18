const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')


const pulo = () => {
    mario.classList.add('pulinho')
    // Depois que coloca a class pulinho tem q tirar ela pra poder funcionar de novo
                // Função anonima
    setTimeout(()=>{
        mario.classList.remove('pulinho')

    }, 500)
}

// Quando o pipe chega em tal px ele para,
const loop = setInterval(()=>{
                            // Deslocamento esquerdo
    const pipePosicao = pipe.offsetLeft; 
                            // getComputedStyle=  Pegamos o estilo que foi computado 
                    // + = tenta converter para numero 
    const marioPosicao = + window.getComputedStyle(mario).bottom.replace('px', '');
                                                            // como estava vindo uma string trocamos o px por nada
    // console.log(pipePosicao);
    console.log(marioPosicao);

    // ENTROU NO IF 
        // Se a posição do pipe chegou ali e a aposição do pipe é maior que zero e a altura do mario for menor que 80
        if(pipePosicao <= 120 && pipePosicao > 0 && marioPosicao < 80){
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosicao}px`;

            // Para a animação do mario tbm parar quando bate no pipe
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosicao}px`;

            mario.src = 'imagens/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px'

            // depois de fazer tudo ele limpa/ para o loop
            clearInterval(loop);
        }
},10);
    // Intervalo de tempo que essa função vai ficar sendo executada

document.addEventListener('keydown', pulo);
