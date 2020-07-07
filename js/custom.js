$(function(){
 $('.search-box').click(function(){
     $('.search-overlay').show().delay(2000);
 });
    
 $('.cancel-btn').click(function(){
     $('.search-overlay').hide();
 });
    
// // slidebar part start 
//
// $('.slidebar').click(function(){
//   $('.slidebar-page').addClass('slidebar-page2');
// }); 
//
// $('.slidebar-icon').click(function(){
// 	$('.slidebar-page').removeClass('slidebar-page2');
// }); 
   
    //animation scroll js
var html_body = $('html, body');
$('.scroll a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 1
            }, 1500);
            return false;
        }
    }
});     
    
    
    
    
});