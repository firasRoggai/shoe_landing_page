/***  VARIABLES ***/
const btn = document.querySelectorAll('.btn-toggle')
const cont = document.querySelectorAll('.cards-container')

/*** END VARIABLES ***/
btn.forEach((element,index)=>{
    element.addEventListener('click',()=>{
        cont.forEach((cont)=>{cont.classList.remove('isActive')})
        btn.forEach((cont)=>{cont.classList.remove('isActiveBtn')})
        cont[index].classList.add('isActive')
        cont[index].classList.add('animate__fadeIn')
        btn[index].classList.add('isActiveBtn')
    })
})

// function handleClick(event){
//     switchContent({btnNumber:event.target.classList[1][4],btn:event.target}) //passing the number of the btn clicked as an identifier
// }

// function switchContent(option){
//     const conts = [cont1,cont2,cont3,cont4]
//     const selectedCont = conts[option.btnNumber-1]
//     const options = ['1','2','3','4'];
//     const optionPosition = options.indexOf(option.btnNumber)
//     options.splice(optionPosition,1)
//     // option settings
//     option.btn.classList.toggle('btn-dark')
//     option.btn.classList.toggle('btn-outline-dark')
//     // option settings
//     options.
//     console.log(selectedCont);
// }
// function switchContent(option){
//     switch (option) {
//         case '1':
//             cont1.classList.remove('d-none')
//             cont1.classList.add('animate__fadeIn')
//             btn3.classList.toggle('btn-dark')
//             btn3.classList.toggle('btn-outline-dark')
//             cont2.classList.add('d-none')
//             cont3.classList.add('d-none')
//             cont4.classList.add('d-none')
//             break;
//         case '2':
//             cont2.classList.remove('d-none')
//             cont2.classList.add('animate__fadeIn')
//             btn3.classList.toggle('btn-dark')
//             btn3.classList.toggle('btn-outline-dark')
//             cont1.classList.add('d-none')
//             cont3.classList.add('d-none')
//             cont4.classList.add('d-none')
//             break;
//         case '3':
//             cont3.classList.remove('d-none')
//             cont3.classList.add('animate__fadeIn')
//             btn3.classList.toggle('btn-dark')
//             btn3.classList.toggle('btn-outline-dark')
//             cont1.classList.add('d-none')
//             cont2.classList.add('d-none')
//             cont4.classList.add('d-none')
//             break;
//         case '4':
//             cont4.classList.remove('d-none')
//             cont4.classList.add('animate__fadeIn')
//             btn3.classList.toggle('btn-dark')
//             btn3.classList.toggle('btn-outline-dark')
//             cont1.classList.add('d-none')
//             cont3.classList.add('d-none')
//             cont2.classList.add('d-none')
//             break;
    
//         default:
//             break;
//     }
// }