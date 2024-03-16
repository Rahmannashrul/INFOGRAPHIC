let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 0.8 + 'px';
})

// SCROLL REVEAL
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('#text', {delay: 200 })
ScrollReveal().reveal('.text-column, .text-column2', { delay: 500, origin: 'left' })
ScrollReveal().reveal('.chart', {delay: 500, origin: 'right'})
ScrollReveal().reveal('.top-section', {delay: 450, origin: 'top'})
ScrollReveal().reveal('.konten', {delay: 500, origin: 'left'})
ScrollReveal().reveal('.content', {delay: 500, origin: 'right'})
ScrollReveal().reveal('.line, .bead', {delay: 500, origin: 'top',})