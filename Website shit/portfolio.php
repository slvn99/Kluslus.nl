<?php 
$database = new SQLiteDataBase('kluslus.db');
$sql = 'CREATE TABLE reacties (
		reactieid INTEGER PRIMARY KEY,
		name TEXT,
		comment TEXT
)';

 ?>