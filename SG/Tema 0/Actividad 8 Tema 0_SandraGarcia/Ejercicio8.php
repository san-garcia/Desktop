<?php
    // Declaramos una constante llamada euro y le asignamos el valor 166.386
    define("Euro", 166.386);

    // Creamos una variable sueldo y gasto 
    $sueldo = 100;
    $gasto = 50;
    
    // Mostramos 
    echo "Sueldo ".$gasto." en pesetas pasados a euros ".number_format($gasto/166.386, 4, ",",".")."<br>";
    echo "Sueldo ".$sueldo." en euros pasados a pesetas ".$sueldo*166.386."<br>";
    
?>