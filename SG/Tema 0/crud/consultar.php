<?php

if(isset($_POST['consultar'])) {

    // Nos conectamos a la base de datos
    // host y base de datos, usuario, pass
    $pdo = new PDO('mysql:host=localhost;dbname=videoclub',
        'root',
        '');
    echo "Conexion realizada<br>";
    // Creamos la sentencia
    $sentencia=
        $pdo->prepare("select * from peliculas where codpelicula=:codpelicula");
    // Damos valor al parámetro :codpelicula
    $codpelicula = $_POST['codpelicula'];
    $sentencia->bindParam(':codpelicula', $codpelicula);
    // Ejecutamos la sentencia
    $sentencia->execute();
    // Recuperamos los registros
    $registros = $sentencia->fetchAll(PDO::FETCH_ASSOC);
    // Recorrer el resultado y mostrarlo
    for($posicion = 0; $posicion<count($registros); $posicion++){
        echo "Codigo: ".$registros[$posicion]['codpelicula']."<br>";
        echo "Título: ".$registros[$posicion]['titulo']."<br>";
        echo "Tema: ".$registros[$posicion]['tema']."<br>";
        echo "Duración: ".$registros[$posicion]['duracion']."<br>";
        echo "Precio: ".$registros[$posicion]['precio']."<br>";
        echo "<hr>";
    }

} else {
    header("Location: formConsultar.html");
}
?>