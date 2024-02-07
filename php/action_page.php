<?php 
	$mysqli = false;
	function connectDB () {
		global $mysqli;
		$mysqli = new mysqli ("white.fin.guevin1.com", "olga", "2St*By7wKdxG/Zqy", "olga ");
		$mysqli -> query("SET NAMES 'UTF-8'")
	}

	function closeDB (){
		global $mysqli;
		$mysqli -> close ();
	}
?>