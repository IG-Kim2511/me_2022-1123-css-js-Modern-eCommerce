/* 
    (πhome----------)
 
    π section , js_220400 
    π small section 
    π₯ little section

    π-μ°κ²°λ μ½λ

    π : ~ing , bug

    js_220400 :connect

    π : Algorithm)  , code explain
    π point, μμλΈκ²
    π κ³΅μ (μκ³ λ¦¬μ¦ μμνΈν)
    π₯ λ³΅μ΅λ μμ£Ό μκ³  νλ¦¬λκ², μ€λ΅λΈνΈ

    (π€delete later) : delete later
    π€(hard-coding) (soft-coding)
    π€way-1 way-2 way-3
    π€:  Tip, μ€μμ¬ν­

    ig, igloo, ingyum, kei, : μλͺν μ΄λ¦



    (πclassμμλ----------)

    πππ(π¦π¦π¦)c7 ~~~~~ : μ μμΌλ‘ μ λ¦¬νκ²
    π(π¦)c7  : λ€λ₯ΈνμΌμ μ²΄ν¬νκ²
*/


'use strict';

// πμ½λ©μ©... μλμΌλ‘ κ°μ₯ λ°μΌλ‘ μ€ν¬λ‘€μν€κΈ°
// window.scrollBy(0, window.innerHeight);


// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

console.log('hi')

const  modalCloseFunc = function () {
    modal.classList.add('closed')
    
}

modalCloseOverlay.addEventListener('click',modalCloseFunc);
modalCloseBtn.addEventListener('click',modalCloseFunc);