function Thermostat() {
	this.defaultTemperature = 20;
	this.minTemperature = 10;
	this.temperature = this.defaultTemperature;
	this.isPowerSaveOn = true;
	this.maxPowerSaveTemperature = 25;
};

Thermostat.prototype.increaseTemperature = function() {
	return this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	if(this.isPowerSaveOn && this.temperature + degrees > 25) return this.temperature = 25;
	return this.temperature += degrees;
};

Thermostat.prototype.decreaseTemperature = function() {
	return this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	if(this.temperature - degrees < this.minTemperature) return this.temperature = this.minTemperature
	return this.temperature -= degrees;
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