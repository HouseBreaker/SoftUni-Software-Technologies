<?php;
include_once 'dbFunctions.php';
$mysqli = connectToDb();

$query = "SELECT * FROM posts";
$result = $mysqli->query($query);

if (!$result) {
	die("Error! Failed to process query.");
}

if ($result->num_rows > 0) {
	while ($row = $result->fetch_assoc()) {
		echo "Id: " . htmlspecialchars($row['id']) . "<br>"
			. "Title: " . htmlspecialchars($row['title']) . "<br>"
			. "Content: " . htmlspecialchars($row['content']) . "<br>";
	}
} else {
	echo "0 results.";
}