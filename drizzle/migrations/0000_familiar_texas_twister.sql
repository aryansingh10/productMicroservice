CREATE TABLE `products` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` varchar(1000),
	`price` decimal(10,2) NOT NULL,
	CONSTRAINT `products_id` PRIMARY KEY(`id`)
);
