
const menuSections = document.querySelectorAll('.menu-section');
const btns = document.querySelectorAll('.menu-tab');

const showInfo = (id) => {
    menuSections.forEach(section => section.style.display = 'none');
    btns.forEach(btn => btn.classList.remove('menu-tab-active'));

    document.getElementById(id).style.display = 'block';

    const currentActiveButton = document.querySelector(`[data-id=${id}]`);
    currentActiveButton.classList.add('menu-tab-active')
    
}
