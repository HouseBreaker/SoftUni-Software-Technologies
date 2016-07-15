<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>First Steps Into PHP</title>
		<style>
			table * {
				border: 1px solid black;
				width: 50px;
				height: 50px;
			}
		</style>
	</head>
	<body>
		<table>
			<tr>
				<td>
					Red
				</td>
				<td>
					Green
				</td>
				<td>
					Blue
				</td>
			</tr>
<?php
			for ($brightness = 51; $brightness <= 255; $brightness += 51) {
				echo "\t\t\t<tr>\n";
				echo "\t\t\t\t<td style='background-color: rgb($brightness, 0, 0)'></td>\n";
				echo "\t\t\t\t<td style='background-color: rgb(0, $brightness, 0)'></td>\n";
				echo "\t\t\t\t<td style='background-color: rgb(0, 0, $brightness)'></td>\n";
				echo "\t\t\t</tr>\n";
			}
			?>
		</table>
	</body>
</html>