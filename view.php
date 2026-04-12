<?php
$conn=mysqli_connect("localhost","root","","fullstackdev");

$result=mysqli_query($conn,"SELECT * FROM new");

echo "<h2>User Data</h2>";
echo "<a href='index.html'>Add New User</a><br><br>";

echo "<table border='1' cellpadding='10'>";
echo "<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Gender</th>
<th>Action</th>
</tr>";

while($row=mysqli_fetch_assoc($result)){
echo "<tr>";
echo "<td>".$row['id']."</td>";
echo "<td>".$row['name']."</td>";
echo "<td>".$row['email']."</td>";
echo "<td>".$row['phone']."</td>";
echo "<td>".$row['gender']."</td>";

echo "<td>
<a href='edit.php?id=".$row['id']."'>Edit</a> |
<a href='delete.php?id=".$row['id']."'>Delete</a>
</td>";

echo "</tr>";
}

echo "</table>";
?>