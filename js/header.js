let init = ()=>{

    let mobile = ()=>{

        $('.gnb>li>a').click(function(e){
            e.preventDefault();
            $(this).siblings('.sub').stop().slideToggle();
            $(this).parent().toggleClass('open');

            $(this).parent().siblings().find('.sub').stop().slideUp();
            $(this).parent().siblings().removeClass('open');
        }); //nav>li



        $('.navOpen').click(function(){
            $('nav').stop().fadeToggle();
            $(this).toggleClass('open');
        });

    }//mobile

    
    let pc = ()=>{

        $('.gnb li').on('mouseover',function(e){
            $(this).children('.sub').stop().slideDown();
        }).on('mouseout',function(){
            $(this).children('.sub').stop().slideUp();
        });

        $('.subWrap>div').on('mouseenter',function(){
            let i = $(this).index();
            $('.pcNav li').eq(i).addClass('on');
        }).on('mouseleave',function(){
            $('.pcNav li').removeClass('on');
        });

        $(window).on('scroll',function(){

            let scrl = $(window).scrollTop();
            if(scrl >= 100){
                $('header').addClass('on');
            }else{
                $('header').removeClass('on');
            }

        })
        

    }//pc



    let common = ()=>{

        let winWidth = $(window).width();
        if(winWidth >= 1200){
            pc();

        }else{
            mobile();
        }
    }//common
    

    $(window).resize(()=>{
        
        let winWidth = $(window).width();
        if(winWidth>=1200){
            pc();
            
        }else{
            mobile();
        }
    })//resize

    common();
}

init();