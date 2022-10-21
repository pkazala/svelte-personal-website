<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <h1>Frame Price Estimator</h1>
    <p>Please enter your photo sizes to get a framing cost estimate</p>
    <div class="flex-container">
        <form action="frame.php" method="get" class="grid">
            <label for="width">Photo width (in mm):</label><br />
            <input type="text" id="width" name="width" value="" /><br />
            <label for="height">Photo height (in mm):</label><br />
            <input type="text" id="height" name="height" value="" /><br /><br />
            <input type="submit" value="Submit" />
        </form>
    </div>
    <p><?php

        $width = (int)$_GET["width"] / 1000;
        $height = (int)$_GET["height"] / 1000;
        $price = ($width * $height)**2 + 90 * ($width * $height) + 8;

        echo "Your frame will cost £" . number_format((float)$price, 2, '.', '');

        ?></p>
</body>

</html>