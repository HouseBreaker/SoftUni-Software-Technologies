<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>First Steps Into PHP</title>
		<style>
			div {
				display: inline-block;
				margin: 5px;
				width: 20px;
				height: 20px;
			}
		</style>
	</head>
	<body>
		<?php
		$grayValue = 0;

		for ($i = 1; $i <= 5; $i++) {
			for ($j = 0; $j < 10; $j++) {
				echo "<div style=\"background-color: rgb($grayValue, $grayValue, $grayValue);\"></div>";

				$grayValue += 5;
			}

			$grayValue = 51 * $i;
			echo "<br>";
		}
		?>
	</body>
</html>