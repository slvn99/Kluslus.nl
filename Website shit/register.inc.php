<?php

if (isset($_POST['submit'])) {
	include_once 'dbh.inc.php';

	$vnaam = mysqli_rea_escape_string($conn, $_POST['vnaam']);
	$lnaam = mysqli_rea_escape_string($conn, $_POST['lnaam']);
	$email = mysqli_rea_escape_string($conn, $_POST['email']);
	$pass = mysqli_rea_escape_string($conn, $_POST['pass']);
	$gender = mysqli_rea_escape_string($conn, $_POST['gender']);

	if(empty($vnaam) || empty($lnaam) || empty($email) || empty($pass) || empty($gender)) {
		header("Location: ../register.php?signup=empty");
		exit();
	} else{
		if (!preg_match("/^[a-zA-Z]*$", $vnaam) || (!preg_match("/^[a-zA-Z]*$", $lnaam) 
		header("Location: ../register.php?signup=invalid");
		exit();
	} else {
		if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			header("Location: ../register.php?signup=email");
			exit();
		} else {
			$sql = "SELECT * FROM users WHERE user_uid='$uid'";
			$result = mysqli_query($conn, $sql);
			$resultCheck = mysqli_num_rows($result);

			if ($resultCheck > 0)  {
			header("Location: ../register.php?signup=usergebruikt");
				exit();
			} else {
				$hashedpass = PASSWORD_HASH($pass,  PASSWORD_DEFAULT);
				$sql = "INSERT INTO users (user_vnaam, user_lnaam, user_email, user_pass, user_gender) VALUES ('$vnaam', '$lnaam',  '$email', '$pass', '$gender');";
			 mysqli_query($conn,  $sql);
			 header("Location: ../register.php?signup=Success");
			 exit();
			}
		}

	}
} else {
	header("Location: ../register.php");
	exit();
}