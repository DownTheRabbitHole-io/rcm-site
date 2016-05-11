<?php
// process.php

$errors = array();  // array to hold validation errors
$data = array();        // array to pass back data

// validate the variables ========
if (empty($_POST['name']))
  $errors['name'] = 'Name is required.';

if (empty($_POST['email']))
  $errors['email'] = 'email is required.';

if (empty($_POST['message']))
  $errors['message'] = 'message is required.';

// return a response ==============

// response if there are errors
if ( ! empty($errors)) {

  // if there are items in our errors array, return those errors
  $data['success'] = false;
  $data['errors']  = $errors;
} else {

  // if there are no errors, return a message
  $data['success'] = true;
  $data['message'] = 'Success!';

  $to      = 'paul@downtherabbithole.io';
  $subject = 'RCM Contact Form';
  $message = 'Contact form submission from: '.PHP_EOL.PHP_EOL;
  $message .= 'name: '.$_POST['name'].PHP_EOL;
  $message .= 'email: '.$_POST['email'].PHP_EOL;
  $message .= 'message: '.$_POST['message'].PHP_EOL;
  $headers = 'From: webmaster@rcm.com' . "\r\n" .
      'Reply-To: webmaster@rcm.com' . "\r\n" .
      'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers);
}

// return all our data to an AJAX call
echo json_encode($data);
