<?php

function getMySQLiConnection() {
    $host = 'localhost'; // or '127.0.0.1'
    $username = 'root';
    $password = '';
    $dbname = 'whirl';

    $mysqli = new mysqli($host, $username, $password, $dbname);

    if ($mysqli->connect_error) {
        die("Connection failed: " . $mysqli->connect_error);
    }

    return $mysqli;
}

?>