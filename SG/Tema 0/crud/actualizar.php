<?php
    // Nos conectamos a la base de datos
    // host y base de datos, usuario, pass
    $pdo = new PDO('mysql:host=localhost;dbname=videoclub',
        'root',
        '');
    echo "Conexion realizada<br>";

    // Codigo Pelicula que queremos actualizar
    $codpelicula = 20000;

    // Creamos la sentencia
    $sentencia=$pdo->prepare(
        "update peliculas set titulo=:titulo, 
            tema=:tema, 
            duracion=:duracion, 
            precio=:precio 
            where codpelicula=:codpelicula");
    // Creamos variables con los nuevos datos
    $titulo = "Mar adentro";
    $tema = "drama";
    $duracion = 200;
    $precio = 4.4;
    // Damos valor a los parámetros
    $sentencia->bindParam(':titulo', $titulo);
    $sentencia->bindParam(':tema', $tema);
    $sentencia->bindParam(':duracion', $duracion);
    $sentencia->bindParam(':precio', $precio);
    $sentencia->bindParam(':codpelicula', $codpelicula);
    // Ejecutamos la sentencia
    $sentencia->execute();
    echo "Pelicula Actualizada";




?>