<?php
include_once 'dbFunctions.php';
$mysqli = connectToDb();

$query = "SELECT id, username, fullname FROM users";
$result = $mysqli->query($query);

if (!$result) {
	die("Error! Failed to process query.");
}

if ($result->num_rows > 0) {
	while ($row = $result->fetch_assoc()) {
		echo "Id: " . htmlspecialchars($row['id']) . "<br>"
			. "Username: " . htmlspecialchars($row['username']) . "<br>"
			. "Full name: " . htmlspecialchars($row['fullname']) . "<br>";
	}
} else {
	echo "0 results.";
}