<?php
// Connect to the database
$servername = "your_database_server";
$username = "your_username";
$password = "your_password";
$dbname = "attendance_system";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from the AJAX request
$studentName = $_POST['studentName'];
$attendanceStatus = $_POST['attendanceStatus'];

// Insert data into the database
$sql = "INSERT INTO students (name, attendance_status) VALUES ('$studentName', '$attendanceStatus')";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
