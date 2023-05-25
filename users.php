<?php
echo 'The Password, Username, and other things
are incorrect so the code will not run because of the 
wrong credentials to connect to myphpadmin';
$conn = mysqli_connect('localhost', 'root', '123456', 'ajaxtest');;
$query = 'SELECT * FORM users';

//Get results
$result = mysqli_query($conn, $query);

//Fetch Data
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($users);
