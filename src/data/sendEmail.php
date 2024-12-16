<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Decode the JSON body from the request
    $input = json_decode(file_get_contents('php://input'), true);

    $to = 'zugy.organizer@gmail.com'; 
    $subject = 'Client Lead: '.$input['name'];  // Subject of the email
    $timeWindows = '';
    foreach ($input['timeWindows'] as $key => $value) {
        $timeWindows = $timeWindows . ' ' . $key . ': ' . $value . ", \r\n";
    }
    $message = 'Name: '.$input['name']. "\r\n" . 
    'Email: '. $input['email'] . "\r\n" . 
    'Phone: '. $input['phone'] . "\r\n" .
    'Time Windows: '. $timeWindows . "\r\n" .  
    'Description: '. $input['description'] . "\r\n";  // Message content
    $headers = 'From: zugy.organizer@gmail.com' . "\r\n" .  // Header: From email address
        'Reply-To: '. $input['data']['email'] . "\r\n" .  // Header: Reply-To email address
        'X-Mailer: PHP/' . phpversion();  // Header: X-Mailer

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        $response = [
            'status' => 'success',
            'message' => 'Data received successfully',
            'data' => $input
        ];
    } else {
        $response = [
            'status' => 'false',
            'message' => 'Email failed to send.',
            'data' => $input
        ];
    }

    // Send a JSON response back to the React application
    echo json_encode($response);
} else {
    // Not a POST request
    echo json_encode(['status' => 'error', 'message' => 'Invalid request']);
}
