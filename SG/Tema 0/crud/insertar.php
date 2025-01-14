<?php
    // Nos conectamos a la base de datos
    // host y base de datos, usuario, pass
    $pdo = new PDO('mysql:host=localhost;dbname=videoclub',
        'root',
        '');
    echo "Conexion realizada<br>";

    // Creamos la sentencia
    $sentencia=$pdo->prepare
       ("insert into peliculas values (:codpelicula, :titulo, :tema, :duracion, :precio)");
    // Damos valor a los parámetros
    $codpelicula = 20000;
    $titulo = "La marca del agua";
    $tema = "Intriga";
    $duracion = 100;
    $precio= 3.4;
    $sentencia->bindParam(':codpelicula', $codpelicula);
    $sentencia->bindParam(':titulo', $titulo);
    $sentencia->bindParam(':tema', $tema);
    $sentencia->bindParam(':duracion', $duracion);
    $sentencia->bindParam(':precio', $precio);
    // Ejecutamos la sentencia
    $sentencia->execute();
    echo "Inserción realizada";
?>