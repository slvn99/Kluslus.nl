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
			$sql = "select * from users WHERE user_uid='$uid'";
		}

	}
} else {
	header("Location: ../register.php");
	exit();
}