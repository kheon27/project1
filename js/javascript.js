$(function(){

    new fullScroll({//스크롤 애니메이션
        animateTime: 0.7,
        animateFunction: 'ease'    
    });

    $(document).ready(function(){//배너 슬라이더
        $('.slider').bxSlider();
      });

      var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      });

    $('.tabSet').each(function(){ //클래스마다 각자

        var anchor = $(this).find('.tabs a'); //.tabSet 안에서 a 찾기
        var anchor_on = $(this).find('.tabs a.on'); //a에 .on 붙은 애만 고르기
        var on_href = anchor_on.attr('href'); //a에 .on 붙은 애한테서 href 값
        var panels = $(this).find('.panels > div'); //.tabSet 안에서 내용 찾기

        panels.hide();
        $(on_href).show();

        anchor.each(function(){  //.tabSet a들
            var href = $(this).attr('href'); //클릭한 애 href을 찾는다

            $(this).click(function(){  //클릭한 a

                anchor.removeClass('on'); //모두 .on 제거
                panels.hide();
                $(this).addClass('on'); //클릭한 애한테 .on 부여
                $(href).show(); //클릭한 애 href 값만 보여준다.

            }); //a태그 클릭시 행동
        
        }); //anchor each end

    }); //tabSet each end
    var div2 = document.getElementsByClassName("on");

function handleClick(event) {
console.log(event.target);
// console.log(this);
// 콘솔창을 보면 둘다 동일한 값이 나온다

console.log(event.target.classList);

if (event.target.classList[1] === "clicked") {
event.target.classList.remove("clicked");
} else {
for (var i = 0; i < div2.length; i++) {
div2[i].classList.remove("clicked");
}

event.target.classList.add("clicked");
}
}

function init() {
for (var i = 0; i < div2.length; i++) {
div2[i].addEventListener("click", handleClick);
}
}

init();

var a = 1;
    $('.btn_all').click(function () {
        if (a == 1) {
            $('.box').show();
            $(this).addClass('on');
            a = 2
        } else {
            $('.box').hide();
            $(this).removeClass('on');
            a = 1;
        }; //if.end
    }); //$('.btn_all').click


    //모바일 메뉴 펼치기
    const aco = $('.m_menu li a');
    aco.on('click',function(){
    const item = $(this);
    let speed = 200;
    aco.parent().find('.sub').stop().slideUp(speed);
    if(item.hasClass('active')){
    item.find('.sub').stop().slideUp(speed);	
    item.removeClass('active');
    }else{
    item.parent().find('.sub').stop().slideDown();
    aco.removeClass('active');
    item.addClass('active');
    }
    });

  
    	
});//ready end