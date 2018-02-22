$("#contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#contact-name").val();
    var email = $("#contact-email").val();
    var number = $("#contact-number").val();
    var message = $("#contact-message").val();

    $.ajax({
        type: "POST",
        url: "php/email.php",
        data: "name=" + name + "&email=" + email + "&number" + number + "&message" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}
function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
}
