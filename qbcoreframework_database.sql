-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 09, 2023 lúc 06:34 PM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `qbcoreframework_database`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ak4y_caseopening`
--

CREATE TABLE `ak4y_caseopening` (
  `#` int(11) NOT NULL,
  `citizenid` varchar(255) NOT NULL DEFAULT '0',
  `goldcoin` int(11) NOT NULL DEFAULT 0,
  `silvercoin` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `ak4y_caseopening`
--

INSERT INTO `ak4y_caseopening` (`#`, `citizenid`, `goldcoin`, `silvercoin`) VALUES
(2, 'VZN18712', 33830, 0),
(3, 'HGF56275', 8240, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ak4y_caseopening_codes`
--

CREATE TABLE `ak4y_caseopening_codes` (
  `code` varchar(255) DEFAULT NULL,
  `creditCount` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `ak4y_caseopening_codes`
--

INSERT INTO `ak4y_caseopening_codes` (`code`, `creditCount`) VALUES
('sk2nGGVOZk', 10000),
('iP49ygGYNO', 10000),
('v59pHw74Rq', 10000),
('dU1Nda2kpL', 10000),
('tM2y8t3bBQ', 10000),
('XkLdasLIfE', 10000),
('K5n1ARUzDR', 10000),
('OoIHvBCq7G', 10000),
('EflM4b5pc3', 10000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ak4y_fishing`
--

CREATE TABLE `ak4y_fishing` (
  `citizenid` varchar(255) DEFAULT NULL,
  `currentXP` int(11) DEFAULT NULL,
  `tasks` longtext DEFAULT NULL,
  `time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `ak4y_fishing`
--

INSERT INTO `ak4y_fishing` (`citizenid`, `currentXP`, `tasks`, `time`) VALUES
('VZN18712', 651, '[{\"taken\":false,\"fishName\":\"anchovy\",\"requiredCount\":5,\"hasCount\":0},{\"taken\":false,\"fishName\":\"smallbluefish\",\"requiredCount\":10,\"hasCount\":0},{\"taken\":false,\"fishName\":\"bonitosfish\",\"requiredCount\":20,\"hasCount\":0},{\"taken\":false,\"fishName\":\"bonitosfish\",\"requiredCount\":30,\"hasCount\":0},{\"taken\":false,\"fishName\":\"garfish\",\"requiredCount\":40,\"hasCount\":0},{\"taken\":false,\"fishName\":\"perch\",\"requiredCount\":50,\"hasCount\":0}]', NULL),
('HGF56275', 0, '[{\"hasCount\":2,\"requiredCount\":5,\"fishName\":\"anchovy\",\"taken\":false},{\"hasCount\":0,\"requiredCount\":10,\"fishName\":\"smallbluefish\",\"taken\":false},{\"hasCount\":0,\"requiredCount\":20,\"fishName\":\"bonitosfish\",\"taken\":false},{\"hasCount\":0,\"requiredCount\":30,\"fishName\":\"bonitosfish\",\"taken\":false},{\"hasCount\":0,\"requiredCount\":40,\"fishName\":\"garfish\",\"taken\":false},{\"hasCount\":0,\"requiredCount\":50,\"fishName\":\"perch\",\"taken\":false}]', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `apartments`
--

CREATE TABLE `apartments` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `label` varchar(255) DEFAULT NULL,
  `citizenid` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `apartments`
--

INSERT INTO `apartments` (`id`, `name`, `type`, `label`, `citizenid`) VALUES
(1, 'apartment15011', 'apartment1', 'South Rockford Drive 5011', 'VZN18712'),
(2, 'apartment2864', 'apartment2', 'Morningwood Blvd 864', 'HGF56275'),
(3, 'apartment37441', 'apartment3', 'Integrity Way 7441', 'BVK76388'),
(4, 'apartment23217', 'apartment2', 'Morningwood Blvd 3217', 'KEV84940'),
(5, 'apartment34217', 'apartment3', 'Integrity Way 4217', 'BPS32139'),
(6, 'apartment41061', 'apartment4', 'Tinsel Towers 1061', 'VUQ62233');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bank_accounts`
--

CREATE TABLE `bank_accounts` (
  `record_id` bigint(255) NOT NULL,
  `citizenid` varchar(250) DEFAULT NULL,
  `business` varchar(50) DEFAULT NULL,
  `businessid` int(11) DEFAULT NULL,
  `gangid` varchar(50) DEFAULT NULL,
  `amount` bigint(255) NOT NULL DEFAULT 0,
  `account_type` enum('Current','Savings','business','Gang') NOT NULL DEFAULT 'Current'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bank_cards`
--

CREATE TABLE `bank_cards` (
  `record_id` bigint(255) NOT NULL,
  `citizenid` varchar(50) NOT NULL,
  `cardNumber` varchar(50) DEFAULT NULL,
  `cardPin` varchar(50) DEFAULT NULL,
  `cardActive` tinyint(4) DEFAULT 1,
  `cardLocked` tinyint(4) DEFAULT 0,
  `cardType` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bank_statements`
--

CREATE TABLE `bank_statements` (
  `record_id` bigint(255) NOT NULL,
  `citizenid` varchar(50) DEFAULT NULL,
  `account` varchar(50) DEFAULT NULL,
  `business` varchar(50) DEFAULT NULL,
  `businessid` int(11) DEFAULT NULL,
  `gangid` varchar(50) DEFAULT NULL,
  `deposited` int(11) DEFAULT NULL,
  `withdraw` int(11) DEFAULT NULL,
  `balance` int(11) DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Đang đổ dữ liệu cho bảng `bank_statements`
--

INSERT INTO `bank_statements` (`record_id`, `citizenid`, `account`, `business`, `businessid`, `gangid`, `deposited`, `withdraw`, `balance`, `date`, `type`) VALUES
(1, 'VZN18712', 'Bank', NULL, NULL, NULL, 10000, 0, 27983, '2023-06-04 06:04:18', 'Deposit $10000 into Current Account'),
(2, 'VZN18712', 'Bank', NULL, NULL, NULL, 10000, 0, 37983, '2023-06-04 06:04:20', 'Deposit $10000 into Current Account'),
(3, 'VZN18712', 'Bank', NULL, NULL, NULL, 10000, 0, 47983, '2023-06-04 06:04:21', 'Deposit $10000 into Current Account'),
(4, 'VZN18712', 'Bank', NULL, NULL, NULL, 10000, 0, 57983, '2023-06-04 06:04:21', 'Deposit $10000 into Current Account'),
(5, 'VZN18712', 'Bank', NULL, NULL, NULL, 10000, 0, 67983, '2023-06-04 06:04:22', 'Deposit $10000 into Current Account'),
(6, 'VZN18712', 'Bank', NULL, NULL, NULL, 10000, 0, 77983, '2023-06-04 06:04:22', 'Deposit $10000 into Current Account'),
(7, 'VZN18712', 'Bank', NULL, NULL, NULL, 10000, 0, 87983, '2023-06-04 06:04:23', 'Deposit $10000 into Current Account'),
(8, 'VZN18712', 'Bank', NULL, NULL, NULL, 10000, 0, 97983, '2023-06-04 06:04:24', 'Deposit $10000 into Current Account'),
(9, 'VZN18712', 'Bank', NULL, NULL, NULL, 10000, 0, 107983, '2023-06-04 06:04:25', 'Deposit $10000 into Current Account'),
(10, 'VZN18712', 'Bank', NULL, NULL, NULL, 2147483647, 0, 2147483647, '2023-06-04 06:04:34', 'Deposit $10000000000000 into Current Account'),
(11, 'VZN18712', 'Bank', NULL, NULL, NULL, 2147483647, 0, 2147483647, '2023-06-04 06:04:41', 'Deposit $100000000000000 into Current Account'),
(12, 'VZN18712', 'Bank', NULL, NULL, NULL, 2147483647, 0, 2147483647, '2023-06-04 06:04:50', 'Deposit $1e+20 into Current Account'),
(13, 'VZN18712', 'Bank', NULL, NULL, NULL, 2147483647, 0, 2147483647, '2023-06-04 06:05:21', 'Deposit $10000000000000000 into Current Account'),
(14, 'VZN18712', 'Bank', NULL, NULL, NULL, 0, 100, 2147483647, '2023-06-04 06:06:25', 'Withdraw $100 from Current Account');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bans`
--

CREATE TABLE `bans` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `license` varchar(50) DEFAULT NULL,
  `discord` varchar(50) DEFAULT NULL,
  `ip` varchar(50) DEFAULT NULL,
  `reason` text DEFAULT NULL,
  `expire` int(11) DEFAULT NULL,
  `bannedby` varchar(255) NOT NULL DEFAULT 'LeBanhammer'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `crypto`
--

CREATE TABLE `crypto` (
  `crypto` varchar(50) NOT NULL DEFAULT 'qbit',
  `worth` int(11) NOT NULL DEFAULT 0,
  `history` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `crypto`
--

INSERT INTO `crypto` (`crypto`, `worth`, `history`) VALUES
('qbit', 1106, '[{\"PreviousWorth\":1112,\"NewWorth\":1113},{\"PreviousWorth\":1112,\"NewWorth\":1113},{\"PreviousWorth\":1112,\"NewWorth\":1113},{\"NewWorth\":1106,\"PreviousWorth\":1113}]');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `crypto_transactions`
--

CREATE TABLE `crypto_transactions` (
  `id` int(11) NOT NULL,
  `citizenid` varchar(50) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `message` varchar(50) DEFAULT NULL,
  `date` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `dealers`
--

CREATE TABLE `dealers` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL DEFAULT '0',
  `coords` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `time` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdby` varchar(50) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `gloveboxitems`
--

CREATE TABLE `gloveboxitems` (
  `id` int(11) NOT NULL,
  `plate` varchar(255) NOT NULL,
  `items` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Đang đổ dữ liệu cho bảng `gloveboxitems`
--

INSERT INTO `gloveboxitems` (`id`, `plate`, `items`) VALUES
(4, '28RCN454', '[]'),
(1, '45OQI982', '[]');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `houselocations`
--

CREATE TABLE `houselocations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `label` varchar(255) DEFAULT NULL,
  `coords` text DEFAULT NULL,
  `owned` tinyint(1) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `tier` tinyint(4) DEFAULT NULL,
  `garage` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `house_plants`
--

CREATE TABLE `house_plants` (
  `id` int(11) NOT NULL,
  `building` varchar(50) DEFAULT NULL,
  `stage` varchar(50) DEFAULT 'stage-a',
  `sort` varchar(50) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `food` int(11) DEFAULT 100,
  `health` int(11) DEFAULT 100,
  `progress` int(11) DEFAULT 0,
  `coords` text DEFAULT NULL,
  `plantid` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `inventories`
--

CREATE TABLE `inventories` (
  `id` varchar(100) NOT NULL DEFAULT '',
  `data` longtext NOT NULL DEFAULT '[]'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `inventories`
--

INSERT INTO `inventories` (`id`, `data`) VALUES
('GloveBox-21XPI837', '[]'),
('Trunk-09SCH643', '[]'),
('tuner', '[{\"info\":{\"serie\":\"82Xlm9hi263rmdM\",\"quality\":98.34999999999994,\"ammo\":0},\"type\":\"weapon\",\"label\":\"Vintage Pistol\",\"image\":\"weapon_vintagepistol.png\",\"amount\":1,\"name\":\"weapon_vintagepistol\",\"slot\":1},{\"info\":{\"serie\":\"85tGz9Ha009PvMS\",\"quality\":97.89999999999992,\"ammo\":0},\"type\":\"weapon\",\"label\":\"SNS Pistol\",\"image\":\"weapon_snspistol.png\",\"amount\":1,\"name\":\"weapon_snspistol\",\"slot\":2}]');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lapraces`
--

CREATE TABLE `lapraces` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `checkpoints` text DEFAULT NULL,
  `records` text DEFAULT NULL,
  `creator` varchar(50) DEFAULT NULL,
  `distance` int(11) DEFAULT NULL,
  `raceid` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `management_funds`
--

CREATE TABLE `management_funds` (
  `id` int(11) NOT NULL,
  `job_name` varchar(50) NOT NULL,
  `amount` int(100) NOT NULL,
  `type` enum('boss','gang') NOT NULL DEFAULT 'boss'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `management_funds`
--

INSERT INTO `management_funds` (`id`, `job_name`, `amount`, `type`) VALUES
(1, 'police', 0, 'boss'),
(2, 'ambulance', 4000, 'boss'),
(3, 'realestate', 0, 'boss'),
(4, 'taxi', 0, 'boss'),
(5, 'cardealer', 0, 'boss'),
(6, 'mechanic', 1680, 'boss'),
(7, 'lostmc', 0, 'gang'),
(8, 'ballas', 0, 'gang'),
(9, 'vagos', 0, 'gang'),
(10, 'cartel', 0, 'gang'),
(11, 'families', 0, 'gang'),
(12, 'triads', 0, 'gang');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `occasion_vehicles`
--

CREATE TABLE `occasion_vehicles` (
  `id` int(11) NOT NULL,
  `seller` varchar(50) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `plate` varchar(50) DEFAULT NULL,
  `model` varchar(50) DEFAULT NULL,
  `mods` text DEFAULT NULL,
  `occasionid` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `okokmarketplace_blackmarket`
--

CREATE TABLE `okokmarketplace_blackmarket` (
  `id` int(255) NOT NULL,
  `item_id` varchar(255) NOT NULL,
  `label` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `author_identifier` varchar(255) NOT NULL,
  `author_name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` varchar(255) NOT NULL,
  `sold` tinyint(1) NOT NULL DEFAULT 0,
  `start_date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `okokmarketplace_items`
--

CREATE TABLE `okokmarketplace_items` (
  `id` int(255) NOT NULL,
  `item_id` varchar(255) NOT NULL,
  `label` varchar(255) NOT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `author_identifier` varchar(255) NOT NULL,
  `author_name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` varchar(255) NOT NULL,
  `sold` tinyint(1) NOT NULL DEFAULT 0,
  `start_date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `okokmarketplace_items`
--

INSERT INTO `okokmarketplace_items` (`id`, `item_id`, `label`, `amount`, `author_identifier`, `author_name`, `phone_number`, `description`, `price`, `sold`, `start_date`) VALUES
(2, 'casinochips', 'Casino Chips', '2', 'VZN18712', 'nguyen', '2772461072', 'a', '1', 0, '03/06 - 02:33'),
(5, 'goldchain', 'Golden Chain', '11', 'HGF56275', 'Zyan', '5894498927', 'nhu cac', '100000', 0, '03/06 - 19:58');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `okokmarketplace_vehicles`
--

CREATE TABLE `okokmarketplace_vehicles` (
  `id` int(255) NOT NULL,
  `item_id` varchar(255) NOT NULL,
  `plate` varchar(255) NOT NULL,
  `label` varchar(255) NOT NULL,
  `author_identifier` varchar(255) NOT NULL,
  `author_name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` varchar(255) NOT NULL,
  `sold` tinyint(1) NOT NULL DEFAULT 0,
  `start_date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `okokmarketplace_vehicles`
--

INSERT INTO `okokmarketplace_vehicles` (`id`, `item_id`, `plate`, `label`, `author_identifier`, `author_name`, `phone_number`, `description`, `price`, `sold`, `start_date`) VALUES
(1, '42NKZ478', '42NKZ478', 'ignus', 'VZN18712', 'nguyen', '2772461072', 'test thử xe', '1', 0, '03/06 - 02:28'),
(2, '21XPI837', '21XPI837', 'tyrus', 'VZN18712', 'nguyen', '2772461072', 'abc', '2', 0, '03/06 - 02:43'),
(3, '00NUC451', '00NUC451', 'bjxl', 'BVK76388', 'Bao', '8441430873', 'asd', '1', 0, '03/06 - 03:15');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `players`
--

CREATE TABLE `players` (
  `id` int(11) NOT NULL,
  `citizenid` varchar(50) NOT NULL,
  `cid` int(11) DEFAULT NULL,
  `license` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `money` text NOT NULL,
  `charinfo` text DEFAULT NULL,
  `job` text NOT NULL,
  `gang` text DEFAULT NULL,
  `position` text NOT NULL,
  `metadata` text NOT NULL,
  `inventory` longtext DEFAULT NULL,
  `last_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `wheel` varchar(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `players`
--

INSERT INTO `players` (`id`, `citizenid`, `cid`, `license`, `name`, `money`, `charinfo`, `job`, `gang`, `position`, `metadata`, `inventory`, `last_updated`, `wheel`) VALUES
(247, 'BPS32139', 2, 'license:7ef60b23c0b7373d91152fc9188aa387c35b9928', 'Alabamaradonanadoranababatrapmf', '{\"cash\":500,\"crypto\":0,\"bank\":5020}', '{\"backstory\":\"placeholder backstory\",\"account\":\"US01QBCore2896158966\",\"firstname\":\"Alabamaradonadorababanatrapmf\",\"cid\":2,\"gender\":0,\"birthdate\":\"2023-06-03\",\"phone\":\"9143023070\",\"lastname\":\"NN\",\"nationality\":\"Albania\"}', '{\"label\":\"Civilian\",\"grade\":{\"level\":0,\"name\":\"Freelancer\"},\"name\":\"unemployed\",\"payment\":10,\"type\":\"none\",\"isboss\":false,\"onduty\":true}', '{\"grade\":{\"level\":0,\"name\":\"none\"},\"label\":\"No Gang Affiliaton\",\"isboss\":false,\"name\":\"none\"}', '{\"x\":-546.2109985351563,\"y\":-2073.388916015625,\"z\":7.5435791015625}', '{\"isdead\":false,\"status\":[],\"criminalrecord\":{\"hasRecord\":false},\"fingerprint\":\"ql440D95rkK0660\",\"ishandcuffed\":false,\"jobrep\":{\"taxi\":0,\"tow\":0,\"hotdog\":0,\"trucker\":0},\"phonedata\":{\"InstalledApps\":[],\"SerialNumber\":79368866},\"inside\":{\"apartment\":[]},\"licences\":{\"driver\":true,\"weapon\":false,\"business\":false},\"hunger\":91.6,\"walletid\":\"QB-73710948\",\"callsign\":\"NO CALLSIGN\",\"attachmentcraftingrep\":0,\"craftingrep\":0,\"stress\":11,\"jailitems\":[],\"bloodtype\":\"B+\",\"thirst\":92.4,\"phone\":[],\"armor\":0,\"inlaststand\":false,\"dealerrep\":0,\"tracker\":false,\"commandbinds\":[],\"injail\":0,\"fitbit\":[]}', '[{\"slot\":1,\"type\":\"item\",\"name\":\"id_card\",\"amount\":1,\"info\":{\"gender\":0,\"birthdate\":\"2023-06-03\",\"citizenid\":\"BPS32139\",\"lastname\":\"NN\",\"nationality\":\"Albania\",\"firstname\":\"Alabamaradonadorababanatrapmf\"}},{\"slot\":2,\"type\":\"item\",\"name\":\"driver_license\",\"amount\":1,\"info\":{\"birthdate\":\"2023-06-03\",\"lastname\":\"NN\",\"type\":\"Class C Driver License\",\"firstname\":\"Alabamaradonadorababanatrapmf\"}},{\"slot\":3,\"type\":\"item\",\"name\":\"phone\",\"amount\":1,\"info\":[]}]', '2023-06-03 14:01:48', '0'),
(74, 'BVK76388', 4, 'license:09f3a5c84bbc3f85b4c6b4cf8dca00bd76562f66', 'meiL ubiw', '{\"cash\":94700,\"crypto\":0,\"bank\":5187}', '{\"backstory\":\"placeholder backstory\",\"account\":\"US08QBCore7962719699\",\"firstname\":\"Bao\",\"cid\":4,\"gender\":0,\"birthdate\":\"2005-04-04\",\"phone\":\"8441430873\",\"lastname\":\"Liem\",\"nationality\":\"Vietnam\"}', '{\"label\":\"Civilian\",\"grade\":{\"level\":0,\"name\":\"Freelancer\"},\"payment\":10,\"name\":\"unemployed\",\"type\":\"none\",\"isboss\":false,\"onduty\":true}', '{\"label\":\"No Gang Affiliaton\",\"grade\":{\"level\":0,\"name\":\"none\"},\"isboss\":false,\"name\":\"none\"}', '{\"x\":-525.6527709960938,\"y\":-2079.60009765625,\"z\":9.211669921875}', '{\"isdead\":false,\"status\":[],\"criminalrecord\":{\"hasRecord\":false},\"fingerprint\":\"CT335d57qDp9482\",\"licences\":{\"driver\":true,\"weapon\":false,\"business\":false},\"phonedata\":{\"InstalledApps\":[],\"SerialNumber\":38575227},\"jobrep\":{\"taxi\":0,\"tow\":0,\"hotdog\":0,\"trucker\":0},\"callsign\":\"NO CALLSIGN\",\"tracker\":false,\"dealerrep\":0,\"inside\":{\"apartment\":[]},\"attachmentcraftingrep\":0,\"hunger\":78.99999999999999,\"craftingrep\":0,\"stress\":27,\"jailitems\":[],\"bloodtype\":\"A+\",\"thirst\":81.00000000000002,\"phone\":[],\"armor\":0,\"inlaststand\":false,\"walletid\":\"QB-97313953\",\"ishandcuffed\":false,\"commandbinds\":[],\"injail\":0,\"fitbit\":[]}', '[{\"slot\":1,\"type\":\"item\",\"name\":\"nitrous\",\"amount\":1,\"info\":[]},{\"slot\":2,\"type\":\"item\",\"name\":\"lockpick\",\"amount\":9,\"info\":[]},{\"slot\":3,\"type\":\"weapon\",\"name\":\"weapon_knife\",\"amount\":1,\"info\":{\"quality\":99.85,\"serie\":\"22Bxr9Vb851WSZc\",\"ammo\":0}},{\"slot\":4,\"type\":\"weapon\",\"name\":\"weapon_assaultrifle\",\"amount\":1,\"info\":{\"quality\":65.49999999999869,\"serie\":\"68CUD5JL469tqMJ\",\"ammo\":13}},{\"slot\":5,\"type\":\"weapon\",\"name\":\"weapon_specialcarbine_mk2\",\"amount\":1,\"info\":{\"quality\":67.59999999999879,\"serie\":\"76qCr5wE221Qihn\",\"ammo\":199}},{\"slot\":6,\"type\":\"weapon\",\"name\":\"weapon_pistol_mk2\",\"amount\":1,\"info\":{\"quality\":99.7,\"serie\":\"88Qih5en513PBlC\",\"ammo\":0}},{\"slot\":9,\"type\":\"item\",\"name\":\"screwdriverset\",\"amount\":10,\"info\":[]},{\"slot\":10,\"type\":\"weapon\",\"name\":\"weapon_remotesniper\",\"amount\":1,\"info\":{\"serie\":\"36Vdc4as888GIFA\",\"quality\":100}},{\"slot\":14,\"type\":\"item\",\"name\":\"radio\",\"amount\":1,\"info\":[]}]', '2023-06-03 14:01:05', '0'),
(33, 'HGF56275', 1, 'license:2c5985206d5f0d23291924441902b7416336bfe1', 'VzyAn', '{\"bank\":5350,\"cash\":741750,\"crypto\":0}', '{\"lastname\":\"Cuti\",\"phone\":\"5894498927\",\"backstory\":\"placeholder backstory\",\"nationality\":\"Vietnam\",\"firstname\":\"Zyan\",\"birthdate\":\"2023-06-02\",\"gender\":1,\"account\":\"US08QBCore6570363316\",\"cid\":1}', '{\"name\":\"mechanic\",\"type\":\"mechanic\",\"isboss\":true,\"grade\":{\"level\":4,\"name\":\"Manager\"},\"payment\":150,\"label\":\"Mechanic\",\"onduty\":false}', '{\"isboss\":false,\"name\":\"none\",\"label\":\"No Gang Affiliaton\",\"grade\":{\"level\":0,\"name\":\"none\"}}', '{\"x\":157.20001220703126,\"y\":60.38241958618164,\"z\":79.3743896484375}', '{\"hunger\":95.8,\"fingerprint\":\"EI333v03UIT5529\",\"stress\":3,\"inside\":{\"apartment\":[]},\"inlaststand\":false,\"tracker\":false,\"status\":[],\"phonedata\":{\"SerialNumber\":53868439,\"InstalledApps\":[]},\"injail\":0,\"dealerrep\":0,\"armor\":0,\"phone\":[],\"craftingrep\":0,\"criminalrecord\":{\"hasRecord\":false},\"fitbit\":[],\"bloodtype\":\"AB-\",\"callsign\":\"NO CALLSIGN\",\"isdead\":false,\"thirst\":96.2,\"jailitems\":[],\"commandbinds\":[],\"ishandcuffed\":false,\"attachmentcraftingrep\":0,\"walletid\":\"QB-23787850\",\"licences\":{\"driver\":true,\"weapon\":false,\"business\":false},\"jobrep\":{\"taxi\":0,\"trucker\":0,\"hotdog\":0,\"tow\":0}}', '[{\"amount\":98,\"slot\":1,\"info\":[],\"type\":\"item\",\"name\":\"lockpick\"},{\"amount\":1,\"slot\":2,\"info\":{\"serie\":\"24HMk1eQ110NJqC\",\"quality\":71.49999999999892,\"ammo\":102},\"type\":\"weapon\",\"name\":\"weapon_smg\"},{\"amount\":2,\"slot\":3,\"info\":[],\"type\":\"item\",\"name\":\"advancedlockpick\"},{\"amount\":15,\"slot\":4,\"info\":[],\"type\":\"item\",\"name\":\"electronickit\"},{\"amount\":1,\"slot\":5,\"info\":{\"serie\":\"59upZ7Il190wxxm\",\"quality\":60.99999999999867,\"ammo\":19},\"type\":\"weapon\",\"name\":\"weapon_firework\"},{\"amount\":1,\"slot\":6,\"info\":{\"serie\":\"82cqq1zZ084ggyh\",\"quality\":99.85,\"ammo\":0},\"type\":\"weapon\",\"name\":\"weapon_knife\"},{\"amount\":1,\"slot\":7,\"info\":[],\"type\":\"item\",\"name\":\"security_card_02\"},{\"amount\":106700.0,\"slot\":8,\"info\":[],\"type\":\"item\",\"name\":\"casinochips\"},{\"amount\":1,\"slot\":9,\"info\":{\"serie\":\"40kHX6gp851JafU\",\"quality\":87.2499999999995,\"ammo\":92},\"type\":\"weapon\",\"name\":\"weapon_heavysniper\"},{\"amount\":1,\"slot\":10,\"info\":[],\"type\":\"item\",\"name\":\"pistol_ammo\"},{\"amount\":15,\"slot\":11,\"info\":[],\"type\":\"item\",\"name\":\"trojan_usb\"},{\"amount\":2,\"slot\":12,\"info\":[],\"type\":\"item\",\"name\":\"firstaid\"},{\"amount\":1,\"slot\":13,\"info\":{\"serie\":\"10Lhe6dh269JhzI\",\"quality\":83.34999999999937,\"ammo\":-1},\"type\":\"weapon\",\"name\":\"weapon_flaregun\"},{\"amount\":1,\"slot\":14,\"info\":{\"serie\":\"74Apu5wZ676wxHE\",\"quality\":97.4499999999999,\"ammo\":-1},\"type\":\"weapon\",\"name\":\"weapon_hominglauncher\"},{\"amount\":1,\"slot\":15,\"info\":[],\"type\":\"item\",\"name\":\"phone\"},{\"amount\":6,\"slot\":16,\"info\":[],\"type\":\"item\",\"name\":\"fishingrod1\"},{\"amount\":1,\"slot\":17,\"info\":{\"type\":\"Class C Driver License\",\"birthdate\":\"2005-04-04\",\"lastname\":\"Liem\",\"firstname\":\"Bao\"},\"type\":\"item\",\"name\":\"driver_license\"},{\"amount\":2,\"slot\":18,\"info\":[],\"type\":\"item\",\"name\":\"anchovy\"},{\"amount\":1,\"slot\":19,\"info\":{\"serie\":\"72GrJ3Ph643kMBQ\",\"quality\":56.49999999999871,\"ammo\":16},\"type\":\"weapon\",\"name\":\"weapon_combatpdw\"},{\"amount\":84,\"slot\":20,\"info\":[],\"type\":\"item\",\"name\":\"wheeltoken\"},{\"amount\":1,\"slot\":21,\"info\":{\"citizenid\":\"BVK76388\",\"gender\":0,\"firstname\":\"Bao\",\"birthdate\":\"2005-04-04\",\"lastname\":\"Liem\",\"nationality\":\"Vietnam\"},\"type\":\"item\",\"name\":\"id_card\"},{\"amount\":1,\"slot\":22,\"info\":[],\"type\":\"item\",\"name\":\"joint\"},{\"amount\":1,\"slot\":23,\"info\":[],\"type\":\"item\",\"name\":\"paintcan\"},{\"amount\":1,\"slot\":24,\"info\":[],\"type\":\"item\",\"name\":\"paintcan\"},{\"amount\":1,\"slot\":25,\"info\":[],\"type\":\"item\",\"name\":\"fishingrod3\"},{\"amount\":1,\"slot\":26,\"info\":[],\"type\":\"item\",\"name\":\"illegalFishBait\"},{\"amount\":2,\"slot\":27,\"info\":{\"worth\":2973},\"type\":\"item\",\"name\":\"markedbills\"},{\"amount\":13,\"slot\":28,\"info\":[],\"type\":\"item\",\"name\":\"rolex\"},{\"amount\":3,\"slot\":29,\"info\":{\"worth\":3157},\"type\":\"item\",\"name\":\"markedbills\"},{\"amount\":1,\"slot\":33,\"info\":{\"citizenid\":\"HGF56275\",\"gender\":1,\"firstname\":\"Zyan\",\"birthdate\":\"2023-06-02\",\"lastname\":\"Cuti\",\"nationality\":\"Vietnam\"},\"type\":\"item\",\"name\":\"id_card\"},{\"amount\":1,\"slot\":34,\"info\":{\"type\":\"Class C Driver License\",\"birthdate\":\"2023-06-02\",\"lastname\":\"Cuti\",\"firstname\":\"Zyan\"},\"type\":\"item\",\"name\":\"driver_license\"},{\"amount\":1,\"slot\":35,\"info\":[],\"type\":\"item\",\"name\":\"phone\"}]', '2023-06-08 14:18:54', '0'),
(239, 'KEV84940', 1, 'license:7ef60b23c0b7373d91152fc9188aa387c35b9928', 'Alabamaradonanadoranababatrapmf', '{\"cash\":500,\"crypto\":0,\"bank\":5000}', '{\"backstory\":\"placeholder backstory\",\"account\":\"US09QBCore2177141727\",\"firstname\":\"Alabamaradonadorababatrapmf\",\"phone\":\"1922140002\",\"gender\":0,\"birthdate\":\"2023-06-03\",\"cid\":1,\"lastname\":\"N\",\"nationality\":\"Vietnam\"}', '{\"name\":\"unemployed\",\"grade\":{\"level\":0,\"name\":\"Freelancer\"},\"label\":\"Civilian\",\"type\":\"none\",\"payment\":10,\"isboss\":false,\"onduty\":true}', '{\"name\":\"none\",\"label\":\"No Gang Affiliaton\",\"isboss\":false,\"grade\":{\"level\":0,\"name\":\"none\"}}', '{\"x\":-140.24176025390626,\"y\":964.879150390625,\"z\":235.7237548828125}', '{\"isdead\":false,\"status\":[],\"criminalrecord\":{\"hasRecord\":false},\"fingerprint\":\"ve764G88ISE7192\",\"licences\":{\"driver\":true,\"weapon\":false,\"business\":false},\"ishandcuffed\":false,\"callsign\":\"NO CALLSIGN\",\"commandbinds\":[],\"tracker\":false,\"hunger\":100,\"dealerrep\":0,\"thirst\":100,\"attachmentcraftingrep\":0,\"currentapartment\":\"apartment23217\",\"armor\":0,\"stress\":0,\"inside\":{\"apartment\":{\"apartmentType\":\"apartment2\",\"apartmentId\":\"apartment23217\"}},\"bloodtype\":\"B+\",\"phone\":[],\"phonedata\":{\"InstalledApps\":[],\"SerialNumber\":93170309},\"jobrep\":{\"taxi\":0,\"tow\":0,\"hotdog\":0,\"trucker\":0},\"inlaststand\":false,\"walletid\":\"QB-66880098\",\"jailitems\":[],\"craftingrep\":0,\"injail\":0,\"fitbit\":[]}', '[{\"slot\":1,\"type\":\"item\",\"name\":\"id_card\",\"amount\":1,\"info\":{\"gender\":0,\"birthdate\":\"2023-06-03\",\"citizenid\":\"KEV84940\",\"lastname\":\"N\",\"nationality\":\"Vietnam\",\"firstname\":\"Alabamaradonadorababatrapmf\"}},{\"slot\":2,\"type\":\"item\",\"name\":\"driver_license\",\"amount\":1,\"info\":{\"birthdate\":\"2023-06-03\",\"lastname\":\"N\",\"type\":\"Class C Driver License\",\"firstname\":\"Alabamaradonadorababatrapmf\"}},{\"slot\":3,\"type\":\"item\",\"name\":\"phone\",\"amount\":1,\"info\":[]}]', '2023-06-03 13:38:51', '0'),
(628, 'VUQ62233', 2, 'license:584e96891fffa68a4e493021a1bfd2df8d64ae87', 'NguyenPhat', '{\"cash\":500,\"crypto\":0,\"bank\":5010}', '{\"cid\":2,\"gender\":0,\"phone\":\"4789723831\",\"account\":\"US01QBCore4728280359\",\"firstname\":\"nguyen\",\"lastname\":\"phat\",\"backstory\":\"\",\"nationality\":\"vietnam\",\"birthdate\":\"12/12/1992\"}', '{\"payment\":10,\"label\":\"Civilian\",\"name\":\"unemployed\",\"grade\":{\"name\":\"Freelancer\",\"level\":0},\"isboss\":false,\"type\":\"none\",\"onduty\":true}', '{\"isboss\":false,\"label\":\"No Gang Affiliaton\",\"name\":\"none\",\"grade\":{\"name\":\"none\",\"level\":0}}', '{\"x\":-619.7670288085938,\"y\":31.62198066711425,\"z\":43.5179443359375}', '{\"armor\":0,\"dealerrep\":0,\"status\":[],\"phone\":[],\"tracker\":false,\"thirst\":92.4,\"craftingrep\":0,\"fitbit\":[],\"phonedata\":{\"InstalledApps\":[],\"SerialNumber\":58817564},\"ishandcuffed\":false,\"injail\":0,\"jailitems\":[],\"licences\":{\"business\":false,\"driver\":true,\"weapon\":false},\"stress\":0,\"fingerprint\":\"Kb374o96hLG4088\",\"isdead\":false,\"commandbinds\":[],\"hunger\":91.6,\"criminalrecord\":{\"hasRecord\":false},\"callsign\":\"NO CALLSIGN\",\"jobrep\":{\"trucker\":0,\"hotdog\":0,\"tow\":0,\"taxi\":0},\"attachmentcraftingrep\":0,\"bloodtype\":\"A+\",\"inside\":{\"apartment\":[]},\"inlaststand\":false,\"walletid\":\"QB-22380724\"}', '[{\"name\":\"phone\",\"slot\":1,\"type\":\"item\",\"amount\":1,\"info\":[]},{\"name\":\"driver_license\",\"slot\":2,\"type\":\"item\",\"amount\":1,\"info\":{\"type\":\"Class C Driver License\",\"firstname\":\"nguyen\",\"lastname\":\"phat\",\"birthdate\":\"12/12/1992\"}},{\"name\":\"id_card\",\"slot\":3,\"type\":\"item\",\"amount\":1,\"info\":{\"gender\":0,\"citizenid\":\"VUQ62233\",\"lastname\":\"phat\",\"firstname\":\"nguyen\",\"nationality\":\"vietnam\",\"birthdate\":\"12/12/1992\"}}]', '2023-06-07 16:38:15', '0'),
(1, 'VZN18712', 1, 'license:584e96891fffa68a4e493021a1bfd2df8d64ae87', 'NguyenPhat', '{\"cash\":9.899989890020005e21,\"bank\":100010110000000100000.0,\"crypto\":0}', '{\"phone\":\"2772461072\",\"birthdate\":\"2023-06-02\",\"nationality\":\"Afghanistan\",\"cid\":1,\"account\":\"US04QBCore6009810968\",\"gender\":0,\"firstname\":\"nguyen\",\"backstory\":\"placeholder backstory\",\"lastname\":\"phat\"}', '{\"isboss\":true,\"grade\":{\"level\":4,\"name\":\"Manager\"},\"type\":\"mechanic\",\"payment\":150,\"name\":\"mechanic\",\"onduty\":false,\"label\":\"Mechanic\"}', '{\"name\":\"none\",\"isboss\":false,\"grade\":{\"level\":0,\"name\":\"none\"},\"label\":\"No Gang Affiliaton\"}', '{\"x\":-1468.02197265625,\"y\":5414.10986328125,\"z\":23.5340576171875}', '{\"injail\":0,\"dealerrep\":0,\"phonedata\":{\"InstalledApps\":[],\"SerialNumber\":97584876},\"walletid\":\"QB-14524055\",\"licences\":{\"driver\":true,\"weapon\":false,\"business\":false},\"tracker\":false,\"craftingrep\":0,\"hunger\":49.59999999999994,\"thirst\":54.40000000000003,\"status\":[],\"stress\":5,\"criminalrecord\":{\"hasRecord\":false},\"phone\":[],\"fingerprint\":\"xq693M10Frg5700\",\"bloodtype\":\"A-\",\"fitbit\":[],\"attachmentcraftingrep\":0,\"jailitems\":[],\"inlaststand\":false,\"callsign\":\"NO CALLSIGN\",\"armor\":0,\"isdead\":false,\"inside\":{\"apartment\":[]},\"ishandcuffed\":false,\"commandbinds\":[],\"jobrep\":{\"tow\":0,\"taxi\":0,\"hotdog\":0,\"trucker\":0}}', '[{\"name\":\"weapon_assaultrifle\",\"amount\":1,\"info\":{\"attachments\":[{\"component\":\"COMPONENT_AT_AR_AFGRIP\",\"label\":\"Rifle Grip\",\"item\":\"rifle_grip\"},{\"component\":\"COMPONENT_AT_AR_SUPP_02\",\"label\":\"Rifle Suppressor\",\"item\":\"rifle_suppressor\"},{\"component\":\"COMPONENT_ASSAULTRIFLE_VARMOD_LUXE\",\"label\":\"Rifle Finish\",\"item\":\"assaultrifle_luxuryfinish\"}],\"quality\":97.4499999999999,\"ammo\":42,\"serie\":\"84CDf8xF310ZVxW\"},\"type\":\"weapon\",\"slot\":1},{\"name\":\"weapon_sniperrifle\",\"amount\":1,\"info\":{\"attachments\":[{\"component\":\"COMPONENT_AT_SCOPE_LARGE\",\"type\":\"scope\",\"label\":\"Sniper Scope\",\"item\":\"sniper_scope\"}],\"quality\":100,\"ammo\":0,\"serie\":\"24TkQ3Hd965klja\"},\"type\":\"weapon\",\"slot\":2},{\"name\":\"nitrous\",\"amount\":7,\"info\":[],\"type\":\"item\",\"slot\":3},{\"name\":\"phone\",\"amount\":1,\"info\":[],\"type\":\"item\",\"slot\":4},{\"name\":\"rifle_ammo\",\"amount\":14,\"info\":[],\"type\":\"item\",\"slot\":5},{\"name\":\"trojan_usb\",\"amount\":1,\"info\":[],\"type\":\"item\",\"slot\":6},{\"name\":\"electronickit\",\"amount\":1,\"info\":[],\"type\":\"item\",\"slot\":7},{\"name\":\"lockpick\",\"amount\":8,\"info\":[],\"type\":\"item\",\"slot\":8},{\"name\":\"wheeltoken\",\"amount\":1,\"info\":[],\"type\":\"item\",\"slot\":9},{\"name\":\"joint\",\"amount\":1,\"info\":[],\"type\":\"item\",\"slot\":10},{\"name\":\"security_card_02\",\"amount\":4,\"info\":[],\"type\":\"item\",\"slot\":11},{\"name\":\"weapon_knuckle\",\"amount\":1,\"info\":{\"quality\":100,\"serie\":\"53vbD4Hu066adYw\"},\"type\":\"weapon\",\"slot\":12},{\"name\":\"weapon_crowbar\",\"amount\":1,\"info\":{\"quality\":100,\"ammo\":0,\"serie\":\"51TED4cR241elmz\"},\"type\":\"weapon\",\"slot\":13},{\"name\":\"wheeltoken\",\"amount\":2,\"info\":[],\"type\":\"item\",\"slot\":14},{\"name\":\"weapon_knife\",\"amount\":1,\"info\":{\"quality\":100,\"serie\":\"41eEA6Au855nOsp\"},\"type\":\"weapon\",\"slot\":15},{\"name\":\"markedbills\",\"amount\":2,\"info\":{\"worth\":2988},\"type\":\"item\",\"slot\":16},{\"name\":\"carbinerifle_drum\",\"amount\":1,\"info\":[],\"type\":\"item\",\"slot\":17},{\"name\":\"pistol_ammo\",\"amount\":10,\"info\":[],\"type\":\"item\",\"slot\":18},{\"name\":\"water_bottle\",\"amount\":1,\"info\":[],\"type\":\"item\",\"slot\":19},{\"name\":\"tosti\",\"amount\":1,\"info\":[],\"type\":\"item\",\"slot\":20},{\"name\":\"weapon_snspistol_mk2\",\"amount\":1,\"info\":{\"quality\":100,\"ammo\":0,\"serie\":\"69ETo0Mt959DJdg\"},\"type\":\"weapon\",\"slot\":21}]', '2023-06-08 20:29:12', '0');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `playerskins`
--

CREATE TABLE `playerskins` (
  `id` int(11) NOT NULL,
  `citizenid` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `skin` text NOT NULL,
  `active` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `playerskins`
--

INSERT INTO `playerskins` (`id`, `citizenid`, `model`, `skin`, `active`) VALUES
(3, 'KEV84940', '1461287021', '{\"torso2\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"eye_color\":{\"defaultTexture\":0,\"item\":-1,\"texture\":0,\"defaultItem\":-1},\"blush\":{\"defaultTexture\":1,\"item\":-1,\"texture\":1,\"defaultItem\":-1},\"nose_5\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"bag\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"moles\":{\"defaultTexture\":0,\"item\":-1,\"texture\":0,\"defaultItem\":-1},\"facemix\":{\"skinMix\":0,\"shapeMix\":0,\"defaultShapeMix\":0.0,\"defaultSkinMix\":0.0},\"eyebrown_high\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"vest\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"neck_thikness\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"ear\":{\"defaultTexture\":0,\"item\":-1,\"texture\":0,\"defaultItem\":-1},\"shoes\":{\"defaultTexture\":0,\"item\":1,\"texture\":0,\"defaultItem\":1},\"hair\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"arms\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"eyebrows\":{\"defaultTexture\":1,\"item\":-1,\"texture\":1,\"defaultItem\":-1},\"jaw_bone_width\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"nose_3\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"hat\":{\"defaultTexture\":0,\"item\":-1,\"texture\":0,\"defaultItem\":-1},\"face\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"beard\":{\"defaultTexture\":1,\"item\":-1,\"texture\":1,\"defaultItem\":-1},\"pants\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"t-shirt\":{\"defaultTexture\":0,\"item\":1,\"texture\":0,\"defaultItem\":1},\"lips_thickness\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"chimp_bone_width\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"eye_opening\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"chimp_bone_lowering\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"mask\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"chimp_bone_lenght\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"jaw_bone_back_lenght\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"nose_2\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"glass\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"chimp_hole\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"cheek_3\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"cheek_2\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"nose_0\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"nose_4\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"eyebrown_forward\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"watch\":{\"defaultTexture\":0,\"item\":-1,\"texture\":0,\"defaultItem\":-1},\"nose_1\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"cheek_1\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"decals\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"accessory\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"face2\":{\"defaultTexture\":0,\"item\":0,\"texture\":0,\"defaultItem\":0},\"ageing\":{\"defaultTexture\":0,\"item\":-1,\"texture\":0,\"defaultItem\":-1},\"bracelet\":{\"defaultTexture\":0,\"item\":-1,\"texture\":0,\"defaultItem\":-1},\"makeup\":{\"defaultTexture\":1,\"item\":-1,\"texture\":1,\"defaultItem\":-1},\"lipstick\":{\"defaultTexture\":1,\"item\":-1,\"texture\":1,\"defaultItem\":-1}}', 1),
(4, 'BPS32139', '1885233650', '{\"face2\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"torso2\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"face\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"eye_color\":{\"defaultItem\":-1,\"defaultTexture\":0,\"item\":-1,\"texture\":0},\"beard\":{\"defaultItem\":-1,\"defaultTexture\":1,\"item\":-1,\"texture\":1},\"vest\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"arms\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"t-shirt\":{\"defaultItem\":1,\"defaultTexture\":0,\"item\":1,\"texture\":0},\"hair\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"facemix\":{\"defaultShapeMix\":0.0,\"shapeMix\":0,\"skinMix\":0,\"defaultSkinMix\":0.0},\"chimp_bone_lowering\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"nose_2\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"eyebrown_high\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"chimp_bone_lenght\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"hat\":{\"defaultItem\":-1,\"defaultTexture\":0,\"item\":-1,\"texture\":0},\"nose_3\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"bag\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"pants\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"ageing\":{\"defaultItem\":-1,\"defaultTexture\":0,\"item\":-1,\"texture\":0},\"shoes\":{\"defaultItem\":1,\"defaultTexture\":0,\"item\":1,\"texture\":0},\"chimp_hole\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"watch\":{\"defaultItem\":-1,\"defaultTexture\":0,\"item\":-1,\"texture\":0},\"eyebrown_forward\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"blush\":{\"defaultItem\":-1,\"defaultTexture\":1,\"item\":-1,\"texture\":1},\"ear\":{\"defaultItem\":-1,\"defaultTexture\":0,\"item\":-1,\"texture\":0},\"neck_thikness\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"jaw_bone_back_lenght\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"chimp_bone_width\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"cheek_3\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"makeup\":{\"defaultItem\":-1,\"defaultTexture\":1,\"item\":-1,\"texture\":1},\"jaw_bone_width\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"lips_thickness\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"eye_opening\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"eyebrows\":{\"defaultItem\":-1,\"defaultTexture\":1,\"item\":-1,\"texture\":1},\"nose_1\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"nose_5\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"cheek_2\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"bracelet\":{\"defaultItem\":-1,\"defaultTexture\":0,\"item\":-1,\"texture\":0},\"nose_4\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"nose_0\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"accessory\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"moles\":{\"defaultItem\":-1,\"defaultTexture\":0,\"item\":-1,\"texture\":0},\"decals\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"cheek_1\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"glass\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0},\"lipstick\":{\"defaultItem\":-1,\"defaultTexture\":1,\"item\":-1,\"texture\":1},\"mask\":{\"defaultItem\":0,\"defaultTexture\":0,\"item\":0,\"texture\":0}}', 1),
(5, 'VZN18712', '1885233650', '{\"cheek_2\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"blush\":{\"texture\":1,\"defaultTexture\":1,\"defaultItem\":-1,\"item\":-1},\"watch\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":-1,\"item\":-1},\"nose_2\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"bracelet\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":-1,\"item\":-1},\"nose_3\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"lips_thickness\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"pants\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"face\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"jaw_bone_back_lenght\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"nose_0\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"torso2\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":16},\"cheek_1\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"cheek_3\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"neck_thikness\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"eyebrown_high\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"accessory\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"nose_5\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"chimp_bone_lowering\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"nose_4\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"ageing\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":-1,\"item\":-1},\"eyebrows\":{\"texture\":1,\"defaultTexture\":1,\"defaultItem\":-1,\"item\":-1},\"hat\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":-1,\"item\":-1},\"chimp_bone_lenght\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"jaw_bone_width\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"moles\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":-1,\"item\":-1},\"hair\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"face2\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"vest\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"bag\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"beard\":{\"texture\":1,\"defaultTexture\":1,\"defaultItem\":-1,\"item\":-1},\"chimp_hole\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"decals\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"eye_color\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":-1,\"item\":-1},\"lipstick\":{\"texture\":1,\"defaultTexture\":1,\"defaultItem\":-1,\"item\":-1},\"shoes\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":1,\"item\":1},\"mask\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"eyebrown_forward\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"facemix\":{\"shapeMix\":0,\"skinMix\":0,\"defaultSkinMix\":0.0,\"defaultShapeMix\":0.0},\"nose_1\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"glass\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"eye_opening\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"t-shirt\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":1,\"item\":17},\"makeup\":{\"texture\":1,\"defaultTexture\":1,\"defaultItem\":-1,\"item\":-1},\"arms\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0},\"ear\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":-1,\"item\":-1},\"chimp_bone_width\":{\"texture\":0,\"defaultTexture\":0,\"defaultItem\":0,\"item\":0}}', 1),
(6, 'HGF56275', '-1667301416', '{\"hat\":{\"item\":-1,\"texture\":0,\"defaultItem\":-1,\"defaultTexture\":0},\"eyebrown_high\":{\"item\":0,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"bag\":{\"item\":0,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"bracelet\":{\"item\":196,\"texture\":0,\"defaultItem\":-1,\"defaultTexture\":0},\"chimp_bone_width\":{\"item\":0,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"pants\":{\"item\":262,\"texture\":2,\"defaultItem\":0,\"defaultTexture\":0},\"blush\":{\"item\":-1,\"texture\":1,\"defaultItem\":-1,\"defaultTexture\":1},\"jaw_bone_back_lenght\":{\"item\":0,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"eyebrown_forward\":{\"item\":0,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"jaw_bone_width\":{\"item\":0,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"eyebrows\":{\"item\":21,\"texture\":1,\"defaultItem\":-1,\"defaultTexture\":1},\"nose_0\":{\"item\":22,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"t-shirt\":{\"item\":361,\"texture\":2,\"defaultItem\":1,\"defaultTexture\":0},\"watch\":{\"item\":203,\"texture\":2,\"defaultItem\":-1,\"defaultTexture\":0},\"lips_thickness\":{\"item\":0,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"makeup\":{\"item\":-1,\"texture\":1,\"defaultItem\":-1,\"defaultTexture\":1},\"eye_opening\":{\"item\":0,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"cheek_2\":{\"item\":0,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"hair\":{\"item\":205,\"texture\":28,\"defaultItem\":0,\"defaultTexture\":0},\"decals\":{\"item\":228,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"cheek_3\":{\"item\":0,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"face\":{\"item\":31,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"neck_thikness\":{\"item\":0,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"chimp_hole\":{\"item\":0,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"shoes\":{\"item\":233,\"texture\":1,\"defaultItem\":1,\"defaultTexture\":0},\"accessory\":{\"item\":221,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"nose_1\":{\"item\":7,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"arms\":{\"item\":209,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"lipstick\":{\"item\":10,\"texture\":25,\"defaultItem\":-1,\"defaultTexture\":1},\"nose_3\":{\"item\":0,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"torso2\":{\"item\":16,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"moles\":{\"item\":14,\"texture\":0,\"defaultItem\":-1,\"defaultTexture\":0},\"nose_5\":{\"item\":0,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"chimp_bone_lowering\":{\"item\":0,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"nose_2\":{\"item\":2,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"glass\":{\"item\":5,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"ear\":{\"item\":24,\"texture\":0,\"defaultItem\":-1,\"defaultTexture\":0},\"ageing\":{\"item\":-1,\"texture\":0,\"defaultItem\":-1,\"defaultTexture\":0},\"beard\":{\"item\":-1,\"texture\":1,\"defaultItem\":-1,\"defaultTexture\":1},\"facemix\":{\"skinMix\":0,\"defaultShapeMix\":0.0,\"defaultSkinMix\":0.0,\"shapeMix\":0},\"eye_color\":{\"item\":18,\"texture\":0,\"defaultItem\":-1,\"defaultTexture\":0},\"mask\":{\"item\":0,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"nose_4\":{\"item\":0,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"cheek_1\":{\"item\":0,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"chimp_bone_lenght\":{\"item\":0,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"face2\":{\"item\":18,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0},\"vest\":{\"item\":0,\"texture\":0,\"defaultItem\":0,\"defaultTexture\":0}}', 1),
(7, 'VUQ62233', '1885233650', '{\"torso2\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"hair\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"ageing\":{\"defaultItem\":-1,\"item\":-1,\"defaultTexture\":0,\"texture\":0},\"blush\":{\"defaultItem\":-1,\"item\":-1,\"defaultTexture\":1,\"texture\":1},\"bag\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"nose_0\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"glass\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"cheek_1\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"watch\":{\"defaultItem\":-1,\"item\":-1,\"defaultTexture\":0,\"texture\":0},\"chimp_bone_lowering\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"facemix\":{\"defaultShapeMix\":0.0,\"skinMix\":0,\"shapeMix\":0,\"defaultSkinMix\":0.0},\"hat\":{\"defaultItem\":-1,\"item\":-1,\"defaultTexture\":0,\"texture\":0},\"nose_4\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"nose_5\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"chimp_hole\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"beard\":{\"defaultItem\":-1,\"item\":-1,\"defaultTexture\":1,\"texture\":1},\"nose_1\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"cheek_2\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"shoes\":{\"defaultItem\":1,\"item\":1,\"defaultTexture\":0,\"texture\":0},\"jaw_bone_width\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"accessory\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"makeup\":{\"defaultItem\":-1,\"item\":-1,\"defaultTexture\":1,\"texture\":1},\"ear\":{\"defaultItem\":-1,\"item\":-1,\"defaultTexture\":0,\"texture\":0},\"nose_2\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"pants\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"vest\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"eyebrows\":{\"defaultItem\":-1,\"item\":-1,\"defaultTexture\":1,\"texture\":1},\"nose_3\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"chimp_bone_lenght\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"t-shirt\":{\"defaultItem\":1,\"item\":1,\"defaultTexture\":0,\"texture\":0},\"lipstick\":{\"defaultItem\":-1,\"item\":-1,\"defaultTexture\":1,\"texture\":1},\"bracelet\":{\"defaultItem\":-1,\"item\":-1,\"defaultTexture\":0,\"texture\":0},\"eyebrown_high\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"cheek_3\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"lips_thickness\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"eye_color\":{\"defaultItem\":-1,\"item\":-1,\"defaultTexture\":0,\"texture\":0},\"eyebrown_forward\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"face\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"mask\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"chimp_bone_width\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"face2\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"moles\":{\"defaultItem\":-1,\"item\":-1,\"defaultTexture\":0,\"texture\":0},\"decals\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"neck_thikness\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"jaw_bone_back_lenght\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"arms\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0},\"eye_opening\":{\"defaultItem\":0,\"item\":0,\"defaultTexture\":0,\"texture\":0}}', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `player_contacts`
--

CREATE TABLE `player_contacts` (
  `id` int(11) NOT NULL,
  `citizenid` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `number` varchar(50) DEFAULT NULL,
  `iban` varchar(50) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `player_houses`
--

CREATE TABLE `player_houses` (
  `id` int(255) NOT NULL,
  `house` varchar(50) NOT NULL,
  `identifier` varchar(50) DEFAULT NULL,
  `citizenid` varchar(50) DEFAULT NULL,
  `keyholders` text DEFAULT NULL,
  `decorations` text DEFAULT NULL,
  `stash` text DEFAULT NULL,
  `outfit` text DEFAULT NULL,
  `logout` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `player_mails`
--

CREATE TABLE `player_mails` (
  `id` int(11) NOT NULL,
  `citizenid` varchar(50) DEFAULT NULL,
  `sender` varchar(50) DEFAULT NULL,
  `subject` varchar(50) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `read` tinyint(4) DEFAULT 0,
  `mailid` int(11) DEFAULT NULL,
  `date` timestamp NULL DEFAULT current_timestamp(),
  `button` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `player_mails`
--

INSERT INTO `player_mails` (`id`, `citizenid`, `sender`, `subject`, `message`, `read`, `mailid`, `date`, `button`) VALUES
(1, 'VZN18712', 'Pillbox Hospital', 'Hospital Costs', 'Dear Mr. phat, <br /><br />Hereby you received an email with the costs of the last hospital visit.<br />The final costs have become: <strong>$2000</strong><br /><br />We wish you a quick recovery!', 0, 666005, '2023-06-04 09:13:46', '[]'),
(2, 'VZN18712', 'Pillbox Hospital', 'Hospital Costs', 'Dear Mr. phat, <br /><br />Hereby you received an email with the costs of the last hospital visit.<br />The final costs have become: <strong>$2000</strong><br /><br />We wish you a quick recovery!', 0, 507322, '2023-06-04 09:13:49', '[]'),
(3, 'VZN18712', '[01KFB770]', 'Patriot Military Mil-Spec<br>', 'Patriot Military Mil-Spec<br>Plates: [01KFB770]<br><br>Amount of changes: 6<br> ------------------------------ <br><br> Window Tints - [ Green ] - <br>Spoilers - [ 1. Secondary Trunk ]<br>Front Bumpers - [ 6. Black Offroad Crux Bumper ]<br>Grilles - [ 7. Chrome Wide Guard w/ 4x Fogs ]<br>Roll Cages - [ 1. Heavy Plated Doors ]<br>Ornaments - [ 5. Roll Cage w/ Spare Wheel ]', 0, 164274, '2023-06-05 13:02:00', '[]');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `player_outfits`
--

CREATE TABLE `player_outfits` (
  `id` int(11) NOT NULL,
  `citizenid` varchar(50) DEFAULT NULL,
  `outfitname` varchar(50) NOT NULL,
  `model` varchar(50) DEFAULT NULL,
  `skin` text DEFAULT NULL,
  `outfitId` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `player_outfits`
--

INSERT INTO `player_outfits` (`id`, `citizenid`, `outfitname`, `model`, `skin`, `outfitId`) VALUES
(1, 'HGF56275', '1', '-1667301416', '{\"nose_5\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":0,\"texture\":0},\"beard\":{\"defaultTexture\":1,\"defaultItem\":-1,\"item\":-1,\"texture\":1},\"face\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":31,\"texture\":0},\"moles\":{\"defaultTexture\":0,\"defaultItem\":-1,\"item\":16,\"texture\":10},\"pants\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":262,\"texture\":2},\"ear\":{\"defaultTexture\":0,\"defaultItem\":-1,\"item\":24,\"texture\":0},\"accessory\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":221,\"texture\":0},\"shoes\":{\"defaultTexture\":0,\"defaultItem\":1,\"item\":233,\"texture\":1},\"jaw_bone_back_lenght\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":0,\"texture\":0},\"eyebrows\":{\"defaultTexture\":1,\"defaultItem\":-1,\"item\":21,\"texture\":1},\"face2\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":18,\"texture\":0},\"neck_thikness\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":0,\"texture\":0},\"facemix\":{\"shapeMix\":0,\"skinMix\":0,\"defaultSkinMix\":0.0,\"defaultShapeMix\":0.0},\"torso2\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":16,\"texture\":0},\"arms\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":209,\"texture\":0},\"eyebrown_forward\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":0,\"texture\":0},\"nose_3\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":0,\"texture\":0},\"nose_2\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":2,\"texture\":0},\"chimp_bone_lowering\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":0,\"texture\":0},\"makeup\":{\"defaultTexture\":1,\"defaultItem\":-1,\"item\":-1,\"texture\":1},\"cheek_3\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":0,\"texture\":0},\"hair\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":4,\"texture\":29},\"nose_4\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":0,\"texture\":0},\"glass\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":5,\"texture\":0},\"eye_color\":{\"defaultTexture\":0,\"defaultItem\":-1,\"item\":11,\"texture\":0},\"nose_0\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":22,\"texture\":0},\"eye_opening\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":0,\"texture\":0},\"cheek_2\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":0,\"texture\":0},\"nose_1\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":7,\"texture\":0},\"jaw_bone_width\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":0,\"texture\":0},\"cheek_1\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":0,\"texture\":0},\"chimp_hole\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":0,\"texture\":0},\"lipstick\":{\"defaultTexture\":1,\"defaultItem\":-1,\"item\":10,\"texture\":25},\"blush\":{\"defaultTexture\":1,\"defaultItem\":-1,\"item\":-1,\"texture\":1},\"decals\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":228,\"texture\":0},\"bag\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":0,\"texture\":0},\"mask\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":0,\"texture\":0},\"ageing\":{\"defaultTexture\":0,\"defaultItem\":-1,\"item\":-1,\"texture\":0},\"watch\":{\"defaultTexture\":0,\"defaultItem\":-1,\"item\":203,\"texture\":2},\"eyebrown_high\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":0,\"texture\":0},\"lips_thickness\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":0,\"texture\":0},\"t-shirt\":{\"defaultTexture\":0,\"defaultItem\":1,\"item\":361,\"texture\":2},\"chimp_bone_lenght\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":0,\"texture\":0},\"hat\":{\"defaultTexture\":0,\"defaultItem\":-1,\"item\":-1,\"texture\":0},\"vest\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":0,\"texture\":0},\"chimp_bone_width\":{\"defaultTexture\":0,\"defaultItem\":0,\"item\":0,\"texture\":0},\"bracelet\":{\"defaultTexture\":0,\"defaultItem\":-1,\"item\":196,\"texture\":0}}', 'outfit-5-8601'),
(2, 'HGF56275', '1', '-1667301416', '{\"makeup\":{\"defaultItem\":-1,\"item\":-1,\"texture\":1,\"defaultTexture\":1},\"ear\":{\"defaultItem\":-1,\"item\":24,\"texture\":0,\"defaultTexture\":0},\"nose_1\":{\"defaultItem\":0,\"item\":7,\"texture\":0,\"defaultTexture\":0},\"facemix\":{\"shapeMix\":0,\"skinMix\":0,\"defaultShapeMix\":0.0,\"defaultSkinMix\":0.0},\"moles\":{\"defaultItem\":-1,\"item\":14,\"texture\":0,\"defaultTexture\":0},\"cheek_1\":{\"defaultItem\":0,\"item\":0,\"texture\":0,\"defaultTexture\":0},\"vest\":{\"defaultItem\":0,\"item\":0,\"texture\":0,\"defaultTexture\":0},\"eye_opening\":{\"defaultItem\":0,\"item\":0,\"texture\":0,\"defaultTexture\":0},\"lips_thickness\":{\"defaultItem\":0,\"item\":0,\"texture\":0,\"defaultTexture\":0},\"nose_0\":{\"defaultItem\":0,\"item\":22,\"texture\":0,\"defaultTexture\":0},\"eyebrown_forward\":{\"defaultItem\":0,\"item\":0,\"texture\":0,\"defaultTexture\":0},\"arms\":{\"defaultItem\":0,\"item\":209,\"texture\":0,\"defaultTexture\":0},\"mask\":{\"defaultItem\":0,\"item\":0,\"texture\":0,\"defaultTexture\":0},\"jaw_bone_back_lenght\":{\"defaultItem\":0,\"item\":0,\"texture\":0,\"defaultTexture\":0},\"neck_thikness\":{\"defaultItem\":0,\"item\":0,\"texture\":0,\"defaultTexture\":0},\"t-shirt\":{\"defaultItem\":1,\"item\":361,\"texture\":2,\"defaultTexture\":0},\"chimp_bone_lenght\":{\"defaultItem\":0,\"item\":0,\"texture\":0,\"defaultTexture\":0},\"bag\":{\"defaultItem\":0,\"item\":0,\"texture\":0,\"defaultTexture\":0},\"nose_4\":{\"defaultItem\":0,\"item\":0,\"texture\":0,\"defaultTexture\":0},\"cheek_3\":{\"defaultItem\":0,\"item\":0,\"texture\":0,\"defaultTexture\":0},\"decals\":{\"defaultItem\":0,\"item\":228,\"texture\":0,\"defaultTexture\":0},\"eye_color\":{\"defaultItem\":-1,\"item\":18,\"texture\":0,\"defaultTexture\":0},\"beard\":{\"defaultItem\":-1,\"item\":-1,\"texture\":1,\"defaultTexture\":1},\"cheek_2\":{\"defaultItem\":0,\"item\":0,\"texture\":0,\"defaultTexture\":0},\"ageing\":{\"defaultItem\":-1,\"item\":-1,\"texture\":0,\"defaultTexture\":0},\"glass\":{\"defaultItem\":0,\"item\":5,\"texture\":0,\"defaultTexture\":0},\"hat\":{\"defaultItem\":-1,\"item\":-1,\"texture\":0,\"defaultTexture\":0},\"chimp_bone_lowering\":{\"defaultItem\":0,\"item\":0,\"texture\":0,\"defaultTexture\":0},\"nose_5\":{\"defaultItem\":0,\"item\":0,\"texture\":0,\"defaultTexture\":0},\"lipstick\":{\"defaultItem\":-1,\"item\":10,\"texture\":25,\"defaultTexture\":1},\"face2\":{\"defaultItem\":0,\"item\":18,\"texture\":0,\"defaultTexture\":0},\"shoes\":{\"defaultItem\":1,\"item\":233,\"texture\":1,\"defaultTexture\":0},\"chimp_bone_width\":{\"defaultItem\":0,\"item\":0,\"texture\":0,\"defaultTexture\":0},\"hair\":{\"defaultItem\":0,\"item\":205,\"texture\":28,\"defaultTexture\":0},\"pants\":{\"defaultItem\":0,\"item\":262,\"texture\":2,\"defaultTexture\":0},\"eyebrown_high\":{\"defaultItem\":0,\"item\":0,\"texture\":0,\"defaultTexture\":0},\"nose_2\":{\"defaultItem\":0,\"item\":2,\"texture\":0,\"defaultTexture\":0},\"bracelet\":{\"defaultItem\":-1,\"item\":196,\"texture\":0,\"defaultTexture\":0},\"chimp_hole\":{\"defaultItem\":0,\"item\":0,\"texture\":0,\"defaultTexture\":0},\"jaw_bone_width\":{\"defaultItem\":0,\"item\":0,\"texture\":0,\"defaultTexture\":0},\"blush\":{\"defaultItem\":-1,\"item\":-1,\"texture\":1,\"defaultTexture\":1},\"watch\":{\"defaultItem\":-1,\"item\":203,\"texture\":2,\"defaultTexture\":0},\"nose_3\":{\"defaultItem\":0,\"item\":0,\"texture\":0,\"defaultTexture\":0},\"eyebrows\":{\"defaultItem\":-1,\"item\":21,\"texture\":1,\"defaultTexture\":1},\"accessory\":{\"defaultItem\":0,\"item\":221,\"texture\":0,\"defaultTexture\":0},\"face\":{\"defaultItem\":0,\"item\":31,\"texture\":0,\"defaultTexture\":0},\"torso2\":{\"defaultItem\":0,\"item\":16,\"texture\":0,\"defaultTexture\":0}}', 'outfit-3-2048');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `player_vehicles`
--

CREATE TABLE `player_vehicles` (
  `id` int(11) NOT NULL,
  `license` varchar(50) DEFAULT NULL,
  `citizenid` varchar(50) DEFAULT NULL,
  `vehicle` varchar(50) DEFAULT NULL,
  `hash` varchar(50) DEFAULT NULL,
  `mods` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `plate` varchar(50) NOT NULL,
  `fakeplate` varchar(50) DEFAULT NULL,
  `garage` varchar(50) DEFAULT NULL,
  `fuel` int(11) DEFAULT 100,
  `engine` float DEFAULT 1000,
  `body` float DEFAULT 1000,
  `state` int(11) DEFAULT 1,
  `depotprice` int(11) NOT NULL DEFAULT 0,
  `drivingdistance` int(50) DEFAULT NULL,
  `status` text DEFAULT NULL,
  `balance` int(11) NOT NULL DEFAULT 0,
  `paymentamount` int(11) NOT NULL DEFAULT 0,
  `paymentsleft` int(11) NOT NULL DEFAULT 0,
  `financetime` int(11) NOT NULL DEFAULT 0,
  `nosColour` text DEFAULT NULL,
  `traveldistance` int(50) DEFAULT 0,
  `noslevel` int(10) DEFAULT 0,
  `hasnitro` tinyint(4) DEFAULT 0,
  `carseller` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Đang đổ dữ liệu cho bảng `player_vehicles`
--

INSERT INTO `player_vehicles` (`id`, `license`, `citizenid`, `vehicle`, `hash`, `mods`, `plate`, `fakeplate`, `garage`, `fuel`, `engine`, `body`, `state`, `depotprice`, `drivingdistance`, `status`, `balance`, `paymentamount`, `paymentsleft`, `financetime`, `nosColour`, `traveldistance`, `noslevel`, `hasnitro`, `carseller`) VALUES
(1, 'license:584e96891fffa68a4e493021a1bfd2df8d64ae87', 'selling', 'tyrus', '2067820283', '{\"modKit21\":-1,\"modXenon\":false,\"modTrimB\":-1,\"modFrame\":-1,\"modBackWheels\":-1,\"modSeats\":-1,\"modSpoilers\":-1,\"modAerials\":-1,\"tankHealth\":993.7046216400761,\"modStruts\":-1,\"modOrnaments\":-1,\"modHood\":-1,\"modArchCover\":-1,\"modAPlate\":-1,\"doorStatus\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modSideSkirt\":-1,\"neonEnabled\":[false,false,false,false],\"modTrimA\":-1,\"dirtLevel\":0.79432823472428,\"modGrille\":-1,\"modSteeringWheel\":-1,\"bodyHealth\":942.0732863829978,\"modKit19\":-1,\"modKit17\":-1,\"engineHealth\":939.690301678825,\"modRoof\":-1,\"modPlateHolder\":-1,\"neonColor\":[0,0,0],\"modVanityPlate\":-1,\"wheels\":7,\"modSmokeEnabled\":false,\"headlightColor\":255,\"modKit49\":-1,\"modLivery\":-1,\"modBrakes\":-1,\"wheelSize\":1.0,\"fuelLevel\":49.24835055290545,\"plateIndex\":0,\"windowStatus\":{\"1\":true,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"6\":true,\"7\":false,\"0\":true},\"modTurbo\":false,\"modWindows\":-1,\"modRightFender\":-1,\"modEngine\":-1,\"model\":2067820283,\"modDoorSpeaker\":-1,\"modArmor\":-1,\"plate\":\"21XPI837\",\"modExhaust\":-1,\"tireHealth\":{\"1\":1000.0,\"2\":1000.0,\"3\":1000.0,\"0\":1000.0},\"extras\":[],\"modHydrolic\":-1,\"modDial\":-1,\"windowTint\":-1,\"modFrontBumper\":-1,\"modCustomTiresF\":false,\"modShifterLeavers\":-1,\"tireBurstCompletely\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"dashboardColor\":111,\"modTank\":-1,\"modSpeakers\":-1,\"tireBurstState\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modHorns\":-1,\"wheelColor\":38,\"modTransmission\":-1,\"modKit47\":-1,\"modEngineBlock\":-1,\"modFrontWheels\":-1,\"interiorColor\":111,\"tyreSmokeColor\":[255,255,255],\"modCustomTiresR\":false,\"modSuspension\":-1,\"color1\":1,\"modRearBumper\":-1,\"liveryRoof\":-1,\"modFender\":-1,\"pearlescentColor\":3,\"oilLevel\":4.76596940834568,\"xenonColor\":255,\"modDashboard\":-1,\"color2\":3,\"modAirFilter\":-1,\"wheelWidth\":1.0,\"modTrunk\":-1}', '21XPI837', NULL, 'pillboxgarage', 50, 940, 942, 0, 0, 968166, NULL, 0, 0, 0, 0, NULL, 0, 0, 0, 0),
(2, 'license:2c5985206d5f0d23291924441902b7416336bfe1', 'HGF56275', 'ignus', '-1444114309', '{\"neonEnabled\":[false,false,false,false],\"engineHealth\":1000.0592475178704,\"modExhaust\":-1,\"modHydrolic\":-1,\"modKit19\":-1,\"modXenon\":false,\"windowStatus\":{\"1\":true,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"6\":true,\"7\":true,\"0\":true},\"extras\":[],\"modOrnaments\":-1,\"modKit21\":-1,\"tireBurstState\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modGrille\":-1,\"modLivery\":-1,\"tyreSmokeColor\":[255,255,255],\"modTrimA\":-1,\"interiorColor\":17,\"windowTint\":-1,\"modDashboard\":-1,\"modHorns\":-1,\"modDoorSpeaker\":-1,\"liveryRoof\":-1,\"modSuspension\":-1,\"modFrontWheels\":-1,\"modTank\":-1,\"neonColor\":[255,0,255],\"modBrakes\":-1,\"xenonColor\":255,\"modVanityPlate\":-1,\"modDial\":-1,\"dashboardColor\":156,\"modEngine\":-1,\"modPlateHolder\":-1,\"modSmokeEnabled\":false,\"modKit49\":-1,\"modArmor\":-1,\"wheels\":7,\"modSteeringWheel\":-1,\"modSpeakers\":-1,\"modCustomTiresF\":false,\"modAerials\":-1,\"modSideSkirt\":-1,\"modRoof\":-1,\"wheelColor\":2,\"modStruts\":-1,\"modFrame\":-1,\"model\":-1444114309,\"pearlescentColor\":73,\"color2\":55,\"plateIndex\":0,\"modRightFender\":-1,\"modKit17\":-1,\"modAPlate\":-1,\"fuelLevel\":100.08535757525947,\"modShifterLeavers\":-1,\"modSeats\":-1,\"modWindows\":-1,\"modArchCover\":-1,\"modBackWheels\":-1,\"modEngineBlock\":-1,\"modFrontBumper\":-1,\"tireBurstCompletely\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modFender\":-1,\"plate\":\"3CS259DB\",\"modHood\":-1,\"modCustomTiresR\":false,\"tireHealth\":{\"1\":1000.0,\"2\":1000.0,\"3\":1000.0,\"0\":1000.0},\"wheelWidth\":0.0,\"headlightColor\":255,\"doorStatus\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"bodyHealth\":1000.0592475178704,\"modTransmission\":-1,\"modRearBumper\":-1,\"modKit47\":-1,\"modSpoilers\":-1,\"tankHealth\":1000.0592475178704,\"modAirFilter\":-1,\"wheelSize\":0.0,\"modTurbo\":false,\"oilLevel\":4.76596940834568,\"color1\":117,\"modTrimB\":-1,\"modTrunk\":-1,\"dirtLevel\":7.94328234724281}', '3CS259DB', NULL, 'pillboxgarage', 100, 1000, 1000, 0, 0, 24315, NULL, 0, 0, 0, 0, NULL, 0, 0, 0, 0),
(3, 'license:2c5985206d5f0d23291924441902b7416336bfe1', 'HGF56275', 'jester4', '-1582061455', '{\"dirtLevel\":0.0,\"pearlescentColor\":5,\"modLivery\":-1,\"modXenon\":false,\"modKit17\":-1,\"doorStatus\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modSpeakers\":-1,\"tireBurstCompletely\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"headlightColor\":255,\"xenonColor\":255,\"modEngine\":-1,\"tireHealth\":{\"1\":1000.0,\"2\":1000.0,\"3\":1000.0,\"0\":1000.0},\"modDoorSpeaker\":-1,\"modRearBumper\":-1,\"modRoof\":-1,\"modDial\":-1,\"modSteeringWheel\":-1,\"modBackWheels\":-1,\"modKit21\":-1,\"modHorns\":-1,\"wheelColor\":134,\"modSmokeEnabled\":false,\"modArmor\":-1,\"modAerials\":-1,\"modExhaust\":-1,\"wheelWidth\":0.0,\"modCustomTiresR\":false,\"extras\":[],\"modFrontWheels\":-1,\"modShifterLeavers\":-1,\"modSeats\":-1,\"modOrnaments\":-1,\"modKit47\":-1,\"tyreSmokeColor\":[255,255,255],\"fuelLevel\":53.21999172652686,\"modCustomTiresF\":false,\"windowStatus\":{\"1\":true,\"2\":true,\"3\":true,\"4\":false,\"5\":false,\"6\":true,\"7\":true,\"0\":true},\"modArchCover\":-1,\"color1\":20,\"wheels\":1,\"modVanityPlate\":-1,\"wheelSize\":0.0,\"modTrunk\":-1,\"windowTint\":-1,\"modTrimB\":-1,\"modSideSkirt\":-1,\"modHood\":-1,\"tankHealth\":1000.0592475178704,\"modHydrolic\":-1,\"modAirFilter\":-1,\"modAPlate\":-1,\"modTank\":-1,\"neonEnabled\":[false,false,false,false],\"liveryRoof\":-1,\"modWindows\":-1,\"modTrimA\":-1,\"modStruts\":-1,\"modDashboard\":-1,\"engineHealth\":1000.0592475178704,\"oilLevel\":4.76596940834568,\"plate\":\"21JEH457\",\"interiorColor\":27,\"modFender\":-1,\"modGrille\":-1,\"modEngineBlock\":-1,\"modFrame\":-1,\"color2\":36,\"modTransmission\":-1,\"model\":-1582061455,\"modSpoilers\":-1,\"neonColor\":[255,0,255],\"plateIndex\":0,\"modTurbo\":false,\"bodyHealth\":1000.0592475178704,\"modPlateHolder\":-1,\"modSuspension\":-1,\"tireBurstState\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modFrontBumper\":-1,\"modKit49\":-1,\"modKit19\":-1,\"modRightFender\":-1,\"dashboardColor\":156,\"modBrakes\":-1}', '21JEH457', NULL, NULL, 100, 1000, 1000, 0, 0, 7605, NULL, 0, 0, 0, 0, NULL, 0, 0, 0, 0),
(4, 'license:584e96891fffa68a4e493021a1bfd2df8d64ae87', 'selling', 'ignus', '-1444114309', '{\"modDial\":-1,\"modEngine\":-1,\"modEngineBlock\":-1,\"modPlateHolder\":-1,\"tireBurstCompletely\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modOrnaments\":-1,\"modFrontBumper\":-1,\"modStruts\":-1,\"modDashboard\":-1,\"liveryRoof\":-1,\"xenonColor\":255,\"modKit49\":-1,\"modSpoilers\":-1,\"modLivery\":-1,\"modTrimA\":-1,\"oilLevel\":4.76596940834568,\"modTurbo\":false,\"modExhaust\":-1,\"modCustomTiresF\":false,\"modSmokeEnabled\":false,\"color2\":88,\"tireBurstState\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modKit17\":-1,\"modHydrolic\":-1,\"wheelSize\":0.0,\"modRightFender\":-1,\"doorStatus\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"dashboardColor\":156,\"modAerials\":-1,\"modBrakes\":-1,\"headlightColor\":255,\"tireHealth\":{\"1\":1000.0,\"2\":1000.0,\"3\":1000.0,\"0\":1000.0},\"modKit47\":-1,\"wheelColor\":158,\"modWindows\":-1,\"dirtLevel\":0.0,\"bodyHealth\":1000.0592475178704,\"wheelWidth\":0.0,\"windowStatus\":{\"1\":true,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"6\":true,\"7\":true,\"0\":true},\"modRearBumper\":-1,\"modTransmission\":-1,\"modRoof\":-1,\"modTank\":-1,\"modCustomTiresR\":false,\"modVanityPlate\":-1,\"modShifterLeavers\":-1,\"modFrontWheels\":-1,\"modArchCover\":-1,\"pearlescentColor\":94,\"neonColor\":[0,0,0],\"modHorns\":-1,\"wheels\":7,\"modBackWheels\":-1,\"neonEnabled\":[false,false,false,false],\"modAirFilter\":-1,\"engineHealth\":1000.0592475178704,\"extras\":[],\"modSuspension\":-1,\"modSeats\":-1,\"modSideSkirt\":-1,\"modXenon\":false,\"model\":-1444114309,\"modFender\":-1,\"windowTint\":-1,\"interiorColor\":17,\"tyreSmokeColor\":[255,255,255],\"modKit19\":-1,\"color1\":59,\"fuelLevel\":69.10655642101249,\"modKit21\":-1,\"modFrame\":-1,\"modTrunk\":-1,\"modGrille\":-1,\"plateIndex\":0,\"modArmor\":-1,\"modDoorSpeaker\":-1,\"modSteeringWheel\":-1,\"modTrimB\":-1,\"modAPlate\":-1,\"tankHealth\":1000.0592475178704,\"plate\":\"42NKZ478\",\"modSpeakers\":-1,\"modHood\":-1}', '42NKZ478', NULL, NULL, 100, 1000, 1000, 0, 0, 968251, NULL, 0, 0, 0, 0, NULL, 0, 0, 0, 0),
(5, 'license:09f3a5c84bbc3f85b4c6b4cf8dca00bd76562f66', 'selling', 'bjxl', '850565707', '{\"modDial\":-1,\"modEngine\":-1,\"modEngineBlock\":-1,\"modArchCover\":-1,\"tireBurstCompletely\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modHood\":-1,\"modKit19\":-1,\"modStruts\":-1,\"modDashboard\":-1,\"liveryRoof\":-1,\"xenonColor\":255,\"modKit49\":-1,\"modSpoilers\":-1,\"modLivery\":-1,\"modTrimA\":-1,\"oilLevel\":4.76596940834568,\"modTurbo\":false,\"modExhaust\":-1,\"modCustomTiresF\":false,\"modSmokeEnabled\":false,\"color2\":5,\"tireBurstState\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modKit17\":-1,\"modHydrolic\":-1,\"wheelSize\":0.0,\"modRightFender\":-1,\"doorStatus\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modAirFilter\":-1,\"modAerials\":-1,\"modBrakes\":-1,\"headlightColor\":255,\"tireHealth\":{\"1\":1000.0,\"2\":1000.0,\"3\":1000.0,\"0\":1000.0},\"modKit47\":-1,\"modKit21\":-1,\"modWindows\":-1,\"dirtLevel\":7.14895411251853,\"bodyHealth\":1000.0592475178704,\"modShifterLeavers\":-1,\"modFrontWheels\":-1,\"modRearBumper\":-1,\"dashboardColor\":0,\"modRoof\":-1,\"modPlateHolder\":-1,\"modCustomTiresR\":false,\"modVanityPlate\":-1,\"modHorns\":-1,\"windowTint\":-1,\"modOrnaments\":-1,\"pearlescentColor\":5,\"neonColor\":[255,0,255],\"modFrame\":-1,\"wheels\":3,\"interiorColor\":0,\"neonEnabled\":[false,false,false,false],\"tyreSmokeColor\":[255,255,255],\"engineHealth\":1000.0592475178704,\"extras\":{\"11\":false,\"5\":false,\"10\":false},\"modSuspension\":-1,\"modSeats\":-1,\"modBackWheels\":-1,\"modXenon\":false,\"model\":850565707,\"modTrunk\":-1,\"modArmor\":-1,\"modSideSkirt\":-1,\"modTransmission\":-1,\"modFender\":-1,\"fuelLevel\":42.09939644038692,\"wheelWidth\":0.0,\"modTank\":-1,\"windowStatus\":{\"1\":true,\"2\":true,\"3\":true,\"4\":true,\"5\":true,\"6\":true,\"7\":true,\"0\":true},\"color1\":0,\"modGrille\":-1,\"modFrontBumper\":-1,\"plateIndex\":0,\"modDoorSpeaker\":-1,\"modSteeringWheel\":-1,\"modTrimB\":-1,\"modAPlate\":-1,\"tankHealth\":1000.0592475178704,\"plate\":\"00NUC451\",\"wheelColor\":156,\"modSpeakers\":-1}', '00NUC451', NULL, NULL, 100, 1000, 1000, 0, 0, 507662, NULL, 0, 0, 0, 0, NULL, 0, 0, 0, 0),
(6, 'license:09f3a5c84bbc3f85b4c6b4cf8dca00bd76562f66', 'BVK76388', 'sultan3', '-291021213', '{\"modDial\":14,\"modEngine\":3,\"modEngineBlock\":2,\"modArchCover\":4,\"tireBurstCompletely\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modHood\":14,\"modKit19\":-1,\"modStruts\":11,\"modDashboard\":4,\"liveryRoof\":-1,\"xenonColor\":11,\"modKit49\":-1,\"modSpoilers\":15,\"modLivery\":13,\"modTrimA\":1,\"oilLevel\":4.76596940834568,\"modTurbo\":1,\"modExhaust\":7,\"modCustomTiresF\":false,\"modSmokeEnabled\":1,\"color2\":50,\"tireBurstState\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modKit17\":-1,\"modHydrolic\":-1,\"wheelSize\":1.0,\"modRightFender\":6,\"doorStatus\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modAirFilter\":6,\"modAerials\":6,\"modBrakes\":2,\"headlightColor\":11,\"tireHealth\":{\"1\":1000.0,\"2\":1000.0,\"3\":1000.0,\"0\":1000.0},\"modKit47\":-1,\"modKit21\":-1,\"modWindows\":-1,\"dirtLevel\":9.53193881669137,\"bodyHealth\":1000.0592475178704,\"modShifterLeavers\":-1,\"modFrontWheels\":-1,\"modRearBumper\":3,\"dashboardColor\":160,\"modRoof\":-1,\"modPlateHolder\":-1,\"modCustomTiresR\":false,\"modVanityPlate\":-1,\"modHorns\":-1,\"windowTint\":1,\"modOrnaments\":-1,\"pearlescentColor\":57,\"neonColor\":[255,0,255],\"modFrame\":4,\"wheels\":0,\"interiorColor\":3,\"neonEnabled\":[false,false,false,false],\"tyreSmokeColor\":[44,94,5],\"engineHealth\":1000.0592475178704,\"extras\":[],\"modSuspension\":3,\"modSeats\":-1,\"modBackWheels\":-1,\"modXenon\":1,\"model\":-291021213,\"modTrunk\":-1,\"modArmor\":4,\"modSideSkirt\":3,\"modTransmission\":2,\"modFender\":-1,\"fuelLevel\":44.48238114455976,\"wheelWidth\":1.0,\"modTank\":-1,\"windowStatus\":{\"1\":true,\"2\":true,\"3\":true,\"4\":false,\"5\":false,\"6\":true,\"7\":true,\"0\":true},\"color1\":50,\"modGrille\":3,\"modFrontBumper\":4,\"plateIndex\":0,\"modDoorSpeaker\":6,\"modSteeringWheel\":-1,\"modTrimB\":2,\"modAPlate\":-1,\"tankHealth\":1000.0592475178704,\"plate\":\"89YYH554\",\"wheelColor\":156,\"modSpeakers\":-1}', '89YYH554', NULL, NULL, 100, 1000, 1000, 0, 0, 186373, NULL, 0, 0, 0, 0, NULL, 0, 0, 0, 0),
(7, 'license:584e96891fffa68a4e493021a1bfd2df8d64ae87', 'VZN18712', 'ignus', '-1444114309', '{\"modOrnaments\":-1,\"modKit19\":-1,\"modKit49\":-1,\"modSpeakers\":-1,\"modEngine\":-1,\"modFrontWheels\":-1,\"modHorns\":-1,\"modBrakes\":-1,\"neonColor\":[0,0,0],\"windowStatus\":{\"1\":true,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"6\":true,\"7\":true,\"0\":true},\"modDial\":-1,\"fuelLevel\":26.21283174590128,\"modHydrolic\":-1,\"color1\":59,\"modTank\":-1,\"dashboardColor\":156,\"wheels\":7,\"modKit47\":-1,\"tireHealth\":{\"1\":1000.0,\"2\":1000.0,\"3\":1000.0,\"0\":1000.0},\"extras\":[],\"liveryRoof\":-1,\"modArchCover\":-1,\"modAPlate\":-1,\"interiorColor\":17,\"modStruts\":-1,\"tireBurstCompletely\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"wheelColor\":158,\"modExhaust\":-1,\"modCustomTiresF\":false,\"tireBurstState\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"plateIndex\":0,\"engineHealth\":1000.0592475178704,\"modFrontBumper\":-1,\"modFender\":-1,\"modHood\":-1,\"modSuspension\":-1,\"wheelWidth\":0.0,\"tankHealth\":1000.0592475178704,\"modTrimB\":-1,\"modArmor\":-1,\"color2\":88,\"modTransmission\":-1,\"modTrunk\":-1,\"modKit17\":-1,\"modWindows\":-1,\"wheelSize\":0.0,\"xenonColor\":255,\"modRoof\":-1,\"modGrille\":-1,\"modBackWheels\":-1,\"modTrimA\":-1,\"modPlateHolder\":-1,\"modRightFender\":-1,\"modVanityPlate\":-1,\"modDashboard\":-1,\"modAirFilter\":-1,\"tyreSmokeColor\":[255,255,255],\"windowTint\":-1,\"modDoorSpeaker\":-1,\"modTurbo\":false,\"modAerials\":-1,\"modLivery\":-1,\"modFrame\":-1,\"modCustomTiresR\":false,\"modEngineBlock\":-1,\"doorStatus\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modShifterLeavers\":-1,\"modSteeringWheel\":-1,\"dirtLevel\":0.0,\"modSeats\":-1,\"pearlescentColor\":94,\"modSmokeEnabled\":false,\"modSideSkirt\":-1,\"modXenon\":false,\"oilLevel\":4.76596940834568,\"bodyHealth\":1000.0592475178704,\"modRearBumper\":-1,\"modSpoilers\":-1,\"neonEnabled\":[false,false,false,false],\"headlightColor\":255,\"plate\":\"05RXE241\",\"model\":-1444114309,\"modKit21\":-1}', '05RXE241', NULL, 'OUT', 100, 1000, 1000, 0, 0, 999219, NULL, 0, 0, 0, 0, NULL, 0, 0, 0, 0),
(8, 'license:584e96891fffa68a4e493021a1bfd2df8d64ae87', 'VZN18712', 'ignus', '-1444114309', '{\"modTransmission\":-1,\"plateIndex\":0,\"engineHealth\":1000.0592475178704,\"modOrnaments\":-1,\"fuelLevel\":59.57461760432111,\"modFrame\":-1,\"modBackWheels\":-1,\"modArmor\":-1,\"modSpoilers\":-1,\"modArchCover\":-1,\"modTurbo\":false,\"dirtLevel\":0.0,\"modFender\":-1,\"modDashboard\":-1,\"tyreSmokeColor\":[255,255,255],\"bodyHealth\":1000.0592475178704,\"modVanityPlate\":-1,\"modAirFilter\":-1,\"xenonColor\":255,\"modFrontWheels\":-1,\"modShifterLeavers\":-1,\"wheelColor\":158,\"extras\":[],\"modKit21\":-1,\"model\":-1444114309,\"dashboardColor\":156,\"modKit49\":-1,\"modXenon\":false,\"modDoorSpeaker\":-1,\"modSteeringWheel\":-1,\"windowStatus\":{\"1\":true,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"6\":true,\"7\":true,\"0\":true},\"modBrakes\":-1,\"modLivery\":-1,\"windowTint\":-1,\"modAerials\":-1,\"wheelSize\":0.0,\"modHorns\":-1,\"modTrimB\":-1,\"modSideSkirt\":-1,\"pearlescentColor\":94,\"modSeats\":-1,\"interiorColor\":17,\"modFrontBumper\":-1,\"modPlateHolder\":-1,\"headlightColor\":255,\"modTrimA\":-1,\"doorStatus\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modKit47\":-1,\"modHood\":-1,\"modWindows\":-1,\"modExhaust\":-1,\"modSuspension\":-1,\"plate\":\"24RJT206\",\"modRearBumper\":-1,\"neonColor\":[0,0,0],\"modStruts\":-1,\"neonEnabled\":[false,false,false,false],\"liveryRoof\":-1,\"modDial\":-1,\"modTank\":-1,\"modCustomTiresR\":false,\"modEngine\":-1,\"modHydrolic\":-1,\"modKit19\":-1,\"color2\":88,\"wheelWidth\":0.0,\"modRightFender\":-1,\"modGrille\":-1,\"tireBurstCompletely\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modSmokeEnabled\":false,\"oilLevel\":4.76596940834568,\"modKit17\":-1,\"modRoof\":-1,\"tireHealth\":{\"1\":1000.0,\"2\":1000.0,\"3\":1000.0,\"0\":1000.0},\"modSpeakers\":-1,\"modEngineBlock\":-1,\"modCustomTiresF\":false,\"tireBurstState\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modTrunk\":-1,\"modAPlate\":-1,\"wheels\":7,\"color1\":59,\"tankHealth\":1000.0592475178704}', '24RJT206', NULL, 'OUT', 100, 1000, 1000, 0, 0, 943840, NULL, 0, 0, 0, 0, NULL, 0, 0, 0, 0),
(9, 'license:584e96891fffa68a4e493021a1bfd2df8d64ae87', 'VZN18712', 'zeno', '655665811', '{\"modBackWheels\":-1,\"modSideSkirt\":-1,\"modKit21\":-1,\"modTrimA\":-1,\"fuelLevel\":75.46118229880674,\"modCustomTiresF\":false,\"modSmokeEnabled\":false,\"modSuspension\":-1,\"wheelColor\":0,\"tireHealth\":{\"1\":1000.0,\"2\":1000.0,\"3\":1000.0,\"0\":1000.0},\"pearlescentColor\":111,\"modBrakes\":-1,\"dirtLevel\":0.0,\"modSeats\":-1,\"modXenon\":false,\"wheelSize\":0.0,\"modWindows\":-1,\"modAPlate\":-1,\"windowTint\":-1,\"modCustomTiresR\":false,\"plate\":\"63YGH596\",\"wheels\":7,\"model\":655665811,\"modHorns\":-1,\"oilLevel\":4.76596940834568,\"modVanityPlate\":-1,\"modTrimB\":-1,\"modTurbo\":false,\"modAerials\":-1,\"modRightFender\":-1,\"tireBurstState\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modEngine\":-1,\"modDoorSpeaker\":-1,\"modGrille\":-1,\"wheelWidth\":0.0,\"neonColor\":[0,0,0],\"modHydrolic\":-1,\"modDial\":-1,\"modDashboard\":-1,\"xenonColor\":255,\"tyreSmokeColor\":[255,255,255],\"doorStatus\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"windowStatus\":{\"1\":true,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"6\":true,\"7\":true,\"0\":true},\"modPlateHolder\":-1,\"liveryRoof\":-1,\"modStruts\":-1,\"modKit49\":-1,\"modTransmission\":-1,\"modKit17\":-1,\"tankHealth\":1000.0592475178704,\"modSteeringWheel\":-1,\"plateIndex\":0,\"tireBurstCompletely\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modKit19\":-1,\"modEngineBlock\":-1,\"modHood\":-1,\"engineHealth\":1000.0592475178704,\"modFrame\":-1,\"color1\":111,\"modAirFilter\":-1,\"neonEnabled\":[false,false,false,false],\"modLivery\":-1,\"bodyHealth\":1000.0592475178704,\"modSpeakers\":-1,\"modFrontWheels\":-1,\"modArmor\":-1,\"extras\":[],\"modTank\":-1,\"modExhaust\":-1,\"modSpoilers\":-1,\"modFrontBumper\":-1,\"modOrnaments\":-1,\"interiorColor\":93,\"modArchCover\":-1,\"modTrunk\":-1,\"dashboardColor\":134,\"modRearBumper\":-1,\"modShifterLeavers\":-1,\"modRoof\":-1,\"color2\":0,\"modFender\":-1,\"modKit47\":-1,\"headlightColor\":255}', '63YGH596', NULL, 'OUT', 100, 1000, 1000, 0, 0, 572235, NULL, 0, 0, 0, 0, NULL, 0, 0, 0, 0),
(10, 'license:584e96891fffa68a4e493021a1bfd2df8d64ae87', 'VZN18712', 'zion', '-1122289213', '{\"modDashboard\":-1,\"modAerials\":-1,\"modStruts\":-1,\"wheels\":0,\"fuelLevel\":42.8937246751112,\"modCustomTiresF\":false,\"modCustomTiresR\":false,\"bodyHealth\":1000.0592475178704,\"liveryRoof\":-1,\"modFrame\":-1,\"modSpeakers\":-1,\"modFrontWheels\":-1,\"wheelWidth\":0.0,\"neonEnabled\":[false,false,false,false],\"modDoorSpeaker\":-1,\"neonColor\":[0,0,0],\"modHydrolic\":-1,\"color2\":1,\"modEngine\":-1,\"interiorColor\":0,\"modBackWheels\":-1,\"model\":-1122289213,\"wheelSize\":0.0,\"tyreSmokeColor\":[255,255,255],\"modAirFilter\":-1,\"dashboardColor\":0,\"modTank\":-1,\"wheelColor\":156,\"modKit47\":-1,\"dirtLevel\":0.0,\"plateIndex\":0,\"modArmor\":-1,\"modKit49\":-1,\"modSpoilers\":-1,\"modFender\":-1,\"windowStatus\":{\"1\":true,\"2\":true,\"3\":true,\"4\":false,\"5\":false,\"6\":true,\"7\":true,\"0\":true},\"modTransmission\":-1,\"modBrakes\":-1,\"modFrontBumper\":-1,\"modPlateHolder\":-1,\"color1\":1,\"tireBurstState\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modLivery\":-1,\"headlightColor\":255,\"modSeats\":-1,\"modEngineBlock\":-1,\"plate\":\"47CBR480\",\"modWindows\":-1,\"pearlescentColor\":7,\"modXenon\":false,\"modTurbo\":false,\"tireBurstCompletely\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modRearBumper\":-1,\"modTrimB\":-1,\"doorStatus\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"tireHealth\":{\"1\":1000.0,\"2\":1000.0,\"3\":1000.0,\"0\":1000.0},\"modHorns\":-1,\"modKit19\":-1,\"modSteeringWheel\":-1,\"modHood\":-1,\"modDial\":-1,\"modTrunk\":-1,\"modKit17\":-1,\"tankHealth\":1000.0592475178704,\"modSmokeEnabled\":false,\"modAPlate\":-1,\"modSuspension\":-1,\"modSideSkirt\":-1,\"modOrnaments\":-1,\"modExhaust\":-1,\"modShifterLeavers\":-1,\"modKit21\":-1,\"oilLevel\":4.76596940834568,\"modRoof\":-1,\"engineHealth\":1000.0592475178704,\"xenonColor\":255,\"modVanityPlate\":-1,\"modArchCover\":-1,\"modTrimA\":-1,\"extras\":{\"10\":true,\"11\":false},\"modGrille\":-1,\"windowTint\":-1,\"modRightFender\":-1}', '47CBR480', NULL, NULL, 100, 1000, 1000, 0, 0, 725968, NULL, 0, 0, 0, 0, NULL, 0, 0, 0, 0),
(11, 'license:584e96891fffa68a4e493021a1bfd2df8d64ae87', 'VZN18712', 'ignus', '-1444114309', '{\"modHood\":-1,\"modStruts\":-1,\"modKit47\":-1,\"doorStatus\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modEngineBlock\":-1,\"modCustomTiresF\":false,\"liveryRoof\":-1,\"modDoorSpeaker\":-1,\"modDial\":-1,\"modVanityPlate\":-1,\"modTransmission\":-1,\"neonEnabled\":[false,false,false,false],\"headlightColor\":255,\"modWindows\":-1,\"modAerials\":-1,\"modCustomTiresR\":false,\"modKit49\":-1,\"wheelSize\":0.0,\"modAPlate\":-1,\"modKit21\":-1,\"modSeats\":-1,\"tireBurstState\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"pearlescentColor\":94,\"modSteeringWheel\":-1,\"modGrille\":-1,\"modExhaust\":-1,\"tyreSmokeColor\":[255,255,255],\"modSmokeEnabled\":false,\"modFrontBumper\":-1,\"xenonColor\":255,\"modRearBumper\":-1,\"modShifterLeavers\":-1,\"modRightFender\":-1,\"modKit17\":-1,\"modDashboard\":-1,\"neonColor\":[0,0,0],\"modAirFilter\":-1,\"modTrunk\":-1,\"plateIndex\":0,\"modArmor\":-1,\"modTrimB\":-1,\"modBackWheels\":-1,\"modSuspension\":-1,\"interiorColor\":17,\"modHydrolic\":-1,\"color2\":88,\"modRoof\":-1,\"plate\":\"89AXM007\",\"model\":-1444114309,\"extras\":[],\"modSpeakers\":-1,\"modFrame\":-1,\"modArchCover\":-1,\"oilLevel\":4.76596940834568,\"fuelLevel\":37.33342703204123,\"modEngine\":-1,\"modHorns\":-1,\"dirtLevel\":0.0,\"dashboardColor\":156,\"modTrimA\":-1,\"modLivery\":-1,\"wheels\":7,\"color1\":59,\"modFrontWheels\":-1,\"engineHealth\":1000.0592475178704,\"tireBurstCompletely\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modSideSkirt\":-1,\"tireHealth\":{\"1\":1000.0,\"2\":1000.0,\"3\":1000.0,\"0\":1000.0},\"modXenon\":false,\"wheelWidth\":0.0,\"modFender\":-1,\"modTurbo\":false,\"windowTint\":-1,\"modBrakes\":-1,\"modTank\":-1,\"modKit19\":-1,\"wheelColor\":158,\"tankHealth\":1000.0592475178704,\"windowStatus\":{\"1\":true,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"6\":true,\"7\":true,\"0\":true},\"modOrnaments\":-1,\"modPlateHolder\":-1,\"modSpoilers\":-1,\"bodyHealth\":1000.0592475178704}', '89AXM007', NULL, NULL, 100, 1000, 1000, 0, 0, 917221, NULL, 0, 0, 0, 0, NULL, 0, 0, 0, 0),
(12, 'license:584e96891fffa68a4e493021a1bfd2df8d64ae87', 'VZN18712', 'ignus', '-1444114309', '{\"modTank\":-1,\"modCustomTiresR\":false,\"modDial\":-1,\"modTransmission\":-1,\"modSteeringWheel\":-1,\"modSpoilers\":-1,\"modEngine\":-1,\"modKit21\":-1,\"modRearBumper\":-1,\"modExhaust\":-1,\"xenonColor\":255,\"plate\":\"48RBY378\",\"modVanityPlate\":-1,\"extras\":[],\"modOrnaments\":-1,\"modHydrolic\":-1,\"modSideSkirt\":-1,\"tireBurstState\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"wheels\":0,\"wheelSize\":0.66600000858306,\"neonEnabled\":[false,false,false,false],\"dashboardColor\":156,\"doorStatus\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modXenon\":false,\"modFrame\":-1,\"modKit49\":-1,\"modFrontBumper\":-1,\"modHorns\":-1,\"bodyHealth\":1000.0592475178704,\"modSpeakers\":-1,\"modDoorSpeaker\":-1,\"modEngineBlock\":-1,\"color1\":[56,23,1],\"engineHealth\":1000.0592475178704,\"model\":-1444114309,\"modBackWheels\":-1,\"liveryRoof\":-1,\"interiorColor\":17,\"modLivery\":7,\"modStruts\":-1,\"modAirFilter\":-1,\"modGrille\":-1,\"dirtLevel\":0.0,\"pearlescentColor\":94,\"plateIndex\":4,\"neonColor\":[0,0,0],\"tyreSmokeColor\":[3,83,255],\"headlightColor\":255,\"tireBurstCompletely\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"oilLevel\":4.76596940834568,\"modWindows\":-1,\"modPlateHolder\":-1,\"wheelColor\":158,\"modRoof\":-1,\"modKit19\":-1,\"modSeats\":-1,\"fuelLevel\":64.3405870126668,\"modTrunk\":-1,\"modKit47\":-1,\"modRightFender\":-1,\"modHood\":-1,\"tireHealth\":{\"1\":1000.0,\"2\":1000.0,\"3\":1000.0,\"0\":1000.0},\"modAPlate\":-1,\"modSmokeEnabled\":1,\"wheelWidth\":0.59799754619598,\"modTrimB\":-1,\"modArmor\":-1,\"tankHealth\":1000.0592475178704,\"modFender\":-1,\"modShifterLeavers\":-1,\"modArchCover\":-1,\"windowTint\":-1,\"windowStatus\":{\"1\":true,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"6\":true,\"7\":true,\"0\":true},\"modKit17\":-1,\"modCustomTiresF\":1,\"modBrakes\":-1,\"modFrontWheels\":26,\"color2\":0,\"modTurbo\":false,\"modSuspension\":-1,\"modTrimA\":-1,\"modAerials\":-1,\"modDashboard\":-1}', '48RBY378', NULL, NULL, 100, 1000, 1000, 0, 0, NULL, NULL, 0, 0, 0, 0, NULL, 0, 0, 0, 0),
(13, 'license:584e96891fffa68a4e493021a1bfd2df8d64ae87', 'VZN18712', 'contender', '683047626', '{\"modShifterLeavers\":-1,\"modTrimA\":-1,\"modSpoilers\":-1,\"modKit47\":-1,\"modGrille\":-1,\"modHydrolic\":-1,\"tireBurstCompletely\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modAerials\":-1,\"neonEnabled\":[false,false,false,false],\"interiorColor\":8,\"modSuspension\":-1,\"fuelLevel\":26.21283174590128,\"tyreSmokeColor\":[255,255,255],\"modSideSkirt\":-1,\"modFrontWheels\":-1,\"modBrakes\":-1,\"dirtLevel\":0.0,\"modEngine\":-1,\"modTransmission\":-1,\"modHood\":-1,\"modHorns\":-1,\"bodyHealth\":1000.0592475178704,\"modCustomTiresF\":false,\"tireBurstState\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modFender\":-1,\"modDashboard\":-1,\"modExhaust\":-1,\"plate\":\"45OQI982\",\"modVanityPlate\":-1,\"modAirFilter\":-1,\"modCustomTiresR\":false,\"modRightFender\":-1,\"liveryRoof\":-1,\"tireHealth\":{\"1\":1000.0,\"2\":1000.0,\"3\":1000.0,\"0\":1000.0},\"modEngineBlock\":-1,\"pearlescentColor\":2,\"modAPlate\":-1,\"modLivery\":-1,\"model\":683047626,\"modStruts\":-1,\"oilLevel\":6.35462587779425,\"modSeats\":-1,\"engineHealth\":1000.0592475178704,\"modKit17\":-1,\"modBackWheels\":-1,\"xenonColor\":255,\"modKit49\":-1,\"modKit21\":-1,\"wheelSize\":0.0,\"modTank\":-1,\"modOrnaments\":-1,\"modArchCover\":-1,\"wheelWidth\":0.0,\"modTurbo\":false,\"modSmokeEnabled\":false,\"modTrunk\":-1,\"plateIndex\":0,\"modRoof\":-1,\"headlightColor\":255,\"modKit19\":-1,\"color1\":12,\"modDial\":-1,\"modSpeakers\":-1,\"modFrontBumper\":-1,\"neonColor\":[0,0,0],\"extras\":{\"1\":true},\"modRearBumper\":-1,\"modWindows\":-1,\"modArmor\":-1,\"modXenon\":false,\"modFrame\":-1,\"modPlateHolder\":-1,\"windowStatus\":{\"1\":true,\"2\":true,\"3\":true,\"4\":false,\"5\":false,\"6\":true,\"7\":true,\"0\":true},\"modTrimB\":-1,\"doorStatus\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"tankHealth\":1000.0592475178704,\"wheels\":3,\"windowTint\":-1,\"modDoorSpeaker\":-1,\"dashboardColor\":156,\"modSteeringWheel\":-1,\"wheelColor\":7,\"color2\":0}', '45OQI982', NULL, NULL, 100, 1000, 1000, 0, 0, NULL, NULL, 0, 0, 0, 0, NULL, 0, 0, 0, 0),
(24, 'license:584e96891fffa68a4e493021a1bfd2df8d64ae87', 'VZN18712', 'ignus', '-1444114309', '{\"modSuspension\":-1,\"modFrontBumper\":-1,\"oilLevel\":4.76596940834568,\"modVanityPlate\":-1,\"modSpeakers\":-1,\"modOrnaments\":-1,\"modPlateHolder\":-1,\"wheels\":7,\"plate\":\"68YYL117\",\"modGrille\":-1,\"xenonColor\":255,\"modSmokeEnabled\":false,\"modKit21\":-1,\"modXenon\":false,\"modDoorSpeaker\":-1,\"modKit47\":-1,\"modHood\":-1,\"color2\":88,\"wheelColor\":158,\"modDashboard\":-1,\"wheelSize\":1.0,\"modExhaust\":-1,\"modRoof\":-1,\"pearlescentColor\":94,\"modHorns\":-1,\"modFender\":-1,\"bodyHealth\":1000.0592475178704,\"tireBurstCompletely\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modWindows\":-1,\"color1\":[1,4,5],\"modKit19\":-1,\"tireHealth\":{\"1\":1000.0,\"2\":1000.0,\"3\":1000.0,\"0\":1000.0},\"neonColor\":[255,0,255],\"modRightFender\":-1,\"modEngine\":-1,\"plateIndex\":0,\"modKit17\":-1,\"modBrakes\":-1,\"modRearBumper\":-1,\"model\":-1444114309,\"modShifterLeavers\":-1,\"tyreSmokeColor\":[255,255,255],\"engineHealth\":1000.0592475178704,\"modAPlate\":-1,\"doorStatus\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":true},\"fuelLevel\":65.13491524739108,\"headlightColor\":255,\"modKit49\":-1,\"liveryRoof\":-1,\"tankHealth\":1000.0592475178704,\"modTurbo\":false,\"modSeats\":-1,\"modStruts\":-1,\"modTank\":-1,\"neonEnabled\":[false,false,false,false],\"dashboardColor\":156,\"modEngineBlock\":-1,\"modTrunk\":-1,\"modDial\":-1,\"modSideSkirt\":-1,\"modCustomTiresF\":false,\"modLivery\":-1,\"modTrimA\":-1,\"modCustomTiresR\":false,\"dirtLevel\":0.0,\"modTrimB\":-1,\"windowTint\":-1,\"wheelWidth\":1.0,\"modArmor\":-1,\"modAirFilter\":-1,\"modFrontWheels\":-1,\"extras\":[],\"modHydrolic\":-1,\"tireBurstState\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modSpoilers\":-1,\"modTransmission\":-1,\"modAerials\":-1,\"windowStatus\":{\"1\":true,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"6\":true,\"7\":true,\"0\":false},\"interiorColor\":17,\"modBackWheels\":-1,\"modFrame\":-1,\"modArchCover\":-1,\"modSteeringWheel\":-1}', '68YYL117', NULL, NULL, 100, 1000, 1000, 0, 0, NULL, NULL, 0, 0, 0, 0, NULL, 0, 0, 0, 0),
(25, 'license:584e96891fffa68a4e493021a1bfd2df8d64ae87', 'VZN18712', 'sentinel3', '1104234922', '{\"tireBurstCompletely\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modTrimB\":-1,\"modBackWheels\":-1,\"modKit47\":-1,\"modSideSkirt\":-1,\"modSteeringWheel\":-1,\"modXenon\":false,\"modKit21\":-1,\"modHood\":-1,\"modStruts\":-1,\"color2\":29,\"modKit19\":-1,\"modBrakes\":-1,\"neonEnabled\":[false,false,false,false],\"model\":1104234922,\"tireHealth\":{\"1\":1000.0,\"2\":1000.0,\"3\":1000.0,\"0\":1000.0},\"modTransmission\":-1,\"modTank\":-1,\"modShifterLeavers\":-1,\"interiorColor\":13,\"wheelColor\":0,\"modRearBumper\":-1,\"plate\":\"28RCN454\",\"modFrontBumper\":-1,\"headlightColor\":255,\"modSeats\":-1,\"modPlateHolder\":-1,\"fuelLevel\":23.82984704172844,\"modKit49\":-1,\"modFrontWheels\":-1,\"wheelSize\":0.0,\"modSpeakers\":-1,\"modFrame\":-1,\"modEngineBlock\":-1,\"pearlescentColor\":134,\"modArchCover\":-1,\"modHydrolic\":-1,\"oilLevel\":6.35462587779425,\"modDoorSpeaker\":-1,\"modHorns\":-1,\"modAirFilter\":-1,\"modCustomTiresR\":false,\"modTrunk\":-1,\"modWindows\":-1,\"modDial\":-1,\"modSmokeEnabled\":false,\"modRightFender\":-1,\"dirtLevel\":0.0,\"modVanityPlate\":-1,\"tyreSmokeColor\":[255,255,255],\"modCustomTiresF\":false,\"modTurbo\":false,\"bodyHealth\":1000.0592475178704,\"modTrimA\":-1,\"wheels\":1,\"color1\":112,\"plateIndex\":0,\"tireBurstState\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modKit17\":-1,\"tankHealth\":1000.0592475178704,\"modExhaust\":-1,\"modSuspension\":-1,\"modSpoilers\":-1,\"modArmor\":-1,\"modRoof\":-1,\"modAPlate\":-1,\"windowTint\":-1,\"extras\":[],\"neonColor\":[0,0,0],\"modEngine\":-1,\"liveryRoof\":-1,\"engineHealth\":1000.0592475178704,\"xenonColor\":255,\"dashboardColor\":111,\"modFender\":-1,\"modOrnaments\":-1,\"modAerials\":-1,\"windowStatus\":{\"1\":true,\"2\":true,\"3\":true,\"4\":false,\"5\":false,\"6\":true,\"7\":true,\"0\":true},\"modLivery\":-1,\"modGrille\":-1,\"wheelWidth\":0.0,\"doorStatus\":{\"1\":false,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"0\":false},\"modDashboard\":-1}', '28RCN454', NULL, NULL, 100, 1000, 1000, 0, 0, NULL, NULL, 0, 0, 0, 0, NULL, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `player_warns`
--

CREATE TABLE `player_warns` (
  `id` int(11) NOT NULL,
  `senderIdentifier` varchar(50) DEFAULT NULL,
  `targetIdentifier` varchar(50) DEFAULT NULL,
  `reason` text DEFAULT NULL,
  `warnId` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `stashitems`
--

CREATE TABLE `stashitems` (
  `id` int(11) NOT NULL,
  `stash` varchar(255) NOT NULL,
  `items` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Đang đổ dữ liệu cho bảng `stashitems`
--

INSERT INTO `stashitems` (`id`, `stash`, `items`) VALUES
(1, 'mechanicSafe', '[]'),
(3, 'policestash_VZN18712', '[]');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `trunkitems`
--

CREATE TABLE `trunkitems` (
  `id` int(11) NOT NULL,
  `plate` varchar(255) NOT NULL,
  `items` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Đang đổ dữ liệu cho bảng `trunkitems`
--

INSERT INTO `trunkitems` (`id`, `plate`, `items`) VALUES
(1, '45OQI982', '[]');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `ak4y_caseopening`
--
ALTER TABLE `ak4y_caseopening`
  ADD PRIMARY KEY (`#`);

--
-- Chỉ mục cho bảng `apartments`
--
ALTER TABLE `apartments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `citizenid` (`citizenid`),
  ADD KEY `name` (`name`);

--
-- Chỉ mục cho bảng `bank_accounts`
--
ALTER TABLE `bank_accounts`
  ADD PRIMARY KEY (`record_id`),
  ADD UNIQUE KEY `citizenid` (`citizenid`),
  ADD KEY `business` (`business`),
  ADD KEY `businessid` (`businessid`),
  ADD KEY `gangid` (`gangid`);

--
-- Chỉ mục cho bảng `bank_cards`
--
ALTER TABLE `bank_cards`
  ADD PRIMARY KEY (`citizenid`),
  ADD KEY `record_id` (`record_id`);

--
-- Chỉ mục cho bảng `bank_statements`
--
ALTER TABLE `bank_statements`
  ADD PRIMARY KEY (`record_id`),
  ADD KEY `business` (`business`),
  ADD KEY `businessid` (`businessid`),
  ADD KEY `gangid` (`gangid`);

--
-- Chỉ mục cho bảng `bans`
--
ALTER TABLE `bans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `license` (`license`),
  ADD KEY `discord` (`discord`),
  ADD KEY `ip` (`ip`);

--
-- Chỉ mục cho bảng `crypto`
--
ALTER TABLE `crypto`
  ADD PRIMARY KEY (`crypto`);

--
-- Chỉ mục cho bảng `crypto_transactions`
--
ALTER TABLE `crypto_transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `citizenid` (`citizenid`);

--
-- Chỉ mục cho bảng `dealers`
--
ALTER TABLE `dealers`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `gloveboxitems`
--
ALTER TABLE `gloveboxitems`
  ADD PRIMARY KEY (`plate`),
  ADD KEY `id` (`id`);

--
-- Chỉ mục cho bảng `houselocations`
--
ALTER TABLE `houselocations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `name` (`name`);

--
-- Chỉ mục cho bảng `house_plants`
--
ALTER TABLE `house_plants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `building` (`building`),
  ADD KEY `plantid` (`plantid`);

--
-- Chỉ mục cho bảng `inventories`
--
ALTER TABLE `inventories`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Chỉ mục cho bảng `lapraces`
--
ALTER TABLE `lapraces`
  ADD PRIMARY KEY (`id`),
  ADD KEY `raceid` (`raceid`);

--
-- Chỉ mục cho bảng `management_funds`
--
ALTER TABLE `management_funds`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `job_name` (`job_name`),
  ADD KEY `type` (`type`);

--
-- Chỉ mục cho bảng `occasion_vehicles`
--
ALTER TABLE `occasion_vehicles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `occasionId` (`occasionid`);

--
-- Chỉ mục cho bảng `okokmarketplace_blackmarket`
--
ALTER TABLE `okokmarketplace_blackmarket`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `okokmarketplace_items`
--
ALTER TABLE `okokmarketplace_items`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `okokmarketplace_vehicles`
--
ALTER TABLE `okokmarketplace_vehicles`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`citizenid`),
  ADD KEY `id` (`id`),
  ADD KEY `last_updated` (`last_updated`),
  ADD KEY `license` (`license`);

--
-- Chỉ mục cho bảng `playerskins`
--
ALTER TABLE `playerskins`
  ADD PRIMARY KEY (`id`),
  ADD KEY `citizenid` (`citizenid`),
  ADD KEY `active` (`active`);

--
-- Chỉ mục cho bảng `player_contacts`
--
ALTER TABLE `player_contacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `citizenid` (`citizenid`);

--
-- Chỉ mục cho bảng `player_houses`
--
ALTER TABLE `player_houses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `house` (`house`),
  ADD KEY `citizenid` (`citizenid`),
  ADD KEY `identifier` (`identifier`);

--
-- Chỉ mục cho bảng `player_mails`
--
ALTER TABLE `player_mails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `citizenid` (`citizenid`);

--
-- Chỉ mục cho bảng `player_outfits`
--
ALTER TABLE `player_outfits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `citizenid` (`citizenid`),
  ADD KEY `outfitId` (`outfitId`);

--
-- Chỉ mục cho bảng `player_vehicles`
--
ALTER TABLE `player_vehicles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `plate` (`plate`),
  ADD KEY `citizenid` (`citizenid`),
  ADD KEY `license` (`license`);

--
-- Chỉ mục cho bảng `player_warns`
--
ALTER TABLE `player_warns`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `stashitems`
--
ALTER TABLE `stashitems`
  ADD PRIMARY KEY (`stash`),
  ADD KEY `id` (`id`);

--
-- Chỉ mục cho bảng `trunkitems`
--
ALTER TABLE `trunkitems`
  ADD PRIMARY KEY (`plate`),
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `ak4y_caseopening`
--
ALTER TABLE `ak4y_caseopening`
  MODIFY `#` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `apartments`
--
ALTER TABLE `apartments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `bank_accounts`
--
ALTER TABLE `bank_accounts`
  MODIFY `record_id` bigint(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `bank_cards`
--
ALTER TABLE `bank_cards`
  MODIFY `record_id` bigint(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `bank_statements`
--
ALTER TABLE `bank_statements`
  MODIFY `record_id` bigint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `bans`
--
ALTER TABLE `bans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `crypto_transactions`
--
ALTER TABLE `crypto_transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `dealers`
--
ALTER TABLE `dealers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `gloveboxitems`
--
ALTER TABLE `gloveboxitems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `houselocations`
--
ALTER TABLE `houselocations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `house_plants`
--
ALTER TABLE `house_plants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `lapraces`
--
ALTER TABLE `lapraces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `management_funds`
--
ALTER TABLE `management_funds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT cho bảng `occasion_vehicles`
--
ALTER TABLE `occasion_vehicles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `okokmarketplace_blackmarket`
--
ALTER TABLE `okokmarketplace_blackmarket`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `okokmarketplace_items`
--
ALTER TABLE `okokmarketplace_items`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `okokmarketplace_vehicles`
--
ALTER TABLE `okokmarketplace_vehicles`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `players`
--
ALTER TABLE `players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=788;

--
-- AUTO_INCREMENT cho bảng `playerskins`
--
ALTER TABLE `playerskins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `player_contacts`
--
ALTER TABLE `player_contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `player_houses`
--
ALTER TABLE `player_houses`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `player_mails`
--
ALTER TABLE `player_mails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `player_outfits`
--
ALTER TABLE `player_outfits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `player_vehicles`
--
ALTER TABLE `player_vehicles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `player_warns`
--
ALTER TABLE `player_warns`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `stashitems`
--
ALTER TABLE `stashitems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `trunkitems`
--
ALTER TABLE `trunkitems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
