<?php
    $title = "Palindrome";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?></title>
</head>
<body>
    <form id="palindrome">
        <h2>Is it a Palindrome?</h2>
        <div class="form-field">
            <label for="text-input">Enter text</label>
            <input type="text" id="text-input" name="text-input">
        </div>

        <button id="check-btn" type="submit">Check</button>

        <p id="result" aria-live="polite"></p>
    </form>

    <script src="palindrome.js"></script>
</body>
</html>