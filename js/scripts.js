let op = 0;

function opa(){
    let hole = document.querySelector('.hole');
    let img = document.querySelector('img');
    let span1 = document.querySelector('.span1');
    let audio = document.querySelector('audio');
    if(op < 1){
        op += 0.15;
        img.style.opacity = op;
    }else{
        hole.style.animation = 'rotInv 0.5s linear infinite';
        spannn('.span2');
        audio.play();
        span1.style.display = 'none';
    }
}

function spannn(span){
    let sp = document.querySelector(span);
    sp.style.animation = 'spannn 3s';
    sp.style.display = 'initial';
}