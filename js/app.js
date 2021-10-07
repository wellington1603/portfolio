//Função monitorar scroll menu

window.addEventListener("scroll", function() {
    let nav = document.querySelector("nav")
    nav.classList.toggle('sticky', window.scrollY > 150)
})

//função animação digitação de máquina

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 200* i);
    });
  }

  const nameTitle = document.getElementById('principal')
  typeWriter(nameTitle)


// //iniciar o controller

const controller = new ScrollMagic.Controller()

// //definir os elemetos a serem usados

const contato = document.getElementById('contato')
const contatoTitle = document.getElementById('infoContato')

const scene = new ScrollMagic.Scene({
    triggerElement: contato,
    triggerHook: 0,
    duration: 2000
}).setPin(contato)
.addTo(controller)   

const contatoTextAnimation = TweenMax.fromTo(contatoTitle, 2, {opacity: 0}, {opacity: 1})
const scene2 = new ScrollMagic.Scene({
    triggerElement: contato,
    triggerHook: 0,
    duration: 2000
})
.setTween(contatoTextAnimation)
.addTo(controller)

