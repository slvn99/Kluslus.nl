<!DOCTYPE HTML>
<HTML>
	<HEAD>
		<META charset="utf-8">
		<TITLE>Transparante login form</TITLE>
		<LINK rel="stylesheet" href ="registratie.css">
		
		
	</HEAD>
	<BODY>
		
		<DIV class="registerbox">
			<FORM id="registration" action="INCLUDES/register.inc.php">
				<INPUT type="text" name="vnaam" id="button" placeholder="Voornaam"><BR><BR>
				<INPUT type="text" name="lnaam" id="button" placeholder="Achternaam"><BR><BR>
				<INPUT type="email" name="email" id="button" placeholder="Email adres"><BR><BR>
				<INPUT type="password" name="pass" id="button" placeholder="Wachtwoord"><BR><BR>
				<INPUT type ="radio" name="gender" id ="rd"><span id="of">Man</span><input type ="radio" naam = "gender" id="rd"><span id="of">Vrouw</span>
				<INPUT type="submit" name= "submit" value="Registreren" id="regist">
			</FORM>
		</DIV>
	</BODY>
</HTML>