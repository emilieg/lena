$( document ).ready(function() {
    console.log( "ready!" );
    $(document).foundation();
    if($(window).width() < 639) {
      console.log("in mobile view", $(window).width());
     //change the navigation logo to a smaller version
    $('.nav-logo').attr('src', 'assets/LY-Lotus.png');
    }

    $('.contact-button').click(function(){
      var email = $('.email');
      $('.contact-button').fadeOut("slow", function(){
        $('.contact-button').replaceWith('<span class="email">lenaeyou@gmail.com</span>');
        // $('.email').toggleClass('.hidden');
        // $('.email').css('visibility', 'visible');
        // $(email).appendTo('.contact').hide().fadeIn();
      });
    })
});

//visibility: hidden