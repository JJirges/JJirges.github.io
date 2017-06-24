(function($, undefined){

  $(document).ready(function() {

    var $dropdown = $('.dropdown');
    console.log($dropdown);

    $dropdown.on("click", function(){
      console.log('click');
      $('#dropdown_content').slideToggle();
    });

  });




})(jQuery);
