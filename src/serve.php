<?php

    print_r($_POST);
    $query = $_POST['question'];

    $response = '¿Es esta tu pregunta? - ' . $query;

    echo $response;
?>