-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mer 30 Septembre 2020 à 13:29
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `jobboard`
--

-- --------------------------------------------------------

--
-- Structure de la table `advertisements`
--

CREATE TABLE IF NOT EXISTS `advertisements` (
  `numAdvertisements` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(20) NOT NULL,
  `objet` varchar(30) NOT NULL,
  `contenu` varchar(150) NOT NULL,
  `date` date NOT NULL,
  `numCompanies` int(11) NOT NULL,
  `numCandidat` int(11) NOT NULL,
  `numRecruteur` int(11) NOT NULL,
  PRIMARY KEY (`numAdvertisements`),
  KEY `numComp` (`numCompanies`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `advertisements`
--

INSERT INTO `advertisements` (`numAdvertisements`, `titre`, `objet`, `contenu`, `date`, `numCompanies`, `numCandidat`, `numRecruteur`) VALUES
(1, 'Un voleur', 'Volant à toutes jambes', 'Un voleur sachant voler, doit savoir voler sans son arme.', '2020-09-30', 1, 0, 1);

-- --------------------------------------------------------

--
-- Structure de la table `companies`
--

CREATE TABLE IF NOT EXISTS `companies` (
  `numCompanies` int(11) NOT NULL AUTO_INCREMENT,
  `nomCompanies` varchar(20) NOT NULL,
  `numRecruteur` int(11) NOT NULL,
  PRIMARY KEY (`numCompanies`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `companies`
--

INSERT INTO `companies` (`numCompanies`, `nomCompanies`, `numRecruteur`) VALUES
(1, 'Naheulbeuk', 1);

-- --------------------------------------------------------

--
-- Structure de la table `infojob`
--

CREATE TABLE IF NOT EXISTS `infojob` (
  `numPeople` int(11) NOT NULL,
  `numAdvertisements` int(11) NOT NULL,
  `mail` varchar(150) NOT NULL,
  PRIMARY KEY (`numAdvertisements`),
  KEY `numPeople` (`numPeople`),
  KEY `numAdd` (`numAdvertisements`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `people`
--

CREATE TABLE IF NOT EXISTS `people` (
  `numPeople` int(11) NOT NULL AUTO_INCREMENT,
  `nomPeople` varchar(15) NOT NULL,
  `prenomPeople` varchar(15) NOT NULL,
  `emailPeople` varchar(50) NOT NULL,
  `isRecruteur` tinyint(1) NOT NULL,
  PRIMARY KEY (`numPeople`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `people`
--

INSERT INTO `people` (`numPeople`, `nomPeople`, `prenomPeople`, `emailPeople`, `isRecruteur`) VALUES
(1, 'Sarlin', 'Corentin', 'coentin.sarlin@epitech.eu', 1);

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `advertisements`
--
ALTER TABLE `advertisements`
  ADD CONSTRAINT `advertisements_ibfk_1` FOREIGN KEY (`numCompanies`) REFERENCES `companies` (`numCompanies`);

--
-- Contraintes pour la table `infojob`
--
ALTER TABLE `infojob`
  ADD CONSTRAINT `infojob_ibfk_1` FOREIGN KEY (`numPeople`) REFERENCES `people` (`numPeople`),
  ADD CONSTRAINT `infojob_ibfk_2` FOREIGN KEY (`numAdvertisements`) REFERENCES `advertisements` (`numAdvertisements`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
