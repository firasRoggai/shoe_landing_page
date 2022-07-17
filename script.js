/***  VARIABLES ***/
const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')
const btn4 = document.querySelector('.btn-4')
const cont = document.querySelector('.cards-container')
const cont1 = document.querySelector('.cards-container-1')
const cont2 = document.querySelector('.cards-container-2')
const cont3 = document.querySelector('.cards-container-3')
const cont4 = document.querySelector('.cards-container-4')
/*** END VARIABLES ***/
btn1.addEventListener('click',handleClick)
btn2.addEventListener('click',handleClick)
btn3.addEventListener('click',handleClick)
btn4.addEventListener('click',handleClick)

function handleClick(event){
    switchContent(event.target.classList[1][4]) //passing the number of the btn clicked as an identifier
}
function switchContent(option){
    switch (option) {
        case '1':
            cont1.classList.remove('d-none')
            cont2.classList.add('d-none')
            cont3.classList.add('d-none')
            cont4.classList.add('d-none')
            break;
        case '2':
            cont2.classList.remove('d-none')
            cont1.classList.add('d-none')
            cont3.classList.add('d-none')
            cont4.classList.add('d-none')
            break;
        case '3':
            cont3.classList.remove('d-none')
            cont1.classList.add('d-none')
            cont2.classList.add('d-none')
            cont4.classList.add('d-none')
            break;
        case '4':
            cont4.classList.remove('d-none')
            cont1.classList.add('d-none')
            cont3.classList.add('d-none')
            cont2.classList.add('d-none')
            break;
    
        default:
            break;
    }
}