$(function() {
    $('#subscribeForm').bind('submit', function() {
        $.ajax({
            url: "auto_reply.php",
            type: "POST",
            data: {"mceEMAIL" : mceEMAIL}, // here build JSON object with your form data
            dataType: "json",
            contentType: "application/json",
            success: function() {
                // this is returned value from your PHP script
                //your PHP script needs to send back JSON headers + JSON object, not new HTML document!
                // update your "message" element in the modal

                    $('#success_').html("<div class='alert alert-success'>");
                    $('#success_ > .alert-success').html("<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success_ > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success_ > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#subscribeForm').txt();

                $("#subscribeForm").text(msg);
            }
        });
    });


success_