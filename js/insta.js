

function tablet(){
    

    $('.item').each(function(){
        let wid = $(this).width();
        $(this).height(wid)
    })



}//tablet.func


$(window).resize(function(){



    let winWid = $(window).width();
    if(winWid >=768){
        tablet();
    }

});


let winWid = $(window).width();
if(winWid >=768){
    tablet();
}
