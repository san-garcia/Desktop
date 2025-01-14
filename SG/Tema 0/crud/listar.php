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
    // Volcamos los datos en bruto
    //var_dump($registros);

    // Mostramos los datos de la pelicula de la posicion 2
    for($posicion = 0; $posicion<count($registros); $posicion++){
        echo "Codigo: ".$registros[$posicion]['codpelicula']."<br>";
        echo "Título: ".$registros[$posicion]['titulo']."<br>";
        echo "Tema: ".$registros[$posicion]['tema']."<br>";
        echo "Duración: ".$registros[$posicion]['duracion']."<br>";
        echo "Precio: ".$registros[$posicion]['precio']."<br>";
        echo "<hr>";
    }

?>