const close = document.querySelector('#close');
const adBar = document.querySelector('.black');
const logoBar = document.querySelector('.white');

close.addEventListener('click', () => {
    adBar.style.display = 'none';
    logoBar.style.marginTop = '0rem';
})