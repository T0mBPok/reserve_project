const lang_btn = document.querySelector('.header__language');
const choose = document.querySelector('.language__choosen');
const langs = document.querySelector('.language__list');

lang_btn.addEventListener('click', ()=>{
    if(langs.style.display == 'none'){
        choose.classList.add('language__choosen-active');
        langs.style.display = 'flex';
        langs.style.opacity = '1';
    }else{
        choose.classList.remove('language__choosen-active');
        langs.style.display = 'none';
        langs.style.opacity = '0';
    }
});

const ru = document.getElementById('language__ru');
const en = document.getElementById('language__en');
const lang_img = document.getElementById('choosen-img');
const lang_txt = document.getElementById('choosen-txt');

ru.addEventListener('click', ()=>{
    lang_img.src = './images/header/flags_rus.png';
    lang_txt.textContent = 'RU';
})

en.addEventListener('click', () =>{
    lang_img.src = './images/header/flags.png';
    lang_txt.textContent = 'EN';
})

const row1 = document.getElementById('tags_row1');
const els1 = row1.querySelectorAll('.tags__categories');

for (var i=0; i<els1.length; i++){
    els1[i].addEventListener('click', function(evt){
        evt.preventDefault();
        els1.forEach(c => {
            c.classList.remove('btn-active');
        })
        $(this).addClass('btn-active');
    })
}

$(document).ready(function() {
    $('.burger__menu').click(function(){
        if($('#h_last-ch').css('display') == 'none'){
            $('.header__content:last-child').removeClass('close');
            $('.header__content:first-child').toggleClass('close');

        }else{
            $('.header__content').css('background','');
            $('.header__content:last-child').toggleClass('close');
            $('.header__content:first-child').removeClass('close');
        }
    })
})

// let w = $(window).width()

// switch(true){
//     case w > 768:
//         var i = 4;
//         break
//     case w <= 768:
//         var i = 3;
//         break
//     case w <= 360:
//         var i = 0;
//         break
// }


// jQuery('<div>', {   
//     class: 'slide'
// }).appendTo('.slider__people')

// jQuery('<img>', {
//     class: 'slide__img',
//     alt: 'picture',
//     src: './images/speakers/photo.png'
// }).appendTo('.slide')

// jQuery('<div>', {
//     class: 'slide__info'
// }).appendTo('.slide')

// jQuery('<div>', {
//     class: 'slide__name'
// }).append('Илья Благов').appendTo('.slide__info')

// jQuery('<div>', {
//     class: 'slide__bottom'
// }).appendTo('.slide__info')

// jQuery('<div>', {
//     class: 'slide__stars'
// }).appendTo('.slide__bottom')


// for(let i=0; i<5; i++){
//     jQuery('<img>', {
//         class: 'slide__star',
//         alt: 'star',
//         src: './images/speakers/star.png'
//     }).appendTo('.slide__stars')
// }

// jQuery('<div>', {
//     class: 'slide__arrow'
// }).appendTo('.slide__bottom')

// jQuery('<img>', {
//     alt: 'picture', 
//     src: './images/speakers/arrow-right.png'
// }).appendTo('.slide__arrow')

const nums = document.getElementById('s_nums');
const num = nums.querySelectorAll('.step__num');

console.log()

for (var i=0; i<num.length; i++){
    num[i].addEventListener('click', function(evt){
        evt.preventDefault();
        num.forEach(c => {
            c.classList.remove('btn-active');
        })
        $(this).addClass('btn-active');
    })
}

let count = parseInt($('#s_count').text(), 10)

$(document).ready(function () { 
    $('#arrow_l').click(function(){
        if(count>0){
            count--
            $('#s_count').text(count)
            $('#s_price').text(count*49)
        }
    })
    $('#arrow_r').click(function(){
        count+=1;
        $('#s_count').text(count);
        $('#s_price').text(count*49)
    })
 })
