const dino = document.querySelector('.dino'); //Declarando dino
const fundo = document.querySelector('.fundo');
let pulando = false;
let posicao = 0;

function vendopular(event){
    if (event.keyCode === 32){
        if (!pulando) {
        pula();
        }
    }
}

function pula() {
    pulando = true;
    let intervaloDoPulo = setInterval(() => {
        
        if (posicao >= 180) {
            clearInterval (intervaloDoPulo);
         //Descendo
        let intervaloDescendo = setInterval(() => {
            if (posicao <= 0) {
                 clearInterval(intervaloDescendo);
                 pulando = false;
        }else{
             posicao -= 20;
             dino.style.bottom = posicao + 'px';
        }}, 15);

        }else{
        //Subindo
            posicao += 20;
            dino.style.bottom = posicao + 'px';
        }}, 15);
    
}

function criarCacto() {
    const cacto = document.createElement('div');
    let posicaoCacto = 1000;
    let aleatorio = Math.random() + 6000;

    cacto.classList.add('cactos');

    cacto.style.left = 10000 + 'px';
    fundo.appendChild(cacto);

    let leftInterval = setInterval(() => {
        

        if (posicaoCacto < -60){
            clearInterval(leftInterval);
            fundo.removeChild(cacto);
        }else if(posicaoCacto > 0 && posicaoCacto < 60 && posicao <60){
            //vamo

            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        }else{
            posicaoCacto -= 10;
        cacto.style.left = posicaoCacto + 'px';
        }

        }, 20);

        setTimeout(criarCacto, aleatorio);
}
criarCacto();


document.addEventListener("keyup", vendopular);
