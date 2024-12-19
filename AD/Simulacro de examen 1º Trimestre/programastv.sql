-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-10-2021 a las 20:18:49
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `antena3`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `programastv`
--

CREATE TABLE `programastv` (
  `idPrograma` int(5) NOT NULL,
  `nombrePrograma` varchar(50) NOT NULL,
  `audiencia` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `programastv`
--

INSERT INTO `programastv` (`idPrograma`, `nombrePrograma`, `audiencia`) VALUES
(1, 'La ruleta de la fortuna', 2500000),
(2, 'El hormiguero', 5600000),
(3, 'Antena 3 Noticias', 4250000),
(4, 'La Voz', 6875000);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `programastv`
--
ALTER TABLE `programastv`
  ADD PRIMARY KEY (`idPrograma`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
