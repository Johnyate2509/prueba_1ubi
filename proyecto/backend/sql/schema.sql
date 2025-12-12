CREATE TABLE repartidores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  activo TINYINT(1) DEFAULT 1,
  lat DECIMAL(10,6) DEFAULT NULL,
  lng DECIMAL(10,6) DEFAULT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO repartidores (nombre, activo) VALUES
("Juan Pérez", 1),
("Carlos López", 1),
("María Gómez", 0);
