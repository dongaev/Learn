<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"></script>
<script type="text/javascript">
$(function(){
  $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
	    left: ($(document).width() - $('#magnify').outerWidth())/2,
	    // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight())/2
	  });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay,#magnify img', function(event) {
    event.preventDefault();
 
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});
</script>
 
<style type="text/css">
/* картинка на странице */
.minimized {
  width: 300px;
  cursor: pointer;
}
 

 
/* увеличенная картинка */
#magnify {
  display: none;
 
  /* position: absolute; upd: 24.10.2016 */
  position: fixed;
  max-width: 400px;
  height: auto;
  z-index: 9999;
}
 
#magnify img {
  width: 100%;
}
 
/* затемняющий фон */
#overlay {
  display: none;
 
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.5;
  z-index: 9990;
}
 
/* кнопка закрытия */
#close-popup {
  width: 20px;
  height: 20px;
 
  background: #FFFFFF;
  border: 1px solid #AFAFAF;
  border-radius: 15px;
  cursor: pointer;
  position: absolute;
  top: -25px;
  right: 10px;
}
 
#close-popup i {
  width: 20px;
  height: 20px;
  background: url(https://codernote.ru/files/cross.png) no-repeat center center;
  background-size: 16px 16px;
  display: block;
}
 
@keyframes rota {
 25% { transform: rotate(360deg); }
}
 
#close-popup:hover {
  animation: rota 4s infinite normal;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}
</style>
 
 
<!-- Блок в котором мы будем отображать большую картинку -->

<p>Котенок</p>
 

  <img style="border-radius:3px; box-shadow:5px 5px 0px 0px #009fdf; height:auto; max-width:100%" src="https://magazine.skyeng.ru/wp-content/uploads/2018/10/03.png" class="minimized" />
