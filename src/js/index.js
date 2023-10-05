const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function menu(){
    location.replace('/Indice.html')
}

function coop(){
    location.replace('/coop.html')
}

function caca(){
    location.replace('/caca.html')
}

function adora(){
    location.replace('/adora.html')
}

function jogo(){
    location.replace('/jogo.html')
}