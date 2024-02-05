-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: mudapp-mudapp.a.aivencloud.com    Database: mudapp
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '79645afe-ba02-11ee-a6bd-9aff21087ee4:1-405';

--
-- Table structure for table `provider`
--

DROP TABLE IF EXISTS `provider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `provider` (
  `id` int NOT NULL AUTO_INCREMENT,
  `providerName` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `vehicle` varchar(45) NOT NULL,
  `vehicleSize` varchar(45) NOT NULL,
  `origin` varchar(45) NOT NULL,
  `trip` varchar(45) NOT NULL,
  `availability` tinyint NOT NULL,
  `reviews` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `providerName_UNIQUE` (`providerName`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provider`
--

LOCK TABLES `provider` WRITE;
/*!40000 ALTER TABLE `provider` DISABLE KEYS */;
INSERT INTO `provider` VALUES (1,'rgarcia','$2b$10$2bHON9lNdTgecMuJ/radDefnczYxcsh9TgTkhLdDTczeOefU8ijem','rgarcia@gmail.com','Raúl','García','Berlingo','Small','Barcelona','Barcelona',1,'5'),(2,'rcejudo','$2b$10$vCAdZTVVPUlSz5r5rg1nJeF2zAX9etkrDf1WeG2hDxYwMnpJZgg3e','rcejudo@gmail.com','Rocío','Cejudo','Furgoneta','Big','Barcelona','Valencia',1,'5'),(5,'sforero','$2b$10$cXTikQTxLcWIsUI6k8XFz.4ZquMxQzXwaGLJ11zgQ0gzW7LpY9uiW','sforero@gmail.com','Sebastián','Forero','twingo','Small','Barcelona','Barcelona',0,'5');
/*!40000 ALTER TABLE `provider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket` (
  `orderId` int NOT NULL AUTO_INCREMENT,
  `fare` int NOT NULL,
  `review` int DEFAULT NULL,
  `comments` varchar(45) DEFAULT NULL,
  `commodities` varchar(45) NOT NULL,
  `date_time` datetime NOT NULL,
  `origin` varchar(45) NOT NULL,
  `destination` varchar(45) NOT NULL,
  `paymentdate` datetime DEFAULT NULL,
  `paymenttype` varchar(45) DEFAULT NULL,
  `paymentstatus` tinyint DEFAULT NULL,
  `userId` int NOT NULL,
  `providerId` int NOT NULL,
  PRIMARY KEY (`orderId`),
  KEY `fk_ticket_user_idx` (`userId`),
  KEY `fk_ticket_provider1_idx` (`providerId`),
  CONSTRAINT `fk_ticket_provider1` FOREIGN KEY (`providerId`) REFERENCES `provider` (`id`),
  CONSTRAINT `fk_ticket_user` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
INSERT INTO `ticket` VALUES (1,100,5,'','Whole room','2024-01-31 15:00:00','Molins de Rei','Barcelona','2024-01-30 00:00:00','Card',1,1,2),(21,100,5,'Excelente','whole room','2024-01-30 21:00:00','gran via','paral·lel',NULL,'Apple Pay',0,2,5),(22,120,NULL,NULL,'whole room','2024-02-01 14:00:00','gran via','Molins de Rei',NULL,NULL,NULL,2,2);
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `admin` tinyint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'mikbe','$2b$10$Ka6CTQm2Rfb4tW.Rn9aQUuieZtRw92MhfnYg9t0trhHuHV6KCY4zO','mikbe@gmail.com','Belén','Alonso',1),(2,'nsamt','$2b$10$z/D8H9msPSwdIqn1gDNRqeHZOhfqjv6T1Sm1CVFEzQIPobYV.L/US','nsamt@gmail.com','Nacho','Sambade',0),(3,'pedror','$2b$10$2tKO2S1nsyDnOpFbtylWwOLrPbBOEmPqdLeQn3y.uMZXaSSw2eAr.','pedror@gmail.com','Pedro','Ramón',0),(4,'isiahzac','$2b$10$A.TdmIqlG8JuQJQGZu1OTuf3bkSLSlbxG3v0fMcxT.lKkSljoEnBi','isi@gmail.com','Isiah','Zacarías',0),(6,'holibcn','$2b$10$WCJiiplHYuQkLr7FUuYicuoVk2BOi.Qj9hE76/R/lr57SxBSL6DJ6','12345@gmail.com','Jaume','García',0),(7,'pramon','$2b$10$Mcse4ClpLR5gEZK27b/1B.GE2B7UdvZleFfTX4WQICbDkjiNni/8q','pramon@gmail.com','Pedro','Ramón',0),(8,'holiholi20','$2b$10$B1m4ACDMhAnqRS/Kl/1kQuFPL6fkhBeEjYkCqh2RL8tclQnbXEJH6','ldldl@gmail.com','Pedro','Ramón',0),(9,'isasmatias','$2b$10$aDqRlREip.uUDK4kA832Y.ixEvqToJ.TJYNT0nBJTaKl9FJecIyBe','isa@gmail.com','Isadora','Matías',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-04 20:54:40
