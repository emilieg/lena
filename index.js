$( document ).ready(function() {
    console.log( "ready!" );
    $(document).foundation();
    if($(window).width() < 639) {
      console.log("in mobile view", $(window).width());
     //change the navigation logo to a smaller version
    $('.nav-logo').attr('src', 'assets/LY-Lotus.png');
    }

    $('.contact-button').click(function(){
      var email = '<p>lenaeyou@gmail.com</p>';
      $('.contact-button').fadeOut("slow", function(){
        $(email).appendTo('.contact').hide().fadeIn();
      });
    })
});

