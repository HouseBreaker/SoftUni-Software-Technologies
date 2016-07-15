<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>First Steps Into PHP</title>

    </head>
    <body>
        <form>
            X: <input type="text" name="num1"/>
            Y: <input type="text" name="num2"/>
            Z: <input type="text" name="num3"/>
            <input type="submit"/>
        </form>
        <?php
        if (isset($_GET['num1']) && isset($_GET['num2']) && isset($_GET['num2'])) {
            $n1 = $_GET['num1'];
            $n2 = $_GET['num2'];
            $n3 = $_GET['num3'];

            $numberOfNegatives = 0;
            $productPositiveOrNegative = "";

            foreach (array($n1, $n2, $n3) as $num) {
                if ($num == 0) {
                    echo "Positive";
                    exit;
                }

                if ($num < 0) {
                    $numberOfNegatives++;
                }
            }

            if ($numberOfNegatives % 2 == 0) {
                echo "Positive";
            } else {
                echo "Negative";
            }
        }
        ?>
    </body>
</html>