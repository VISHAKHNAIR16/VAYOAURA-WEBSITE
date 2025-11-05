<?php
// Start session to store CID
session_start();

// Database connection (optional, use if tracking in MySQL)
$host = "srv1674.hstgr.io";
$user = "u704095602_ali";
$pass = "Chellom1234@";
$dbname = "u704095602_vayoaura";

// Create connection
$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}


// Function to generate a unique CID
function generateCID() {
    return rand(100000, 999999); // Generate 6-digit CID
}

// Check if CID exists in session or cookie
if (isset($_COOKIE['user_cid'])) {
    $cid = $_COOKIE['user_cid'];
} else {
    $cid = generateCID();
    setcookie("user_cid", $cid, time() + (86400 * 30), "/"); // Store for 30 days
}

// Store CID in MySQL for tracking (optional)
$ip = $_SERVER['REMOTE_ADDR'];
$sql = "INSERT INTO cid_tracking (cid, ip_address) VALUES ('$cid', '$ip')";
$conn->query($sql);

$conn->close();

// Redirect to Agoda with CID
$redirect_url = "https://www.agoda.com/partners/?cid=" . $cid;
header("Location: " . $redirect_url);
exit();
?>