CREATE USER 'server_access'@'%' IDENTIFIED BY '2dfb5c80912afcd5b561ae9b2c1a9d45';
GRANT SELECT, INSERT, DELETE, UPDATE ON seta.* TO 'server_access'@'%';

FLUSH PRIVILEGES;