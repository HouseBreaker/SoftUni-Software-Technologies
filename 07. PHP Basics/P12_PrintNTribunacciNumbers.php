<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>First Steps Into PHP</title>

	</head>
	<body>
		<form>
			N: <input type="text" name="num"/>
			<input type="submit"/>
		</form>
		<?php
		if (isset($_GET['num'])) {
			$n = intval($_GET['num']);

			$num1 = 0;
			$num2 = 0;
			$num3 = 1;

			echo "$num3 ";

			for ($i = 0; $i < $n - 1; $i++) {
				$temp = $num1 + $num2 + $num3;

				$num1 = $num2;
				$num2 = $num3;
				$num3 = $temp;

				echo "$num3 ";
			}
		}
		?>
	</body>
</html>