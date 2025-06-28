function sayHi() {
document.getElementById("result").innerText = "Hello, Om! 👋";
}


---

🐘 4. login.php

<?php  
if ($_SERVER["REQUEST_METHOD"] == "POST") {  
  $username = $_POST["username"];  
  $password = $_POST["password"];  
  
  if ($username == "admin" && $password == "1234") {  
    echo "Login successful! ✅";  
  } else {  
    echo "Invalid credentials ❌";  
  }  
}  
?>  
