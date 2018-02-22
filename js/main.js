// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';

   /*====================================
    Main Navigation Stick to Top when Scroll
    ======================================*/
    function sticky_relocate() {
      var window_top = $(window).scrollTop();
      var div_top = $('#sticky-anchor').offset().top;
      if (window_top > div_top) {
          $('#tf-menu').addClass('stick');
      } else {
          $('#tf-menu').removeClass('stick');
      }
  }

  $(function () {
      $(window).scroll(sticky_relocate);
      sticky_relocate();
  });

    
 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 70
        }, 1000);
        return false;
      }
    }
  });
});

 
$('.contact-form form').submit(function(e) {
      e.preventDefault();

      var form = $(this);
      var nameLabel = form.find('label[for="contact-name"]');
      var emailLabel = form.find('label[for="contact-email"]');
      var messageLabel = form.find('label[for="contact-message"]');

      nameLabel.html('Name');
      emailLabel.html('Email');
      messageLabel.html('Message');

        var postdata = form.serialize();

        $.ajax({
            type: 'POST',
            url: 'assets/sendmail.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.nameMessage != '') {
                  nameLabel.append(' - <span class="violet error-label"> ' + json.nameMessage + '</span>');
                }
                if(json.emailMessage != '') {
                  emailLabel.append(' - <span class="violet error-label"> ' + json.emailMessage + '</span>');
                }
                if(json.messageMessage != '') {
                  messageLabel.append(' - <span class="violet error-label"> ' + json.messageMessage + '</span>');
                }
                if(json.nameMessage == '' && json.emailMessage == '' && json.messageMessage == '') {
                  form.fadeOut('fast', function() {
                    form.parent('.contact-form').append('<p><span class="violet">Gracias por contactar con nosotros!</span> nos pondremos en contacto contigo lo antes posible.</p>');
                    });
                }
            }
        });
    });

});

}());


}
main();