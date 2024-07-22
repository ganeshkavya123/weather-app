CREATE TABLE weather_history (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Location VARCHAR(255) NOT NULL,
    WeatherName VARCHAR(255) NOT NULL,
    Description TEXT,
    Temperature FLOAT,
    DateTime DATETIME NOT NULL
);
