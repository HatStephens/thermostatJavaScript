function Thermostat() {
	this.defaultTemperature = 20;
	this.minTemperature = 10;
	this.temperature = this.defaultTemperature;
	this.isPowerSaveOn = true;
};

Thermostat.prototype.increaseTemperature = function() {
	this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees
};

Thermostat.prototype.decreaseTemperature = function() {
	this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	if(this.temperature - degrees < this.minTemperature) this.temperature = this.minTemperature
	else this.temperature -= degrees;
};

Thermostat.prototype.turnPowerSaveOff = function() {
	this.isPowerSaveOn = false;
};

Thermostat.prototype.turnPowerSaveOn = function() {
	this.isPowerSaveOn = true;
};

Thermostat.prototype.resetTemperature = function() {
	this.temperature = this.defaultTemperature;
};