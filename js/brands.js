$('.view').slick({
    'dots': true,
    'customPaging': function(slick,index) {
        var targetImage = slick.$slides.eq(index).find('img').attr('src');
        return '<img src=" ' + targetImage + ' "/>';
    }
});