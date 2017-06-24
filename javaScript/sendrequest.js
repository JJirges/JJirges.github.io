(function($, undefined){

  $(document).ready(function() {

    var $joinrequest = $('.joinrequest');
    console.log($joinrequest);

    $joinrequest.on("click", function(){
      console.log('click');
      $('#member_form_dropdown').slideToggle(function(){
        if($('#member_form_dropdown').is(":visible")){
          document.getElementsByClassName("joinrequest")[0].style.backgroundColor = "#c5beb9";
          document.getElementsByClassName("joinrequest")[0].style.borderColor = "#5e5d59";
        } else {
            document.getElementsByClassName("joinrequest")[0].style.backgroundColor = "#ffffff";
            document.getElementsByClassName("joinrequest")[0].style.borderColor = "#cdc6c2";
        }
      });
    });

  });




})(jQuery);
