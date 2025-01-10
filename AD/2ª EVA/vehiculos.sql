-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-01-2020 a las 12:16:45
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `concesionario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculos`
--

CREATE TABLE `vehiculos` (
  `matricula` varchar(15) DEFAULT 'NULL',
  `marca` varchar(20) DEFAULT NULL,
  `modelo` varchar(40) DEFAULT NULL,
  `precio` decimal(8,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `vehiculos`
--

INSERT INTO `vehiculos` (`matricula`, `marca`, `modelo`, `precio`) VALUES
('V-2360-DX', 'Opel', 'Corsa 1.2 Sport', '14000.00'),
('V-1010-PB', 'Ford', 'Probe 2.0 16V', '39000.00'),
('M-4578-DB', 'Ford', 'Orion 1.8 Ghia', '21000.00'),
('B-1222-HY', 'Yamaha', 'FZR 1100', '11000.00'),
('A-7640- DU', 'Citroen', 'Xantia 16V', '32000.00'),
('M-3543- NC', 'Ford', 'Escort 1.6 Ghia', '20500.00'),
('B-7632-NX', 'Citroen', 'Zx Turbo-D', '26000.00'),
('B-4876-KK', 'Honda', 'CBR 600', '6700.00'),
('M-8018- LJ', 'Ford', 'Fiesta 1.4 CLX', '14500.00'),
('V-2565- NB', 'Renault', 'Clio 1.7 S', '16000.00'),
('V-4371-ES', 'Kawasaki', 'GPZ 500', '3500.00'),
('V-7642- DU', 'Ford', 'Mondeo 1.8 GLX', '28600.00'),
('V-1234- LC', 'Audi', 'A4 1.9', '36000.00'),
('A-9834-LH', 'Peugeot', '205 GTI', '21000.00'),
('A-3832-AM', 'Kawasaki', 'GPX 600', '6200.00'),
('V-6345-DD', 'Lancia', 'Delta Integrale', '14500.00'),
('M-9683-HR', 'Honda', 'CB 750', '9470.00'),
('B-2213-FD', 'Chrysler', '180', '4500.00'),
('M-4764-GH', 'Matra', 'Bagheera', '9000.00'),
('A-9583- AD', 'Citroen', 'Ax Turbo-D', '6400.00'),
('M-4334- AC', 'BMW', 'K-100', '9600.00'),
('V-4753- EJ', 'Mitsubishi', 'Eclipse GS 16V', '45000.00'),
('M-9457- FF', 'Ford', 'Escort 1.6 CLD', '8950.00'),
('B-5432-PC', 'Mercedes', 'C280', '54000.00'),
('V-7846-DF', 'Ford', 'Escort 1.3 CL', '5600.00'),
('V-8945- CP', 'Montesa', 'Enduro 250 H7', '1450.00'),
('A-4874-CD', 'Nissan', 'Patrol', '19000.00'),
('B-4762-GH', 'Opel', 'Omega 2.0 CD', '17000.00'),
('M-8746- PQ', 'Nissan', 'Bluebird 2.0 SLX', '18200.00'),
('B-3476-KL', 'Renault', 'Voyager', '23000.00'),
('B-9944-HJ', 'Suzuki', 'GS-750', '5400.00'),
('V-8464-EF', 'Renault', 'R-19 16V', '18000.00'),
('A-7476-AA', 'Seat', '850 Spider', '9500.00'),
('B-6694- KD', 'Renault', 'Megane RN 1.4', '19000.00'),
('V-4764-EH', 'Volkswagen', 'Polo', '13000.00'),
('B-7846-BB', 'Renault', 'Cinco', '3450.00'),
('A-3484- AC', 'Volkswagen', 'Multivan 4x4', '23000.00'),
('V-4723-EG', 'Yamaha', 'Scooter', '1200.00'),
('M-7646-HI', 'Volkswagen', 'Golf GTI', '13500.00'),
('V-3357-DX', 'Suzuki', 'GS 500', '7300.00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
