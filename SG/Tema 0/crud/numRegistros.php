<?php
    // Nos conectamos a la base de datos
    // host y base de datos, usuario, pass
    $pdo = new PDO('mysql:host=localhost;dbname=videoclub',
        'root',
        '');
    echo "Conexion realizada<br>";
    
    // Creamos la sentencia
    $sentencia = $pdo->query("select * from peliculas");
    // Ejecutamos la sentencia
    $sentencia->execute();
    // Recuperamos los registros en un array multidimensional
    $registros = $sentencia->fetchAll(PDO::FETCH_ASSOC);
    // Obtenemos el numero de registros
    $numRegistros = $sentencia->rowCount();
    echo "Numero de registros $numRegistros";
?>