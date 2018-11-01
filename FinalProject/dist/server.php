<?php

if (isset($_POST["user_name"]) && isset($_POST["user_phone"]) ) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'user_name' => $_POST["user_name"],
    	'user_phone' => $_POST["user_phone"]
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}

?>