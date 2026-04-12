<?php

$conn = mysqli_connect("localhost","root","","fullstackdev");

if(!$conn){
die("Connection failed");
}

$name=$_POST['name'];
$email=$_POST['email'];
$password=$_POST['password'];
$phone=$_POST['phone'];
$gender=$_POST['gender'];

$sql="INSERT INTO new(name,email,password,phone,gender)
VALUES('$name','$email','$password','$phone','$gender')";

if(mysqli_query($conn,$sql)){
// 🔥 redirect to view page
header("Location: view.php");
}else{
echo "Error: ".mysqli_error($conn);
}

mysqli_close($conn);

?>