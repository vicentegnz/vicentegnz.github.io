$("#contactForm").submit(function(event){
    var form = $(this);
    form.fadeOut('fast', function() {
        form.parent('#container-form').attr("style","margin-top: 80px;");
        $( "#msgSubmit" ).removeClass( "hidden" );
    });
});
