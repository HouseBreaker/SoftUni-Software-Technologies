<?php
function connectToDb($hostname = 'localhost', $username = 'root', $password = '', $dbname = 'blog2')
{
	$mysqli = new mysqli($hostname, $username, $password, $dbname);

	if ($mysqli->connect_errno) {
		die("Error! Failed to connect to MySQL.");
	}

	$mysqli->set_charset("utf8");

	return $mysqli;
}