<?php

include '../util.php';

function getLeadership()
{
    $mysqli = getMySQLiConnection();
    $sql = <<<SQL
    SELECT
        id,
        first_name,
        last_name,
        is_leadership,
        is_active,
        image,
        short_copy 
    FROM members
    WHERE
        is_leadership = true AND
        is_active = true
    SQL;
    $result = $mysqli->query($sql);

    if ($result === false) {
        // Handle error if query fails
        die("Error fetching data: " . $mysqli->error);
    }

    $rows = [];
    while ($row = $result->fetch_assoc()) {
        $row['tags'] = '';
        $rows[] = $row;
    }

    $mysqli->close();
    return $rows;
}

function getAllMembers()
{
    $mysqli = getMySQLiConnection();
    $sql = <<<SQL
        SELECT 
            m.id,
            m.first_name,
            m.last_name,
            m.is_leadership,
            m.is_active,
            m.image,
            m.short_copy,
            GROUP_CONCAT(t.tag SEPARATOR ', ') AS tags
        FROM 
            members m
        LEFT JOIN 
            tags t ON m.id = t.member_id
        WHERE 
            m.is_active = TRUE
        GROUP BY 
            m.id,
            m.first_name,
            m.last_name,
            m.is_leadership,
            m.is_active,
            m.image,
            m.short_copy
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
