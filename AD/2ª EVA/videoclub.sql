-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-12-2024 a las 13:40:23
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
-- Base de datos: `videoclub`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alquiler`
--

CREATE TABLE `alquiler` (
  `codalquiler` int(4) NOT NULL,
  `codpelicula` int(4) DEFAULT NULL,
  `codsocio` int(4) DEFAULT NULL,
  `fechaalquiler` date DEFAULT NULL,
  `dias` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `alquiler`
--

INSERT INTO `alquiler` (`codalquiler`, `codpelicula`, `codsocio`, `fechaalquiler`, `dias`) VALUES
(1, 115, 2365, '1995-10-01', 2),
(2, 123, 3860, '1995-10-01', 3),
(3, 159, 4289, '1995-10-01', 1),
(4, 214, 1274, '1995-10-02', 2),
(5, 452, 1794, '1995-10-02', 1),
(6, 492, 5320, '1995-10-02', 2),
(7, 789, 4101, '1995-10-02', 3),
(8, 100, 6532, '1995-10-03', 2),
(9, 883, 8129, '1995-10-03', 2),
(10, 919, 4101, '1995-10-03', 2),
(11, 924, 4289, '1995-10-04', 1),
(12, 936, 5320, '1995-10-04', 2),
(13, 949, 6532, '1995-10-04', 3),
(14, 967, 7932, '1995-10-04', 2),
(15, 980, 8129, '1995-10-04', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `codpelicula` int(4) NOT NULL,
  `titulo` varchar(50) DEFAULT NULL,
  `tema` varchar(20) DEFAULT NULL,
  `duracion` int(3) DEFAULT NULL,
  `precio` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`codpelicula`, `titulo`, `tema`, `duracion`, `precio`) VALUES
(100, 'Casper', 'Comedia', 124, '2.00'),
(115, 'El libro de la Selva', 'Aventuras', 132, '2.00'),
(123, 'Batman Forever', 'Aventuras', 98, '3.00'),
(146, 'Rob Roy', 'Drama', 113, '1.00'),
(159, 'Historias del Kronen', 'Drama', 105, '1.00'),
(214, 'Cadena Perpetua', 'Drama', 90, '1.00'),
(307, 'Estallido', 'Intriga', 140, '3.00'),
(452, 'Un indio en París', 'Comedia', 95, '1.00'),
(492, 'Circulo de amigos', 'Drama', 112, '2.00'),
(560, 'Antes de Amanecer', 'Comedia', 97, '1.00'),
(663, 'El guardián de las palabras', 'Aventuras', 121, '2.00'),
(712, 'Quiz Show', 'Intriga', 110, '2.00'),
(789, 'Dos tontos muy tontos', 'Comedia', 134, '3.00'),
(883, 'La Mascara', 'Comedia', 142, '3.00'),
(901, 'Suspiros de España (y Portugal)', 'Comedia', 92, '1.00'),
(919, 'Double Dragon', 'Aventuras', 103, '2.00'),
(924, 'El Primer Caballero', 'Aventuras', 101, '3.00'),
(936, 'Congo', 'Intriga', 130, '3.00'),
(949, 'Water World', 'Aventuras', 121, '2.00'),
(967, 'Desperado', 'Aventuras', 108, '3.00'),
(980, 'Causa Justa', 'Intriga', 113, '3.00'),
(1020, 'Toy Story', 'Aventuras', 104, '3.00'),
(1032, 'Las dos caras de la verdad', 'Intriga', 123, '3.00'),
(1040, 'Misión Imposible', 'Aventuras', 136, '3.00'),
(1052, 'Un loco a domicilio', 'Comedia', 110, '2.00'),
(1065, 'Como conquistar Hollywood', 'Comedia', 95, '2.00'),
(1072, 'Tres Deseos', 'Drama', 112, '3.00'),
(1083, 'Cautivos', 'Drama', 127, '1.00'),
(1090, 'Días de Fortuna', 'Drama', 133, '3.00'),
(1102, 'El Presidente y Miss Wade', 'Comedia', 111, '1.00'),
(1109, 'Sabrina y sus amores', 'Comedia', 101, '1.00'),
(1117, 'Una Proposición Indecente', 'Drama', 124, '2.00'),
(1123, 'Una Jaula de Grillos', 'Comedia', 105, '3.00'),
(1134, 'La letra Escarlata', 'Drama', 119, '2.00'),
(1140, 'City Hall', 'Drama', 98, '3.00'),
(1153, 'Two Much', 'Comedia', 103, '2.00'),
(1162, 'Ace Ventura Operación África', 'Comedia', 116, '3.00'),
(1170, 'Todo por un Sueño', 'Drama', 100, '1.00'),
(1188, 'Tierra peligrosa', 'Aventuras', 131, '2.00'),
(1193, 'El informe pelícano', 'Aventuras', 114, '1.00'),
(1203, 'Mr. Jones', 'Drama', 102, '1.00'),
(1212, 'El Abogado del Diablo', 'Intriga', 114, '2.00'),
(1222, 'Eternamente joven', 'Drama', 97, '1.00'),
(1234, 'Ojo por ojo', 'Drama', 115, '3.00'),
(1241, 'Leyendas de Pasión', 'Drama', 141, '3.00'),
(1253, 'Esperando un Respiro', 'Comedia', 103, '2.00'),
(1267, 'La red', 'Intriga', 129, '3.00'),
(1273, 'Eraser', 'Aventuras', 133, '3.00'),
(1288, 'Salto al vacío', 'Aventuras', 100, '1.00'),
(1295, 'Golden Eye', 'Aventuras', 119, '2.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `socios`
--

CREATE TABLE `socios` (
  `codsocio` int(4) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `apellidos` varchar(60) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `telefono` varchar(12) DEFAULT NULL,
  `poblacion` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `socios`
--

INSERT INTO `socios` (`codsocio`, `nombre`, `apellidos`, `direccion`, `telefono`, `poblacion`) VALUES
(1274, 'Luis', 'Sánchez Aguado', 'Colón, 31', '3657432', 'Valencia'),
(1794, 'Manuel', 'García Roble', 'Gran Vía, 78', '3958472', 'Valencia'),
(2365, 'Eva', 'Prats Ruíz', 'Ercilla, 8', '3568976', 'Valencia'),
(3860, 'Sergio', 'Oliver Perís', 'Salinas, 5', '3456789', 'Xátiva'),
(4101, 'Jaime', 'Navarro Lard', 'Magallanes, 21', '3242413', 'Utiel'),
(4289, 'Elisa', 'García Olmos', 'Juan de Mena. 11', '3948372', 'Gandía'),
(5320, 'Pedro', 'Lorenzo Fernández', 'Sueca, 45', '3234888', 'Valencia'),
(6532, 'Vicente', 'Tamarit Valls', 'Mirador, 3', '3087689', 'Utiel'),
(7932, 'Daniel', 'López Pérez', 'Monte Mayor, 42', '3232387', 'Gandía'),
(8129, 'Sonia', 'Sastre Vives', 'Carteros, 23', '3927472', 'Xátiva');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alquiler`
--
ALTER TABLE `alquiler`
  ADD PRIMARY KEY (`codalquiler`),
  ADD KEY `alquiler_socios_fk` (`codsocio`),
  ADD KEY `alquiler_peliculas_fk` (`codpelicula`);

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`codpelicula`);

--
-- Indices de la tabla `socios`
--
ALTER TABLE `socios`
  ADD PRIMARY KEY (`codsocio`);

--
-- Restricciones para tablas volcadas
--


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
