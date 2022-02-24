
let store = ()=>{

    $('.item').click(function(){

        let txt = $(this).find('span').text(),
        parentIndex = $(this).parents('.storeWrap').index();
        

        let imgSrc = `../images/${txt}.png`;
        $('.view').stop().fadeIn();
        $('.view img').attr('src',imgSrc);

    });

    $('.closeWrap, .close').click(function(){
        $('.view').stop().fadeOut();
    })
}

store();