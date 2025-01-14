<?php
    // Nos conectamos a la base de datos
    // host y base de datos, usuario, pass
    $pdo = new PDO('mysql:host=localhost;dbname=videoclub',
        'root',
        '');
    echo "Conexion realizada<br>";

    // variable con el codigo de la pelicula que queremos eliminar
    $codpelicula=100;

    // Creamos la sentencia
    $sentencia=$pdo->prepare("delete from peliculas where codpelicula=:codpelicula");
    // Damos valor a los parámetros
    $sentencia->bindParam(':codpelicula',$codpelicula);
    //Ejecutamos la sentencia
    $sentencia->execute();
    echo "Pelicula eliminada";
    $numRegistros = $sentencia->rowCount();
    echo "Numero de registros $numRegistros";
?>