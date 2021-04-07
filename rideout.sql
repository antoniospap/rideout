-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Värd: localhost
-- Tid vid skapande: 19 mars 2021 kl 10:46
-- Serverversion: 8.0.18
-- PHP-version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `rideout`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `highscores`
--

CREATE TABLE `highscores` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `highScore` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumpning av Data i tabell `highscores`
--

INSERT INTO `highscores` (`id`, `user_id`, `highScore`, `date`) VALUES
(4, 'Antonios', 1, '2021-03-16'),
(5, 'Joa', 2, '2021-03-16'),
(6, 'Joa', 2, '2021-03-16'),
(7, 'Antonios', 2, '2021-03-16'),
(8, 'Antonios', 10, '2021-03-16'),
(9, 'Antonios', 10, '2021-03-16'),
(10, 'Antonios', 10, '2021-03-16'),
(11, 'Antonios', 0, '2021-03-16'),
(12, 'Antonios', 500, '2021-03-16'),
(13, 'Antonios', 400, '2021-03-16'),
(14, 'Antonios', 0, '2021-03-16'),
(15, 'Antonios', 0, '2021-03-16'),
(16, 'Antonios', 0, '2021-03-16'),
(17, 'Antonios', 0, '2021-03-16'),
(18, 'Antonios', 0, '2021-03-16'),
(19, 'Antonios', 0, '2021-03-16'),
(20, 'Antonios', 0, '2021-03-16'),
(21, 'Antonios', 0, '2021-03-16'),
(22, 'test', 0, '2021-03-17'),
(23, 'test', 0, '2021-03-17'),
(24, 'test', 0, '2021-03-17'),
(25, 'test', 1700, '2021-03-17'),
(26, 'test', 0, '2021-03-17'),
(27, 'test', 0, '2021-03-17'),
(28, 'test', 0, '2021-03-17'),
(29, 'test', 0, '2021-03-17'),
(30, 'test', 0, '2021-03-17'),
(31, 'test', 0, '2021-03-17'),
(32, 'test', 50, '2021-03-17'),
(33, 'test', 50, '2021-03-17'),
(34, 'test', 0, '2021-03-17'),
(35, 'test', 100, '2021-03-17'),
(36, 'test', 100, '2021-03-17'),
(37, 'test', 300, '2021-03-17'),
(38, 'test', 0, '2021-03-17'),
(39, 'test', 0, '2021-03-17'),
(40, 'test', 0, '2021-03-17'),
(41, 'test', 0, '2021-03-17'),
(42, 'test', 0, '2021-03-17'),
(43, 'test', 0, '2021-03-17'),
(44, 'test', 0, '2021-03-17'),
(45, 'test', 0, '2021-03-17'),
(46, 'test', 0, '2021-03-17'),
(47, 'test', 0, '2021-03-17'),
(48, 'test', 0, '2021-03-17'),
(49, 'test', 0, '2021-03-17'),
(50, 'test', 0, '2021-03-17'),
(51, 'test', 0, '2021-03-17'),
(52, 'test', 0, '2021-03-17'),
(53, 'test', 0, '2021-03-17'),
(54, 'test', 0, '2021-03-17'),
(55, 'test', 0, '2021-03-17'),
(56, 'test', 0, '2021-03-17'),
(57, 'test', 0, '2021-03-17'),
(58, 'test', 0, '2021-03-17'),
(59, 'test', 0, '2021-03-17'),
(60, 'test', 0, '2021-03-17'),
(61, 'test', 0, '2021-03-17'),
(62, 'test', 100, '2021-03-17'),
(63, 'test', 100, '2021-03-17'),
(64, 'test', 700, '2021-03-17'),
(65, 'test', 0, '2021-03-17'),
(66, 'test', 0, '2021-03-17'),
(67, 'test', 0, '2021-03-17'),
(68, 'test', 100, '2021-03-17'),
(69, 'test', 50, '2021-03-17'),
(70, 'test', 0, '2021-03-17'),
(71, 'test', 0, '2021-03-17'),
(72, 'test', 50, '2021-03-17'),
(73, 'test', 0, '2021-03-17'),
(74, 'test', 450, '2021-03-17'),
(75, 'test', 600, '2021-03-17'),
(76, 'test', 150, '2021-03-17'),
(77, 'test', 50, '2021-03-17'),
(78, 'test', 0, '2021-03-17'),
(79, 'test', 0, '2021-03-17'),
(80, 'test', 550, '2021-03-17'),
(81, 'test', 100, '2021-03-17'),
(82, 'test', 0, '2021-03-17'),
(83, 'test', 400, '2021-03-17'),
(84, 'test', 0, '2021-03-17'),
(85, 'test', 1000, '2021-03-17'),
(86, 'Antonios', 0, '2021-03-18'),
(87, 'Antonios', 4800, '2021-03-18'),
(88, 'Antonios', 0, '2021-03-18'),
(89, 'Antonios', 1900, '2021-03-18'),
(90, 'Antonios', 0, '2021-03-18'),
(91, 'Antonios', 0, '2021-03-18'),
(92, 'Antonios', 0, '2021-03-18'),
(93, 'Antonios', 5000, '2021-03-18'),
(94, 'test', 5000, '2021-03-18'),
(95, 'test', 4700, '2021-03-18'),
(96, 'test', 500, '2021-03-18'),
(97, 'test', 250, '2021-03-18'),
(98, 'test', 100, '2021-03-18'),
(99, '123', 250, '2021-03-18'),
(100, '123', 0, '2021-03-18'),
(101, '123', 4350, '2021-03-18'),
(102, '123', 0, '2021-03-18'),
(103, '123', 2650, '2021-03-18'),
(104, '123', 50, '2021-03-18'),
(105, '123', 50, '2021-03-18'),
(106, '123', 100, '2021-03-18'),
(107, '123', 5000, '2021-03-18'),
(108, 'Antonios', 3050, '2021-03-18');

-- --------------------------------------------------------

--
-- Tabellstruktur `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumpning av Data i tabell `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`) VALUES
(39, 'asd', 'asd'),
(44, 'Antonios', '123'),
(45, 'test', 'test'),
(46, '123', '123');

-- --------------------------------------------------------

--
-- Tabellstruktur `weapons`
--

CREATE TABLE `weapons` (
  `wp_id` int(11) NOT NULL,
  `wp_name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `level` int(11) NOT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumpning av Data i tabell `weapons`
--

INSERT INTO `weapons` (`wp_id`, `wp_name`, `level`, `image_url`) VALUES
(6, 'bow', 1, './assets/weapons/bow.png'),
(7, 'pistol', 2, './assets/weapons/pistol.png');

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `highscores`
--
ALTER TABLE `highscores`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Index för tabell `weapons`
--
ALTER TABLE `weapons`
  ADD PRIMARY KEY (`wp_id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `highscores`
--
ALTER TABLE `highscores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- AUTO_INCREMENT för tabell `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT för tabell `weapons`
--
ALTER TABLE `weapons`
  MODIFY `wp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
