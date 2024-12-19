-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-10-2024 a las 11:25:22
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `informática`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `idEquipo` int(11) NOT NULL,
  `marca` varchar(30) NOT NULL,
  `modelo` varchar(30) NOT NULL,
  `descripcion` varchar(40) NOT NULL,
  `pulgadasPantalla` int(11) NOT NULL,
  `capacidadDisco` int(11) NOT NULL,
  `gbMemoria` int(11) NOT NULL,
  `precio` decimal(6,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `equipos` (`idEquipo`, `marca`, `modelo`, `descripcion`, `pulgadasPantalla`, `capacidadDisco`, `gbMemoria`, `precio`) VALUES
(1, 'HP', 'EliteBook', 'Un ordenador portátil flexible, potente,', 15, 5000, 16, '700.00'),
(2, 'Asus', 'Vivobook', 'Los portátiles Asus Vivobook son una inv', 13, 1000, 16, '670.00'),
(3, 'Apple', 'MacBook Pro M1 2020', 'Potente y elegante computadora portátil ', 16, 1000, 16, '2649.00'),
(4, 'MSI', 'GT76 Titan', 'El GT Titan rompe todos los registros co', 16, 1000, 32, '4698.00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD PRIMARY KEY (`idEquipo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
