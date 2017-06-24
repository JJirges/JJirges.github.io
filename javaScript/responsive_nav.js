(function($, undefined){

  $(document).ready(function() {

    var $facefirst_dropdown = $('.facefirst_dropdown');
    console.log($facefirst_dropdown);

    $facefirst_dropdown.on("click", function(){
      console.log('click');
      $('#dropdown_menu').slideToggle();

    });

  });




})(jQuery);
