
<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST['username'] ?? 'Guest';
  echo "Hello, " . htmlspecialchars($name);
} else {
  echo "Form not submitted.";
}
?>

