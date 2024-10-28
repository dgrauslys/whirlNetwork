<?php
    header("Access-Control-Allow-Origin: *");

    // Optionally, you can be more restrictive and specify the exact domain
    // header("Access-Control-Allow-Origin: http://localhost:5173");
    
    // Allow methods and headers for CORS
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    
    // Set content type to JSON for output
    header("Content-Type: application/json");

    include '../models/response.php';
    include '../models/members.php';

    $response = new Response();
    $members = new Members();

    $members->loadLeadership();
    $response->setData($members->getMembers());

    echo json_encode($response->getData());
?>
