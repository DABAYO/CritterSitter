/* Creates blank database for Project #2 - Critter Sitter*/

DROP DATABASE IF EXISTS critter_users; 

CREATE DATABASE IF NOT EXISTS `critter_users`;

USE `critter_users`;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `lat` varchar(255) DEFAULT NULL,
  `lng` varchar(255) DEFAULT NULL,
  `handlesDogs` tinyint(1) DEFAULT '0',
  `handlesCats` tinyint(1) DEFAULT '0',
  `handlesBirds` tinyint(1) DEFAULT '0',
  `handlesReptiles` tinyint(1) DEFAULT '0',
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `isSitter` tinyint(1) DEFAULT '0',
  `status` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;

INSERT INTO `users` VALUES (1,'Erick','Grissom','301 Indian Branch Drive, Morrisville, NC, USA','','',0,0,0,0,'grissomerick@gmail.com','$2a$08$SpL2uCdtVDBcaZkfi3XJRuS9oycsFjCWh4wraR9QfHkR08t0D8IQ2',0,'active','2018-04-03 00:05:52','2018-04-03 00:05:52'),(2,'Erick','Grissom','301 Indian Branch Drive, Morrisville, NC, USA','35.8274203','-78.8338182',0,0,0,0,'grissomerick1@gmail.com','$2a$08$dMRJIrfx/imo4YFLopNV9O6ZLOc5.GqzwoLECs.4faL4ZU1F0uo8i',0,'active','2018-04-03 00:12:14','2018-04-03 00:12:14'),(3,'Bill ','Davis','401 Plank Bridge Way, Morrisville, NC, USA','35.826464','-78.84035599999999',1,1,1,0,'bd@gmail.com','$2a$08$yUwIAbpHIZyzywF.jvnpOecuI5zpXgiATGvvSyQFZhY1ELKsHsWO6',1,'active','2018-04-03 00:17:54','2018-04-03 00:17:54'),(4,'David','Walker','1113 Garden Square Ln, Morrisville, North Carolina, USA','35.8315508','-78.8433296',1,1,0,0,'dw@yahoo.com','$2a$08$c8/25iqCt/z/ddAVjXDw7eWreD3yktWHNOfWN.OgJDavQIflhvGVW',1,'active','2018-04-03 00:54:59','2018-04-03 00:54:59'),(5,'Betty ','Davis','139 Singer Way, Morrisville, North Carolina, USA','35.8297414','-78.8406311',1,0,0,1,'davisbetty@live.com','$2a$08$l3SNDbjdwxpIay5bcUVAz.SlhB024hO0w71gNnIM.7LShA.tsHBQW',1,'active','2018-04-03 00:57:51','2018-04-03 00:57:51'),(6,'Anthony','Brown','202 Bell Tower Way, Morrisville, North Carolina, USA','35.83896230000001','-78.8416044',0,1,0,0,'browny@gmail.com','$2a$08$M8lDY8B7yFT8/pwWvky.quXocH58Z5QNZnhisLWPnvwbkdmN3Kidm',1,'active','2018-04-03 01:00:56','2018-04-03 01:00:56'),(7,'Teddy','Ryley','208 Elshur Way, Morrisville, North Carolina, USA','35.8322308','-78.85892189999998',1,0,0,0,'tryley@aol.com','$2a$08$TmGEizmY.YWDMadDEc4ZCO4uV1wV48ghkyVRtUgJTyNLs7yQHObxW',1,'active','2018-04-03 01:03:19','2018-04-03 01:03:19'),(8,'Chuck','Thomas','724 Champlain Ct, Cary, North Carolina, USA','35.8363956','-78.85014189999998',0,1,0,1,'cthomas@outlook.com','$2a$08$lUl8.oPtSsQVpEAzp6O5Le3w1HUm7IyZ3ZqBEMhKPRrHu02bhaZ2q',1,'active','2018-04-03 01:24:59','2018-04-03 01:24:59'),(9,'Megan','Pruitt','1223 Carpenter Fletcher Rd, Durham, North Carolina, USA','35.91588350000001','-78.89838900000001',1,1,0,0,'mpruitt22@hotmail.com','$2a$08$xYQFohWbMcCmZ5Ye/PBkkuCsPk9PjCfVjRHK2yNGT1a8QTtv7fHqm',1,'active','2018-04-03 01:28:53','2018-04-03 01:28:53'),(10,'Danny','Ledwig','3111 Long Meadow Court, Raleigh, NC 27613, USA','35.8696285','-78.69495139999998',1,0,0,0,'ledwig4922@yahoo.com','$2a$08$b.74qV1.Rl93e47oUoSQhecK862G0WVF9lFf8NKgLrcN84.Eqwpre',1,'active','2018-04-03 01:30:34','2018-04-03 01:30:34'),(11,'Belinda','James','4112 Piney Gap Dr, Cary, North Carolina, USA','35.78865159999999','-78.90546269999999',1,0,0,1,'bjames@unc.edu.org','$2a$08$ASRoKfOrmUz3AWPjOhsoF.RJKQGsGtMlYxuXEHyNjlD7tgGL1ZI1m',1,'active','2018-04-03 01:33:34','2018-04-03 01:33:34'),(12,'Bevy','Brown','206 Freeman St, Raleigh, North Carolina, USA','35.7771573','-78.62498959999999',1,1,0,0,'bb4213@timewarner.com','$2a$08$NRBqTqs2XenfJ9S5LYkMaedu6ABVo33vbU/6uI5/SkD0SlG1BX0nW',1,'active','2018-04-03 01:43:12','2018-04-03 01:43:12');

UNLOCK TABLES;