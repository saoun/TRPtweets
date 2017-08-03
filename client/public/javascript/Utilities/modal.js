var elements = $('.modal-overlay, .modal');

$('#nav-icon2').click(function(){
    elements.addClass('active');
    console.log('hello')
});

$('.close-modal').click(function(){
    elements.removeClass('active');
});
