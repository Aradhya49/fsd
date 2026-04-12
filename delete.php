<?php
$conn=mysqli_connect("localhost","root","","fullstackdev");

$id=$_GET['id'];

mysqli_query($conn,"DELETE FROM new WHERE id=$id");

header("Location:view.php");
?>