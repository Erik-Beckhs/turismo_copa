-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-12-2022 a las 03:16:22
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_copa_turismo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `accesstoken`
--

CREATE TABLE `accesstoken` (
  `id` varchar(255) NOT NULL,
  `ttl` int(11) DEFAULT NULL,
  `scopes` text DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acl`
--

CREATE TABLE `acl` (
  `id` int(11) NOT NULL,
  `model` varchar(512) DEFAULT NULL,
  `property` varchar(512) DEFAULT NULL,
  `accessType` varchar(512) DEFAULT NULL,
  `permission` varchar(512) DEFAULT NULL,
  `principalType` varchar(512) DEFAULT NULL,
  `principalId` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `atractivo`
--

CREATE TABLE `atractivo` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `informacion` longtext COLLATE utf8_spanish2_ci NOT NULL,
  `ubicacion` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `comunidad` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `como_llegar` varchar(300) COLLATE utf8_spanish2_ci NOT NULL,
  `jerarquia` varchar(5) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `categoria` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `img_principal` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `tipo` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `subtipo` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `descripcion` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `atractivo`
--

INSERT INTO `atractivo` (`id`, `nombre`, `informacion`, `ubicacion`, `comunidad`, `como_llegar`, `jerarquia`, `categoria`, `img_principal`, `tipo`, `subtipo`, `descripcion`) VALUES
(1, 'Iglesia de Copacabana', '<p>La Basílica posee una imponente belleza y u<strong>na gran colección de objetos religiosos</strong></p>', 'Plaza Principal de Copacabana', 'Kusijata', 'facil', 'II', 'Etnografía y Folklore', '', 'Folklore Espiritual Mental', 'Monumentos, edificios y obras de arquitectura', 'descripcion de la iglesia'),
(6, 'inca banderani', '<p>asdasdasd</p>', 'asdasd', 'Sampaya', 'asdsad', 'III', 'Patrimonio Urbano Arquitectónico', '', 'Asentación Humanos y Arquitectura Viva', 'Sitios o Conjuntos', 'asdasd'),
(7, 'asiento del inca', '<p>esta es la descripcion</p>', 'asdasd', 'Sampaya', 'asdasd', 'II', 'Patrimonio Urbano Arquitectónico', '', 'Museos y Salas de Exposición', 'Sitios o Conjuntos', 'asdasd'),
(8, 'plaza principal', '<p>que pas<strong>a causas<span class=\"ql-cursor\">﻿</span></strong></p>', 'asd', 'Locka', 'asdsad', 'IV', 'Patrimonio Urbano Arquitectónico', '', 'Folklore Espiritual Mental', 'Arquitectura y Arte', 'asdsad'),
(9, 'plazuela del sapo', '<p>hola q ase</p>', 'sss', 'Sampaya', 'ddd', 'III', 'Patrimonio Urbano Arquitectónico', '', 'Folklore Espiritual Mental', 'Centros Poblados y Ciudades', 'aa'),
(10, 'este si, este no', '<p>hola q aseasdsa</p>', 'asdasd', 'Sampaya', 'asdsad', 'III', 'Patrimonio Urbano Arquitectónico', '', 'Folklore Espiritual Mental', 'Monumentos, edificios y obras de arquitectura', 'asdsad'),
(11, 'observatorio astronomico', '<p>hola q aseasdasd</p>', 'asdsad', 'Marca Kosco', 'asdasd', 'III', 'Eventos Programados', '', 'Asentación Humanos y Arquitectura Viva', 'Arquitectura y Arte', 'asdsad'),
(12, 'observatorio de los incas', '<p>hola q aseasdasd</p>', 'asdsad', 'Marca Kosco', 'asdasd', 'III', 'Eventos Programados', '', 'Asentación Humanos y Arquitectura Viva', 'Arquitectura y Arte', 'asdsad'),
(13, 'boca del sapo 2', '<p><strong>asdsadas  <u>asdsad</u></strong></p>', 'aaa', 'Kusijata', 'asdsadsss', 'III', 'Eventos Programados', '', 'Museos y Salas de Exposición', 'Monumentos, edificios y obras de arquitectura', 'descr'),
(14, 'nuevo atractivo', '<p>asdasd</p>', 'asdasd', 'Kusijata', 'asdsad', '', NULL, '', '', '', 'asdasd');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `atractivo_articulo`
--

CREATE TABLE `atractivo_articulo` (
  `id` int(11) NOT NULL,
  `id_atractivo` int(11) NOT NULL,
  `articulo` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `atractivo_articulo`
--

INSERT INTO `atractivo_articulo` (`id`, `id_atractivo`, `articulo`) VALUES
(7, 11, 'Sombrilla'),
(8, 11, 'Botiquin'),
(9, 11, 'Agua'),
(10, 11, 'Sombrero'),
(11, 11, NULL),
(20, 1, 'Sombrilla'),
(21, 1, 'Sombrero'),
(22, 1, 'Botiquin'),
(23, 1, 'Agua'),
(32, 6, 'Ropa Ligera'),
(33, 6, 'Toalla'),
(36, 9, 'Sombrilla'),
(37, 9, 'Ropa Ligera'),
(38, 9, 'Sombrero'),
(39, 9, 'Botiquin'),
(40, 14, 'Tenis'),
(41, 14, 'Toalla'),
(42, 12, 'Bolsas Nylon'),
(43, 12, 'Sombrilla'),
(44, 12, 'Sombrero'),
(45, 12, 'Agua'),
(46, 12, 'Botiquin'),
(47, 7, 'Agua'),
(48, 7, 'Cedula de Identidad'),
(49, 7, 'Almohada de viaje');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hospedaje`
--

CREATE TABLE `hospedaje` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `titular` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `precio_max` decimal(10,2) DEFAULT NULL,
  `precio_min` decimal(10,2) NOT NULL,
  `categoria` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `direccion` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `pagina_web` varchar(300) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `telefono` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `cel_whatsapp` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `facebook` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `informacion` longtext COLLATE utf8_spanish2_ci NOT NULL,
  `img_principal` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `tipo` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `hospedaje`
--

INSERT INTO `hospedaje` (`id`, `nombre`, `titular`, `precio_max`, `precio_min`, `categoria`, `direccion`, `pagina_web`, `telefono`, `cel_whatsapp`, `facebook`, `informacion`, `img_principal`, `tipo`) VALUES
(4, 'La Cupula', 'Dennis Espejo', '500.00', '100.00', '3', 'Av. Michel Perez Esq. San Antonio', NULL, '28622523', NULL, NULL, '', '', 'Hotel');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hosped_servicio`
--

CREATE TABLE `hosped_servicio` (
  `id` int(11) NOT NULL,
  `id_hospedaje` int(11) NOT NULL,
  `servicio` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `tipo_servicio` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `icono` varchar(80) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hosped_thabitacion`
--

CREATE TABLE `hosped_thabitacion` (
  `id` int(11) NOT NULL,
  `id_hospedaje` int(11) NOT NULL,
  `tipo_habitacion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `icono` varchar(80) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `multimedia`
--

CREATE TABLE `multimedia` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `ruta` varchar(300) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `tipo` varchar(20) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `pertenece_a` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id_padre` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticia`
--

CREATE TABLE `noticia` (
  `id` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `titulo` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `informacion` longtext COLLATE utf8_spanish2_ci DEFAULT NULL,
  `img_principal` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fecha_publicacion` date DEFAULT NULL,
  `categoria` varchar(300) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `noticia`
--

INSERT INTO `noticia` (`id`, `id_user`, `titulo`, `informacion`, `img_principal`, `fecha_publicacion`, `categoria`) VALUES
(1, NULL, 'string', 'string', 'string', '2022-12-13', 'string');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resena`
--

CREATE TABLE `resena` (
  `id` int(11) NOT NULL,
  `autor` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `titulo` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `descripcion` varchar(500) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha_publicacion` date NOT NULL,
  `estado` char(1) COLLATE utf8_spanish2_ci NOT NULL,
  `imagen` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `resena`
--

INSERT INTO `resena` (`id`, `autor`, `titulo`, `descripcion`, `fecha_publicacion`, `estado`, `imagen`) VALUES
(8, 'string', 'string', 'string', '2022-12-19', '1', 'string'),
(10, 'string', 'string', 'string', '2022-12-19', '0', 'string');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `description` varchar(512) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rolemapping`
--

CREATE TABLE `rolemapping` (
  `id` int(11) NOT NULL,
  `principalType` varchar(512) DEFAULT NULL,
  `principalId` varchar(255) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `realm` varchar(512) DEFAULT NULL,
  `username` varchar(512) DEFAULT NULL,
  `password` varchar(512) NOT NULL,
  `email` varchar(512) NOT NULL,
  `emailVerified` tinyint(1) DEFAULT NULL,
  `verificationToken` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `accesstoken`
--
ALTER TABLE `accesstoken`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `acl`
--
ALTER TABLE `acl`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `atractivo`
--
ALTER TABLE `atractivo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `atractivo_articulo`
--
ALTER TABLE `atractivo_articulo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_ia` (`id_atractivo`);

--
-- Indices de la tabla `hospedaje`
--
ALTER TABLE `hospedaje`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `hosped_servicio`
--
ALTER TABLE `hosped_servicio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_iho` (`id_hospedaje`);

--
-- Indices de la tabla `hosped_thabitacion`
--
ALTER TABLE `hosped_thabitacion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_ih` (`id_hospedaje`);

--
-- Indices de la tabla `multimedia`
--
ALTER TABLE `multimedia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `noticia`
--
ALTER TABLE `noticia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_iu` (`id_user`);

--
-- Indices de la tabla `resena`
--
ALTER TABLE `resena`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rolemapping`
--
ALTER TABLE `rolemapping`
  ADD PRIMARY KEY (`id`),
  ADD KEY `principalId` (`principalId`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `acl`
--
ALTER TABLE `acl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `atractivo`
--
ALTER TABLE `atractivo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `atractivo_articulo`
--
ALTER TABLE `atractivo_articulo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de la tabla `hospedaje`
--
ALTER TABLE `hospedaje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `hosped_servicio`
--
ALTER TABLE `hosped_servicio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `hosped_thabitacion`
--
ALTER TABLE `hosped_thabitacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `multimedia`
--
ALTER TABLE `multimedia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `noticia`
--
ALTER TABLE `noticia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `resena`
--
ALTER TABLE `resena`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rolemapping`
--
ALTER TABLE `rolemapping`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `atractivo_articulo`
--
ALTER TABLE `atractivo_articulo`
  ADD CONSTRAINT `fk_ia` FOREIGN KEY (`id_atractivo`) REFERENCES `atractivo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `hosped_servicio`
--
ALTER TABLE `hosped_servicio`
  ADD CONSTRAINT `fk_iho` FOREIGN KEY (`id_hospedaje`) REFERENCES `hospedaje` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `hosped_thabitacion`
--
ALTER TABLE `hosped_thabitacion`
  ADD CONSTRAINT `fk_ih` FOREIGN KEY (`id_hospedaje`) REFERENCES `hospedaje` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `noticia`
--
ALTER TABLE `noticia`
  ADD CONSTRAINT `fk_iu` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
