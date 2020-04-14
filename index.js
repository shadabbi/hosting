const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
const btns = document.querySelectorAll('.button');
const cancelBtn = document.querySelector('.modal__action--negative');
const menu = document.getElementById('menu');
const mobileNav = document.querySelector('.mobile-nav');

btns.forEach(btn => {
    btn.addEventListener('click',()=>{
        modal.classList.add('modal-show');
        backdrop.style.display = 'block';
        setTimeout(() => { 
            backdrop.classList.add('backdrop-visible');
        }, 10);
    });
});

const cancel = function(){
    backdrop.classList.remove('backdrop-visible');
    setTimeout(() => { 
        backdrop.style.display = 'none';
    }, 1000);
    mobileNav.style.display = 'none'
    modal.classList.remove('modal-show');
}

const nav = function(){
    backdrop.style.display = 'block';
    mobileNav.style.display = 'block'

}

menu.addEventListener('click',nav);

backdrop.addEventListener('click',cancel);
cancelBtn.addEventListener('click',cancel);