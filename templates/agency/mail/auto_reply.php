<?php

   // Check for empty fields
      if(empty($_POST['mceEMAIL'])     ||
         !filter_var($_POST['mceEMAIL'],FILTER_VALIDATE_EMAIL))
         {
         echo "No arguments Provided!";
         return false;
         }
         

      $email_address_subcription = $_POST['mceEMAIL'];

         
      // Create the email and send the message
      $to = $email_address_subcription;
      $email_subject = "Thanks for subscribing!";
      $message = "Thanks a ton! We appreciate the subscription. Be sure to look out for updates and blog posts!\n\n"."-Your friends at Seam.";
      $headers = "From: noreply@yourdomain.com";
      mail($to, $email_subject, $message, $headers);

      return true;


?>