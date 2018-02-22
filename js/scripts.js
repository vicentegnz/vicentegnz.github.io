
jQuery(document).ready(function() {
    $('#contact-form').submit(function(e) {
    	e.preventDefault();


    	var form = $(this);
    	var nameLabel = form.find('input[name="name"]');
    	var emailLabel = form.find('input[name="email"]');
    	var messageLabel = form.find('input[name="message"]');

    	nameLabel.html('Name');
    	emailLabel.html('Email');
    	messageLabel.html('Message');

        var postdata = form.serialize();

        $.ajax({
            type: 'POST',
            url: 'php/sendmail.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if(json.nameMessage != '') {
                	nameLabel.append(' - <span> ' + json.nameMessage + '</span>');
                }
                if(json.emailMessage != '') {
                	emailLabel.append(' - <span"> ' + json.emailMessage + '</span>');
                }
                if(json.messageMessage != '') {
                	messageLabel.append(' - <span"> ' + json.messageMessage + '</span>');
                }
                if(json.nameMessage == '' && json.emailMessage == '' && json.messageMessage == '') {
                	form.fadeOut('fast', function() {
                    form.parent('#container-form').attr("style","margin-top: 80px;");
                		form.parent('#container-form').append('<p>Gracias por contactar conmigo. Me pondre en contacto contigo lo antes posibles. Saludos!</p>');
                    });
                }
            }
        });
    });

});
