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
			$n = $_GET['num'];
			
			for ($i = $n; $i >= 2; $i--) {
				if (isPrime($i)) {
					echo "$i\n";
				}
			}
		}

		function isPrime($num)
		{
			for ($i = 2; $i < $num; $i++) {
				if ($num % $i == 0) {
					return false;
				}
			}

			return true;
		}
		?>
	</body>
</html>