-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 19, 2020 at 10:12 AM
-- Server version: 8.0.17
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `robot_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `robot`
--

CREATE TABLE `robot` (
  `id` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `serial_number` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `robot`
--

INSERT INTO `robot` (`id`, `type`, `name`, `serial_number`, `user_id`) VALUES
(0, 'belal', 'belal', '133-235-986-777', 1),
(3, 'type1', 'belal', '125-235-986-785', 7),
(4, 'type2', 'belal', '133-235-986-784', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `id` int(11) NOT NULL,
  `reset` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`fname`, `lname`, `email`, `password`, `id`, `reset`) VALUES
('Belal', 'Sukari', 'belal@gmail.com', '123', 1, '175'),
('Adnan', 'Hamad', 'belal1@gmail.com', '123', 2, NULL),
('Fadi', 'Sukari', 'belal2@gmail.com', 'sha1$1c646163$1$2e0c808ca05054bab652c2a8c5e2d07b019711ae', 6, NULL),
('Adnan', 'Hamad', 'belalsukari@gmail.com', 'sha1$72b07eff$1$38bd3152c9c482f05b32d22c6009e2ebe4893b4c', 7, NULL),
('Samer', 'Sukar', 'belalesukari@gmail.com', 'sha1$dab43006$1$8430f26b3406904ca425bc09a3901e23c39696d6', 8, '763'),
('fdgdfg', 'dfgdfg', 'belalsukfdgari@gmail.com', 'sha1$b4d3fb3e$1$122ccb6f484581029d1fb96ad7ad060d734dfbc8', 9, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `robot`
--
ALTER TABLE `robot`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `serial-number` (`serial_number`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `robot`
--
ALTER TABLE `robot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `robot`
--
ALTER TABLE `robot`
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
