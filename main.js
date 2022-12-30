/* 
    (🍀home----------)
 
    🍀 section , js_220400 
    🍉 small section 
    🥒 little section

    👉-연결된 코드

    🎃 : ~ing , bug

    js_220400 :connect

    🍄 : Algorithm)  , code explain
    🍚 point, 알아낸것
    😎 공식 (알고리즘 상위호환)
    🥗 복습때 자주 잊고 틀리는것, 오답노트

    (🍤delete later) : delete later
    🍤(hard-coding) (soft-coding)
    🍤way-1 way-2 way-3
    🍤:  Tip, 중요사항

    ig, igloo, ingyum, kei, : 작명한 이름



    (🍀class수업때----------)

    🍚🍚🍚(🦄🦄🦄)c7 ~~~~~ : 정식으로 정리한것
    🍚(🦄)c7  : 다른파일에 체크한것
*/


'use strict';

// 🍀코딩용... 자동으로 가장 밑으로 스크롤시키기
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