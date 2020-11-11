const backdrop = document.querySelector('.backdrop');
const modal  = document.querySelector('.modal');
const selectBtn = document.querySelectorAll('.plan .button');
const noBtn = document.querySelector('.modal__action--negative');
const toggleBtn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

console.dir(selectBtn);

for(let i = 0; i< selectBtn.length; i++){
    selectBtn[i].addEventListener('click',()=>{
        // backdrop.style.display ='block';
        // modal.style.display ='block';
        backdrop.classList.add('open');
        modal.classList.add('open');
    });
}
const closeModal = ()=>{
    // backdrop.style.display ='none';
    // modal.style.display ='none';
    backdrop.classList.remove('open')
    if(modal){
    modal.classList.remove('open');
    }
};

if(noBtn){
    noBtn.addEventListener('click', closeModal);
}


if(backdrop){
    backdrop.addEventListener('click', ()=>{
        // mobileNav.style.display ='none';
        mobileNav.classList.remove('open');
        closeModal();
    });
    
}

toggleBtn.addEventListener('click', ()=>{
    // mobileNav.style.display ='block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});