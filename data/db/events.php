<?php

include '../util.php';

function getEvents()
{
    $mysqli = getMySQLiConnection();
    $sql = <<<SQL
        SELECT
            id,
            name,
            image,
            date,
            time,
            location,
            description,
            fb_link,
            meetup_link,
            signup_link,
            is_canceled
        FROM events
        WHERE is_canceled = FALSE
        AND date >= CURDATE()
        ORDER BY date, time
    SQL;
    $result = $mysqli->query($sql);

    if ($result === false) {
        // Handle error if query fails
        die("Error fetching data: " . $mysqli->error);
    }

    $rows = [];
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }

    $mysqli->close();
    return $rows;
}

function getPastEvents()
{
    $mysqli = getMySQLiConnection();
    $sql = <<<SQL
        SELECT
            id,
            name,
            image,
            date,
            time,
            location,
            description,
            fb_link,
            meetup_link,
            signup_link,
            is_canceled
        FROM events
        WHERE is_canceled = FALSE
        AND date <= CURDATE()
        ORDER BY date, time
    SQL;
    $result = $mysqli->query($sql);

    if ($result === false) {
        // Handle error if query fails
        die("Error fetching data: " . $mysqli->error);
    }

    $rows = [];
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }

    $mysqli->close();
    return $rows;
}

function getUpcommingEvents()
{
    $mysqli = getMySQLiConnection();
    $sql = <<<SQL
        SELECT
            id,
            name,
            image,
            date,
            time,
            location,
            description,
            fb_link,
            meetup_link,
            signup_link,
            is_canceled
        FROM events
        WHERE is_canceled = FALSE
        AND date >= CURDATE()
        ORDER BY date, time
        LIMIT 1;
    SQL;
    $result = $mysqli->query($sql);

    if ($result === false) {
        // Handle error if query fails
        die("Error fetching data: " . $mysqli->error);
    }

    $rows = [];
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }

    $mysqli->close();
    return $rows;
}