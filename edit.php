<?php
$conn=mysqli_connect("localhost","root","","fullstackdev");

$id=$_GET['id'];

$result=mysqli_query($conn,"SELECT * FROM new WHERE id=$id");
$row=mysqli_fetch_assoc($result);
?>

<h2>Edit User</h2>

<form method="POST">

Name: <input type="text" name="name" value="<?php echo $row['name']; ?>"><br><br>
Email: <input type="text" name="email" value="<?php echo $row['email']; ?>"><br><br>
Phone: <input type="text" name="phone" value="<?php echo $row['phone']; ?>"><br><br>

Gender:
<input type="radio" name="gender" value="Male" <?php if($row['gender']=="Male") echo "checked"; ?>> Male
<input type="radio" name="gender" value="Female" <?php if($row['gender']=="Female") echo "checked"; ?>> Female

<br><br>

<input type="submit" name="update" value="Update">

</form>

<?php
if(isset($_POST['update'])){
$name=$_POST['name'];
$email=$_POST['email'];
$phone=$_POST['phone'];
$gender=$_POST['gender'];

mysqli_query($conn,"UPDATE new 
SET name='$name', email='$email', phone='$phone', gender='$gender'
WHERE id=$id");

header("Location:view.php");
}
?>